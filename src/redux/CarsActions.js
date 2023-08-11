import {carActionsTypes} from "./carActionsTypes";
import {carsService} from "../services";


const actions = {
    SetCars: (payload) => ({type: carActionsTypes.SET_CARS, payload}),
    setCarForUpdate: (payload) => ({type: carActionsTypes.SET_CAR_FOR_UPDATE, payload}),
}

const getCars = () => async dispatch => {
   const response = await carsService.getAll()
    dispatch(actions.SetCars(response.data))
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
    setCarForUpdate: actions.setCarForUpdate,

}

export {
    carActions,
}