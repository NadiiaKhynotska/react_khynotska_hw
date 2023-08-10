import React, {useEffect, useState} from 'react';
import {Car} from "../Car/Car";
import {fetchAllCars} from "../../../redux";
import {useDispatch, useSelector} from "react-redux";

import style from './Cars.module.css'

const Cars = ({setOnSave,onSave,setUpdateCar}) => {
    const {loading, cars, error} = useSelector(state => state.cars)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchAllCars())
    }, [onSave]);



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
                    {cars.map(car => <Car key={car.id} car={car} setOnSave={setOnSave} />)}
                </div>
            </div>

    )
};

export {Cars};