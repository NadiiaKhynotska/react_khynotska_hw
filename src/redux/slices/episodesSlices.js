import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services";

const initialState = {
    pages: 0,
    episodes: []
};

const getAll = createAsyncThunk(
    'episodesSlices/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodesService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {

        }
    }
)
const episodesSlices = createSlice({
    name: 'episodesSlices',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(getAll.fulfilled, (state, action)=>{
            const {info:{pages}, results} = action.payload;
            state.episodes = results;
            state.pages = pages;
        })
})

const {reducer: episodesReducer, actions} = episodesSlices

const episodesActions = {
    ...actions,
    getAll
}

export {
    episodesReducer,
    episodesActions
}