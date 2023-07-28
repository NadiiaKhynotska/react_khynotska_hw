import React from 'react';

import css from './MovieListItem.module.css'

const MovieListItem = ({movieListItem, genres}) => {
    const {title, poster_path, genre_ids} = movieListItem
    let currentGenre = ''

    return (
        <div className={css.create}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
            <h5>{title}</h5>
                {genre_ids?.map(movieGenre => {
                  currentGenre = genres?.filter(value => value.id === movieGenre)[0];
                })}
            <p> Genre: {currentGenre.name}</p>


        </div>
    );
};

export {MovieListItem};