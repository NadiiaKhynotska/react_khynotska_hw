import {carActionsTypes} from "./carActionsTypes";
import {carsService} from "../services";

const fetchCarsRequest = () => {
    return {
        action: carActionsTypes.FETCH_CARS_REQUEST
    }
}

const fetchCarsSuccess = (cars) => {
    return {
        action: carActionsTypes.FETCH_CARS_SUCCESS,
        payload: cars
    }
}

const fetchCarsFailure = (error) => {
    return {
        action: carActionsTypes.FETCH_CARS_FAILURE,
        payload: error
    }
}
// const createCar = (car) => {
//     return {
//         action: carActionsTypes.CREATE_CAR,
//         payload: car
//     }
// }
//
// const deleteCar = (id) => {
//     return {
//         action: carActionsTypes.DELETE_CAR,
//         payload: id
//     }
// }
//
// const updateCar =( id, car)=>{
//     return{
//         action: carActionsTypes.UPDATE_CAR,
//         payload: id,car
//     }
// }

 export const fetchCars = () => {
    return function (dispatch) {
        dispatch(fetchCarsRequest())
       carsService.getAll()
            .then(response => {
//response.data is an arr of users
                const cars = response.data
                dispatch(fetchCarsSuccess(cars))
            })
            .catch(error => {
//error. message is the error description
                dispatch(fetchCarsFailure(error.message))
            })
    }
}
//
// const fetchCarsCreate = () => {
//     return function (dispatch) {
//         dispatch(fetchCarsRequest())
//         carsService.create()
//             .then(response => {
// //response.data is an arr of users
//                 const car = response.data
//                 dispatch(fetchCarsSuccess(car))
//                 dispatch(createCar(car))
//             })
//             .catch(error => {
// //error. message is the error description
//                 dispatch(fetchCarsFailure(error.message))
//             })
//     }
// }
//
// const fetchCarsDelete = () => {
//     return function (dispatch) {
//         dispatch(fetchCarsRequest())
//         carsService.delete()
//             .then(response => {
// //response.data is an arr of users
//                 const cars = response.data
//                 dispatch(fetchCarsSuccess(cars))
//             })
//             .catch(error => {
// //error. message is the error description
//                 dispatch(fetchCarsFailure(error.message))
//             })
//     }
// }