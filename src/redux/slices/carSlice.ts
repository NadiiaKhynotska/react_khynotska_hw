import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {carService} from "../../services";
import {AxiosError} from "axios";
import {IPagination} from "../../interfaces/paginationInterface";
import {RootState} from "../store";

interface IState {
    cars: ICar[];
    carForUpdate: ICar;
    prev: string;
    next: string;
    total_pages: number;
    total_items: number;
    currentPage: number;

}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    prev: null,
    next: null,
    total_pages: null,
    total_items: null,
    currentPage: null,

}

const getAll = createAsyncThunk<{ data: IPagination<ICar>, page: number }, {
    page: number,

}>(
    'carSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll(page)
            return {data, page}
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const create = createAsyncThunk<void, { car: ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue, dispatch, getState}) => {
        try {
            await carService.create(car)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const update = createAsyncThunk<void, { id: number, car: ICar }>(
    'carSlice/update',
    async ({car, id}, {rejectWithValue, dispatch,getState}) => {
        try {
            await carService.updateByID(id, car)
            const {cars:{currentPage}} = getState() as RootState;
            await dispatch(getAll({page:currentPage}))
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }

    }
)

const deleteCar = createAsyncThunk<void, { id: number }>(
    'carSlice/deleteCar',
    async ({id}, {rejectWithValue, dispatch, getState}) => {
        try {
            await carService.deleteById(id)
            const {cars:{currentPage}} = getState() as RootState;
            await dispatch(getAll({page:currentPage}))
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCatForUpdate: (state, action: PayloadAction<{ car: ICar }>) => {
            state.carForUpdate = action.payload.car
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload.data.items
            state.prev = action.payload.data.prev
            state.next = action.payload.data.next
            state.total_pages = action.payload.data.total_pages
            state.total_items = action.payload.data.total_items
            state.currentPage = action.payload.page

        })
        .addCase(update.fulfilled, state => {
            state.carForUpdate = null
        })

})


const {reducer: carReducer, actions} = carSlice

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar
}

export {
    carActions,
    carReducer
}