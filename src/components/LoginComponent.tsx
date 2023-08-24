import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IAuth} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {authAction} from "../redux";
import {useNavigate} from "react-router-dom";
import css from './CarForm.module.css'

const LoginComponent = () => {

    const {errors} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {register, reset, handleSubmit} = useForm<IAuth>();
    const login: SubmitHandler<IAuth> = async (user) => {
        const {meta:{requestStatus}} = await dispatch(authAction.login({user}));

        if(requestStatus === 'fulfilled'){
            reset()
            navigate('/cars')
        }
    };

    return (
        <div className={css.CarForm}>
            <form onSubmit={handleSubmit(login)}>
                <input type="text" placeholder={'username'}{...register('username')}/>
                <input type="text" placeholder={'password'}{...register('password')}/>
                <button>Login</button>
                {errors && <span>{errors.detail}</span>}
            </form>
        </div>
    );
};

export {LoginComponent};