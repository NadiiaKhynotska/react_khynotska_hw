import React, {useContext, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import style from './CarForm.module.css'
import {carValidator} from "../../Validators/carValidator";
import {carServices} from "../../servises/carServices";
import {Context} from "../CarContainer";

const CarForm = () => {
    const {setTrigger, setUpdateCar, updateCar} = useContext(Context);
    const {
        register,
        reset,
        handleSubmit,
        setValue,
        formState: {errors, isValid}
    } = useForm({mode: 'all', resolver: joiResolver(carValidator)});

    const submit = async (data) => {
        try {
            await carServices.create(data)
            reset()
            setTrigger()
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand, {shouldValidate: true})
            setValue('price', updateCar.price, {shouldValidate: true})
            setValue('year', updateCar.year, {shouldValidate: true})
        }
    }, [updateCar])

    const update = async (data) => {
      await  carServices.updateById(data, updateCar.id)
        reset()
        setUpdateCar(null)
        setTrigger()
    }


    return (
        <div className={style.create}>
            <h2>{updateCar ? 'Update current car' : 'Create New Car'}</h2>
            <form onSubmit={handleSubmit(updateCar ? update : submit)}>
                <label>Brand</label>
                <input
                    type='text'
                    {...register('brand')}
                />
                {errors.brand && <span>{errors.brand.message}</span>}

                <label>Price</label>
                <input
                    type='number'
                    {...register('price',
                        {
                            valueAsNumber: true
                        }
                    )}
                />
                {errors.price && <span>{errors.price.message}</span>}

                <label>Year of manufactured</label>
                <input
                    type='number'
                    {...register('year',
                        {
                            valueAsNumber: true
                        }
                    )}
                />
                <div>{errors.year && <span>{errors.year.message}</span>}</div>
                <button disabled={!isValid}>{updateCar ? 'Update car' : 'Add new car'}</button>
            </form>
        </div>
    );
};

export default CarForm;