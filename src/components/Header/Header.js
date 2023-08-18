import React from 'react';

import css from './Header.module.css'
import {useSelector} from "react-redux";

const Header = () => {
    const {currentEpisode} = useSelector(state => state.episodes)
    console.log(currentEpisode)
    return (
        <div className={css.Header}>
            Rick & Morty
        </div>
    );
};

export {Header};