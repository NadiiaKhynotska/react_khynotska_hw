import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import style from './Cars.module.css'
import {carActions} from "../../../redux";

const Cars = () => {
    const {cars} = useSelector(state => state.cars)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(carActions.getCars())
    }, [dispatch]);



    console.log(cars)

    return (
            <div>
                <h1>Cars list</h1>
                <div className={style.wrapper}>
                    {cars.map(car => <Car key={car.id} car={car} />)}
                </div>
            </div>

    )
};

export {Cars};