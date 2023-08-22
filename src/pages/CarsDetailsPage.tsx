import React, {useEffect, useState} from 'react';
import {useAppLocation} from "../hooks";
import {ICar} from "../interfaces";
import {useParams} from "react-router-dom";
import {carService} from "../services";
import {CarDetails} from "../components";


const CarsDetailsPage = () => {
    const {state} = useAppLocation<ICar>();
    const {id} = useParams();

    const [car, setCar] = useState<ICar>(null)

    useEffect(()=>{
        if(state){
            setCar(state)
        }else {
            carService.getById(+id).then(({data})=>setCar(data))
        }
    },[id, state])
    return (
        <div>
            {car &&<CarDetails car={car}/>}
        </div>
    );
};

export {CarsDetailsPage};