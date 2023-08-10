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
                loading: false,
                carForUpdate: null,
                cars: action.payload,
                error: ''
            }
        case carActionsTypes.SET_CAR_FOR_UPDATE:
            return {
                cars: [],
                loading: false,
                carForUpdate: action.payload,
                error: ''

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