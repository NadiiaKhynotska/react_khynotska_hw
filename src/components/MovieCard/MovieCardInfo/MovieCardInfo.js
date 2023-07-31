import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";
import {posterUrl} from "../../../constans";
import css from './MovieCardInfo.module.css'

const MovieCardInfo = ({movie}) => {
    const {poster_path, title, overview, vote_average} = movie
    return (
        <div className={css.create}>
            <div className={css.imgBox}>{poster_path && <img src={`${posterUrl}${poster_path}`}/>}</div>
            <div className={css.info}>
                <h1>{title}</h1>
                <p style={{width:'80%'}}>{overview}</p>
                <div>
                    {vote_average && <StarRatings
                        rating={vote_average / 2}
                        starDimension="20px"
                        starSpacing="13px"
                        numberOfStars={5}
                        starRatedColor="gold"/>}
                </div>
            </div>

        </div>
    );
};

export {MovieCardInfo};