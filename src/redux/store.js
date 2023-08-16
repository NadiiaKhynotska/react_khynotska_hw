import {configureStore} from "@reduxjs/toolkit";
import {episodeReducer} from "./slices/episodesSlice";

const store = configureStore({
    reducer: {
        episodes: episodeReducer()
    }
});

export {
    store
}