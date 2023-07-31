import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={'/posts'}> Posts </NavLink>
            <NavLink to={'/comments'}> Comments </NavLink>
            <NavLink to={'/cars'}> Cars </NavLink>
        </div>
    );
};

export {Header};