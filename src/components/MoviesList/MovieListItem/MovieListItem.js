import React from 'react';

import css from './MovieListItem.module.css'

const MovieListItem = ({movieListItem}) => {
    const {title, poster_path} = movieListItem
    return (
        <div className={css.create}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
            <h5>{title}</h5>
        </div>
    );
};

export {MovieListItem};