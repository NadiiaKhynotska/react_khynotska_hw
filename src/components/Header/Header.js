import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {UserInfo} from "./UserInfo/UserInfo";

const Header = () => {
    return (
        <div className={css.header}>
            <UserInfo/>
            <NavLink to={'movie'}>All movies</NavLink>
            <NavLink to={'/movie/:id'}>Movie details</NavLink>
        </div>
    );
};

export {Header};