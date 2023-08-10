import {carActionsTypes} from "./carActionsTypes";
import {carsService} from "../services";

const fetchCarsRequest = () => {
    return {
        type: carActionsTypes.FETCH_CARS_REQUEST
    }
}

const fetchCarsSuccess = (cars) => {
    return {
        type: carActionsTypes.FETCH_CARS_SUCCESS,
        payload: cars
    }
}

const fetchCarsFailure = (error) => {
    return {
        type: carActionsTypes.FETCH_CARS_FAILURE,
        payload: error
    }
}

 export const fetchAllCars = () => {
    return function (dispatch) {
        dispatch(fetchCarsRequest())
       carsService.getAll()
            .then(response => {
//response.data is an arr of cars
                const cars = response.data
                dispatch(fetchCarsSuccess(cars))
            })
            .catch(error => {
//error. message is the error description
                dispatch(fetchCarsFailure(error.message))
            })
    }
}
 export const fetchDeleteCarById =(id)=>{
     return function (dispatch) {
         dispatch(fetchCarsRequest())
         carsService.delete(id)
             carsService.getAll()
             .then(response => {
//response.data is an arr of cars
                 const cars = response.data
                 dispatch(fetchCarsSuccess(cars))
             })
             .catch(error => {
//error. message is the error description
                 dispatch(fetchCarsFailure(error.message))
             })
     }
 }

 export const fetchSaveCar =(car)=>{
     return function (dispatch) {
         dispatch(fetchCarsRequest())
         carsService.create(car)
         carsService.getAll()
             .then(response => {
//response.data is an arr of cars
                 const cars = response.data
                 dispatch(fetchCarsSuccess(cars))
             })
             .catch(error => {
//error. message is the error description
                 dispatch(fetchCarsFailure(error.message))
             })
     }
 }