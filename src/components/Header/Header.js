import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={'movie/now_playing'}>Now Playing</NavLink>
            <NavLink to={'movie/popular'}>Popular</NavLink>
            <NavLink to={'movie/top_rated'}>Top Rated</NavLink>
            <NavLink to={'movie/upcoming'}>Upcoming</NavLink>
        </div>
    );
};

export {Header};