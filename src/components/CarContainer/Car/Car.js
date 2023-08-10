import React, {useEffect} from 'react';

import style from './Car.module.css'
import {useDispatch} from "react-redux";
import {fetchDeleteCarById} from "../../../redux";

const Car = ({car,setOnSave}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch()

    const deleteCar = (id) => {
        dispatch(fetchDeleteCarById(id))


    }


    return (
        <div className={style.create}>
            <h4>Car id: {id}</h4>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button>Update</button>
            <button onClick={() => {
                {
                    deleteCar(id)
                    setOnSave(prev => !prev)
                }
            }}>Delete</button>

        </div>
    );
};

export {Car};