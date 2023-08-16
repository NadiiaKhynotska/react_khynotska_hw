import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {episodeService} from "../../services";
import {useSearchParams} from "react-router-dom";


const initialState = {
    prevPage: null,
    nextPage: null,
    episodes: [],
    errors: null,
    isLoading: null
}


const all = createAsyncThunk(
    'episodesSlice/all',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page)
                .map(
                    episode => ({
                        ...episode,
                        characters: episode.characters.map(character => character.split("/").slice(-1)[0]).join(',')
                    })
                )
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(all.fulfilled, (state, action) => {
                state.episodes = action.payload
            })
            .addMatcher(isPending(), state => {
                state.isLoading = true
                state.errors = null
            })
            .addMatcher(isFulfilled(), state => {
                state.isLoading = false
                state.errors = null
            })
            .addMatcher(isRejected(), (state, action) => {
                state.isLoading = false
                state.errors = action.payload
            })
})

const{reducer: episodeReducer}= episodesSlice

const episodeActions ={
    all,
}

export {
    episodeReducer,
    episodeActions
}