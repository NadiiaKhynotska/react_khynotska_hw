import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IAuth} from "../interfaces";
import css from './CarForm.module.css'
import {useAppDispatch, useAppSelector} from "../hooks";
import {authAction} from "../redux";
import {useNavigate} from "react-router-dom";

const RegisterComponent = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {errors} = useAppSelector(state => state.auth);

    const {reset, register, handleSubmit} = useForm<IAuth>();

    const registerUser: SubmitHandler<IAuth> = async (user) => {
        const {meta:{requestStatus}} = await dispatch(authAction.register({user}));

        if (requestStatus === 'fulfilled'){
            reset()
            navigate('/login')
        }
    };

    return (
        <div className={css.CarForm}>
            <form onSubmit={handleSubmit(registerUser)}>
                <input type={'text'} placeholder={'username'} {...register('username')}/>
                <input type={'text'} placeholder={'password'} {...register('password')}/>
                <button>Register</button>
                {errors?.username && <span> User name is already exist</span>}
            </form>
        </div>
    )
};

export {RegisterComponent};