import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../../validators";
import style from './CarForm.module.css'
import {useDispatch} from "react-redux";
import {fetchSaveCar} from "../../../redux";

const CarForm = ({setOnSave,updateCar,setUpdateCar}) => {

    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid}, setValue
    }
        = useForm({mode: 'all', resolver: joiResolver(carValidator)});

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand, {shouldValidate: true})
            setValue('price', updateCar.price, {shouldValidate: true})
            setValue('year', updateCar.year, {shouldValidate: true})
        }
    }, [updateCar])

    const update = (car)=>{
        if (updateCar) {
            fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${updateCar.id}`, {
                headers: {'content-type': 'application/json'},
                method: 'PUT',
                body: JSON.stringify(car)
            }).then(response => response.json())
                .then(() => {
                    setOnSave(prev => !prev)
                    setUpdateCar(!updateCar)
                    reset()
                })

        }}


    const save = (car) => {{}
        dispatch(fetchSaveCar(car))
        setOnSave(prev=>! prev)
        reset()
    }

    return (
        <div className={style.create}>
            <h2>{'Update current car'}{'Create New Car'}</h2>
            <form onSubmit={handleSubmit(save)}>
                <label>Brand</label>
                <input
                    type='text'
                    {...register('brand',
                    )}
                />
                {errors.brand && <span>{errors.brand.message}</span>}

                <label>Price</label>
                <input
                    type='number'
                    {...register('price',
                        {
                            valueAsNumber: true,
                        }
                    )}
                />
                {errors.price && <span>{errors.price.message}</span>}

                <label>Year of manufactured</label>
                <input
                    type='number'
                    {...register('year',
                        {
                            valueAsNumber: true,
                        }
                    )}
                />
                <div>{errors.year && <span>{errors.year.message}</span>}</div>
                <button disabled={!isValid}>{'Update car'}{'Add new car'}</button>
            </form>
        </div>
    );
};

export {CarForm};