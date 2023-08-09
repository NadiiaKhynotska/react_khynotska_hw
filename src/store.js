import {carsReducer} from "./redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cars: carsReducer,

})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export {store, rootReducer}