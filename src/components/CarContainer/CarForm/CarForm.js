import React from 'react';
import {useForm} from "react-hook-form";

import style from './CarForm.module.css'

const CarForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid}
    } = useForm();

    const save = (car) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(response => response.json())
            .then(car => {
                console.log(car)
            })
    }
    return (
        <div className={style.create}>
            <h2>{'Create New Car'}</h2>
            <form onSubmit={handleSubmit(save)}>
                <label>Brand</label>
                <input
                    type='text'
                    {...register('brand')}
                />

                <label>Price</label>
                <input
                    type='number'
                    {...register('price')}
                />

                <label>Year of manufactured</label>
                <input
                    type='number'
                    {...register('year')}
                />
                <button>{'Add new car'}</button>
            </form>
        </div>
    );
};

export default CarForm;