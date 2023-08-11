import React from 'react';
import {useForm} from "react-hook-form";



import style from './CarForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../../redux";

const CarForm = () => {

    const dispatch = useDispatch()
    const {carForUpdate} = useSelector(state => state.cars);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid}, setValue
    }
        = useForm()
    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }


    const update = async (car) => {
        await dispatch(carActions.updateCar(carForUpdate.id, car))
        reset()
    }


    const save = async  (car) => {
      await dispatch(carActions.createCar(car))
        reset()
    }

    return (
        <div className={style.create}>
            <h2>{carForUpdate? 'Update current car':'Create New Car'}</h2>
            <form onSubmit={handleSubmit(carForUpdate? update: save)}>
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
                    {...register('price',{
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
                <button disabled={!isValid}>{carForUpdate? 'Update car':'Add new car'}</button>
            </form>
        </div>
    );
};

export {CarForm};