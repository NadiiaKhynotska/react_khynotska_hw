import React from 'react';

import style from './Car.module.css'
const Car = ({car,handleDelete,handleUpdate}) => {
    const {id,brand, price, year} = car;



    return (
        <div className={style.create}>
            <h4>Car id: {id}</h4>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>{handleUpdate(car)}}>Update</button>
            <button onClick={()=> handleDelete(id)}>Delete</button>

        </div>
    );
};

export default Car;