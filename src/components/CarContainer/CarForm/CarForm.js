import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../../validators";
import style from './CarForm.module.css'

const CarForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid}, setValue
    }
        = useForm({mode: 'all', resolver: joiResolver(carValidator)});

    return (
        <div className={style.create}>
            <h2>{'Update current car'}{'Create New Car'}</h2>
            <form >
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
                <button disabled={!isValid}>{ 'Update car'}{'Add new car'}</button>
            </form>
        </div>
    );
};

export {CarForm};