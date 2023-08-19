import {configureStore} from "@reduxjs/toolkit";
import {episodesReducer} from "./slices/episodesSlices";

const store = configureStore({
    reducer: {
        episodes: episodesReducer,
    }
})

export {store}