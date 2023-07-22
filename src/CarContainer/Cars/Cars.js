import React, {useContext, useEffect, useState} from 'react';

import Car from "../Car/Car";
import {carServices} from "../../servises/carServices";
import {Context} from "../CarContainer";
import style from'./Cars.module.css'

const Cars = () => {
    const [cars, setCars] = useState([]);
    const {trigger,setTrigger} = useContext(Context)

    useEffect(()=>{
        carServices.getAll().then(({data})=> setCars(data))
    },[trigger])

    const deleteById = async (id)=>{
        await carServices.deleteById(id).then(()=> setTrigger() )
    }

    return (
        <div className={style.wrapper}>
            {cars.map(car =>  <Car key={car.id} car={car} deleteById={deleteById}/>)}
        </div>
    );
};

export default Cars;
