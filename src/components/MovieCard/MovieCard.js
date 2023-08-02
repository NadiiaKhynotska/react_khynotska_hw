import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {genreServices, movieServices} from "../../services";
import {MovieCardInfo} from "./MovieCardInfo/MovieCardInfo";

const MovieCard = () => {
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const {movieId} = useParams();
    console.log(movieId)

    useEffect(() => {
        movieServices.byId(movieId).then(({data}) => {
            console.log(data)
            setMovie(data)
        })
            .catch(err => console.error(err));

    }, [movieId])
    return (
        <div>
            {movie && <MovieCardInfo key={movie.id} movie={movie} genres={genres}/>}
        </div>
    );
};

export {MovieCard};