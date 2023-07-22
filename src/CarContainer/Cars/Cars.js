import React, {useContext, useEffect, useState} from 'react';

import Car from "../Car/Car";
import {carServices} from "../../servises/carServices";
import {Context} from "../CarContainer";
import style from'./Cars.module.css'

const Cars = () => {
    const [cars, setCars] = useState([]);
    const {trigger} = useContext(Context)

    useEffect(()=>{
        carServices.getAll().then(({data})=> setCars(data))
    },[trigger])

    return (
        <div className={style.wrapper}>
            {cars.map(car =>  <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;
