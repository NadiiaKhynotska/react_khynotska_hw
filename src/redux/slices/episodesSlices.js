import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services";
import {progressActions} from "./progressSlice";

const initialState = {
    pages: 0,
    episodes: [],
    currentEpisode:null,
};

const getAll = createAsyncThunk(
    'episodesSlices/getAll',
    async ({page}, thunkAPI) => {
        try {
            thunkAPI.dispatch(progressActions.setIsProgress(true))

            await new Promise(resolve => setTimeout(resolve,2000))
            const {data} = await episodesService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(progressActions.setIsProgress(false))
        }
    }
)
const episodesSlices = createSlice({
    name: 'episodesSlices',
    initialState,
    reducers: {
        steCurrentEpisode:(state, action)=>{
            state.currentEpisode=action.payload
        }
    },
    extraReducers: builder =>
        builder.addCase(getAll.fulfilled, (state, action)=>{
            const {info:{pages}, results} = action.payload;
            state.episodes = results;
            state.pages = pages;
            state.currentEpisode = null;
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