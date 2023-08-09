import React from 'react';

import style from './Car.module.css'

const Car = ({car}) => {
    const {id,brand, price, year} = car;
    return (
        <div className={style.create}>
            <h4>Car id: {id}</h4>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button >Update</button>
            <button >Delete</button>

        </div>
    );
};

export {Car};