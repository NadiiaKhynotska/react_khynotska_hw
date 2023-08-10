import {carActionsTypes} from "./carActionsTypes";
import {carsService} from "../services";


const actions = {
    CarsRequest: () => ({type: carActionsTypes.FETCH_CARS_REQUEST}),
    SetCars: (payload) => ({type: carActionsTypes.SET_CARS, payload}),
    setCarForUpdate: (payload) => ({type: carActionsTypes.SET_CAR_FOR_UPDATE, payload}),
    fetchCarsFailure: (payload) => ({type: carActionsTypes.FETCH_CARS_FAILURE, payload})
}

const getCars = () => async dispatch => {
    dispatch(actions.CarsRequest)
    const {data} = await carsService.getAll()
        .catch(error => {
            dispatch(actions.fetchCarsFailure(error.message))
        })
    dispatch(actions.SetCars(data))

}

const deleteCar = (id) => async dispatch => {
    await carsService.delete(id)
    await dispatch(getCars())
}

const createCar = (car) => async dispatch => {
    await carsService.create(car)
    await dispatch(getCars())
}

const updateCar = (id, car) => async dispatch => {
    await carsService.updateById(id, car)
    dispatch(actions.setCarForUpdate(null))
    await dispatch(getCars())
}


const carActions = {
    getCars,
    deleteCar,
    createCar,
    updateCar,
    setCarForUpdate: actions.setCarForUpdate
}

export {
    carActions,
}