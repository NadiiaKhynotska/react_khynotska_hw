import React from 'react';

import style from './Car.module.css'
const Car = ({car,handleDelete,setOnUpdate}) => {
    const {id,brand, price, year} = car;



    return (
        <div className={style.create}>
            <h4>Car id: {id}</h4>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>{setOnUpdate(car)}}>Update</button>
            <button onClick={()=> handleDelete(id)}>Delete</button>

        </div>
    );
};

export default Car;