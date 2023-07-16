import React, {useEffect, useState} from 'react';

import Car from "../Car/Car";
import style from './Cars.module.css'

const Cars = ({onSave}) => {
    const [cars, setCars] = useState([]);
    // const [onDelete, setOnDelete] = useState(true);

    useEffect(()=>{
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(response => response.json())
            .then(cars => setCars(cars))
    },[onSave])
    return (
        <div className={style.wrapper}>
            {cars.map(car=> <Car
                car={car}
                key={car.id}
                // setOnUpdate={setOnUpdate}
                // handleDelete={handleDelete}
            />)}
        </div>
    );
};

export default Cars;