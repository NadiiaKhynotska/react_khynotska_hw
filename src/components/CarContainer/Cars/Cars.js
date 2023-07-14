import React, {useEffect, useState} from 'react';

import Car from "../Car/Car";
import style from './Cars.module.css'

const Cars = ({onSave,handleUpdate}) => {
    const [cars, setCars] = useState([]);
    const [onDelete, setOnDelete] = useState(true);

    useEffect(()=>{
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(response => response.json())
            .then(cars => setCars(cars))
    },[onSave,onDelete])

    const handleDelete = (id) => {
            fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
                method: 'DELETE',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => setOnDelete(!onDelete))
    }

    return (
        <div className={style.wrapper}>
            {cars.map(car=> <Car
                car={car}
                key={car.id}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
            />)}
        </div>
    );
};

export default Cars;