import React from 'react';

import style from './Car.module.css'
import {useDispatch} from "react-redux";
import {carActions} from "../../../redux";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch()

    return (
        <div className={style.create}>
            <h4>Car id: {id}</h4>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>{dispatch(carActions.setCarForUpdate(car))}}>Update</button>
            <button onClick={() => {dispatch(carActions.deleteCar(id))}}>Delete</button>

        </div>
    );
};

export {Car};