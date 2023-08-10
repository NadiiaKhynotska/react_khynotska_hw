import React, {useState} from 'react';
import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";

const CarContainer = () => {
    const [onSave, setOnSave] = useState(null)
    const [updateCar, setUpdateCar] = useState(null);

    return (
        <div>
            <CarForm setOnSave={setOnSave} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
            <Cars setOnSave={setOnSave} onSave={onSave} setUpdateCar={setUpdateCar}/>

        </div>
    );
};

export {CarContainer};