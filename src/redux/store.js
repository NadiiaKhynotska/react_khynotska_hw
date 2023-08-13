import {applyMiddleware, combineReducers, createStore} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import {episodesReducer} from "./reducers/episodesReducer";
import {characterReducer} from "./reducers/characterReducer";

const rootReducer = combineReducers({
    episodes: episodesReducer,
    characters: characterReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export {store}