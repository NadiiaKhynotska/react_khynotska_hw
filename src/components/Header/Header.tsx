import React from 'react';

import css from './Header.module.css'
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authAction} from "../../redux";

const Header = () => {
    const {me} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    if(authService.getAccessToken() && !me){
dispatch(authAction.me())
    }

    return (
        <div className={css.Header}>

            {
                me?
                    <div>{me.username} --- {new Date(me.last_login).toDateString()}</div>
                    :
                    <div>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>
            }
        </div>
    );
};

export {Header};