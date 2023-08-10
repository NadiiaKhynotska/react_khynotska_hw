import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import style from './Cars.module.css'
import {carActions} from "../../../redux";

const Cars = () => {
    const {loading, cars, error} = useSelector(state => state.cars)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(carActions.getCars())
    }, [dispatch]);



    console.log(cars)

    return (
            loading ?
            <h1>Loading.....</h1>
            : error ?
            <h1>Request finished with error {error}</h1>
            :
            <div>
                <h1>Cars list</h1>
                <div className={style.wrapper}>
                    {cars.map(car => <Car key={car.id} car={car} />)}
                </div>
            </div>

    )
};

export {Cars};