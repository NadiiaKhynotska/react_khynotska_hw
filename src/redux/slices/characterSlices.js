import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {progressActions} from "./progressSlice";
import {charactersService, episodesService} from "../../services";

let initialState={
    characters:[]
};

const getByIds = createAsyncThunk(
'characterSlices/getByIds',
    async ({iDs}, thunkAPI) => {
        try {
            thunkAPI.dispatch(progressActions.setIsProgress(true))

            await new Promise(resolve => setTimeout(resolve,2000))
            const {data} = await charactersService.getAll(iDs);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(progressActions.setIsProgress(false))
        }
    }
)
const characterSlices = createSlice({
    name: 'characterSlices',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(getByIds.fulfilled,( state, action)=>{
                state.characters = action.payload
            })
    }
})

const {reducer:charactersReducer,actions}= characterSlices

const charactersActions ={
    ...actions,
    getByIds,
}

export {
    charactersActions,
    charactersReducer
}