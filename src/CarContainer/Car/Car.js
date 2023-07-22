import React, {useContext} from 'react';

import style from './Car.module.css'
import {carServices} from "../../servises/carServices";
import {Context} from "../CarContainer";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const {setTrigger,setUpdateCar} = useContext(Context);
     const handleDelete = async (id)=>{
         await carServices.deleteById(id).then(()=> setTrigger() )
     }

    return (
        <div className={style.create}>
            <h4>Car id: {id}</h4>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>{setUpdateCar(car)}}>Update</button>
            <button onClick={()=> handleDelete(id)}>Delete</button>

        </div>
    );
};

export default Car;