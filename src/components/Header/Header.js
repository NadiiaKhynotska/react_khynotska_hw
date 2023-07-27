import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {UserInfo} from "./UserInfo/UserInfo";

const Header = () => {
    return (
        <div className={css.header}>
            <UserInfo/>
            <NavLink to={'movie'}>All films</NavLink>
            <NavLink to={'genres'}>All genres</NavLink>
        </div>
    );
};

export {Header};