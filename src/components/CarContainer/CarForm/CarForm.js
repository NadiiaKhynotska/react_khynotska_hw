import React from 'react';
import {useForm} from "react-hook-form";

import style from './CarForm.module.css'
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../Validators/carValidator";

const CarForm = ({setOnSave}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid}
    } = useForm({mode: 'all', resolver: joiResolver(carValidator)});

    const save = (car) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(car => {
                if (!car.ok) {
                    throw Error(car.status = 'not ok, check out your request')
                }
                return car.json()
            })
            .then(() => {
                setOnSave(prev => !prev)
                reset()
            })
            .catch(e => {
                console.log(e)
            })
    }
    return (
        <div className={style.create}>
            <h2>{'Create New Car'}</h2>
            <form onSubmit={handleSubmit(save)}>
                <label>Brand</label>
                <input
                    type='text'
                    {...register('brand',
                        // {required: true}
                    )}
                />

                <label>Price</label>
                <input
                    type='number'
                    {...register('price',
                        {
                            valueAsNumber: true,
                            // required: true,
                            // min: {value: 0, message: 'Price must be gte 0'},
                            // max: {value: 1000000, message: 'Max price is 1000000'},
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
                            // required: true,
                            // min: 1990,
                            // max: new Date().getFullYear()
                        }
                    )}
                />
                <button disabled={!isValid}>{'Add new car'}</button>
            </form>
        </div>
    );
};

export default CarForm;