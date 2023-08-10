
import {carActionsTypes} from "./carActionsTypes";

const initialState = {
    loading: false,
    cars: [],
    carForUpdate: null,
    error: '',

}
const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case carActionsTypes.FETCH_CARS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case carActionsTypes.SET_CARS:
            return {
                ...state,
                loading: false,
                cars: action.payload,
            }
        case carActionsTypes.SET_CAR_FOR_UPDATE:
            return {
              ...state,
                loading: false,
                carForUpdate: action.payload,

            }
        case carActionsTypes.FETCH_CARS_FAILURE:
            return {
                loading: false,
                cars: [],
                carForUpdate: null,
                error: action.payload
            }
        default:
            return state
    }
}
export {carsReducer}