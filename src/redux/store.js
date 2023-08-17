import {configureStore} from "@reduxjs/toolkit";
import {episodeReducer} from "./slices/episodesSlice";
import {characterReducer} from "./slices/charactersSlice";

const store = configureStore({
    reducer: {
        episodes: episodeReducer,
        characters: characterReducer
    }
});

export {
    store
}