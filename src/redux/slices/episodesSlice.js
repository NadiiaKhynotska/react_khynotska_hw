import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {episodeService} from "../../services";



const initialState = {
    prevPage: null,
    nextPage: null,
    episodes: [],
    errors: null,
    isLoading: null,
    currentEpisode:null,
}


const all = createAsyncThunk(
    'episodesSlice/all',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        setCurrentEpisode:(state, action)=>{
            state.currentEpisode = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(all.fulfilled, (state, action) => {
                state.episodes = action.payload.results.map(
                    episode => ({
                        ...episode,
                        characters: episode.characters.map(character => character.split("/").slice(-1)[0]).join(',')
                    }))
                state.prevPage = action.payload.info.prev
                state.nextPage = action.payload.info.next
                state.currentEpisode = null
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

const {reducer: episodeReducer,actions} = episodesSlice

const episodeActions = {
    setCurrentEpisode: actions.setCurrentEpisode,
    all,
}

export {
    episodeReducer,
    episodeActions
}