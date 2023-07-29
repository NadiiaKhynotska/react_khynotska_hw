import React from 'react';

import css from './MovieListItem.module.css'
import StarRatings from "react-star-ratings/build/star-ratings";
import {Link} from "react-router-dom";

const MovieListItem = ({movieListItem, genres}) => {
    const {id, title, poster_path, genre_ids, vote_average} = movieListItem

    return (
        <div className={css.create}>
            <div style={{height: '90%', width: '100%'}}>
                <Link to={`/movie/${id}`}> {poster_path && <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>}</Link>
                <Link to={`/movie/${id}`}><h5>{title}</h5></Link>
                {genre_ids?.map(movieGenre => (<p>{
                    genres?.filter(value => value.id === movieGenre)[0]?.name}</p>))}
            </div>
            <div>
                { vote_average && <StarRatings
                    rating={vote_average / 2}
                    starDimension="20px"
                    starSpacing="13px"
                    numberOfStars={5}
                    starRatedColor="gold"/>}
            </div>

        </div>
    );
};

export {MovieListItem};