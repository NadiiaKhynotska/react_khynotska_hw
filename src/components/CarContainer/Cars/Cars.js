import React, {useEffect} from 'react';
import {Car} from "../Car/Car";
import {fetchCars} from "../../../redux";
import {useDispatch, useSelector} from "react-redux";

import style from './Cars.module.css'

const Cars = () => {
    const {loading, cars, error} = useSelector(state => state.cars)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCars())
    }, []);

    return(
    <div className={style.wrapper}>
        {loading} ?
        <h1>Loading.....</h1>
         : {error} ?
        <h1>Request finished with error {error}</h1>
         :
        <div>
            <h1>Cars list</h1>
            <div>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    </div>
    )
};

export {Cars};