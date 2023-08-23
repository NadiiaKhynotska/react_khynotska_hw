import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {CarForm, Cars} from "../components";
import {ICar} from "../interfaces";
import {carService} from "../services";

const CarsPage = () => {
    // const [cars, setCars] = useState<ICar[]>([])
    // const [trigger, setTrigger] = useState<boolean>(true)
    // const [carForUpdate, setCarForUpdate] = useState<ICar>(null)
    //
    // useEffect(()=>{
    //     carService.getAll().then(({data})=>setCars(data))
    // },[trigger])

    return (
        <div>
            <Outlet/>
            {/*<CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>*/}
            {/*<Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>*/}
            <CarForm />
            <Cars/>
        </div>
    );
};

export {CarsPage};