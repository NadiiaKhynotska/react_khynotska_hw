import {configureStore} from "@reduxjs/toolkit";
import {episodesReducer} from "./slices/episodesSlices";
import {progressReducer} from "./slices/progressSlice";
import {charactersReducer} from "./slices/characterSlices";

const store = configureStore({
    reducer: {
        episodes: episodesReducer,
        progress: progressReducer,
        characters: charactersReducer
    }
})

export {store}