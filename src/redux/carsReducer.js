import {carsService} from "../services";
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
        case carActionsTypes.FETCH_CARS_SUCCESS:
            return {
                loading: false,
                cars: action.payload,
                error: '',
            }
        case carActionsTypes.FETCH_CARS_FAILURE:
            return {
                loading: false,
                cars: [],
                error: action.payload
            }
        default:
            return state
    }
}
export {carsReducer}