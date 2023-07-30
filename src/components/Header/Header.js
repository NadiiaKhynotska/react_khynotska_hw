import React from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={'/user'}> User </NavLink>
            <NavLink to={'/topRated'}> Home </NavLink>
            <NavLink to={'/movie'}> Movie list </NavLink>
            {/*<NavLink to={'movie/:movieId'}> Movie info </NavLink>*/}

        </div>
    );
};

export {Header};