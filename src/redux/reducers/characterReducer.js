import {charactersActions, charactersActionsTypes} from "../actions/charactersActions";

const initialState = {
    characters: []
}
const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case charactersActionsTypes.SET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state
    }
}
export {characterReducer}