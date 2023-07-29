import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import {urls} from "../../constans";
import {MovieInfo} from "./MovieInfo/MovieInfo";

const MoviesListCard = () => {
    const [movie, setMovie] = useState({});
    const {filmId} = useParams();

    console.log(filmId)

    useEffect(() => {
        // movieService.getById(urls.byId(filmId)).then(({data})=> {
        //     console.log(data)
        //     setMovie(data)
        // })

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmM2NjUxMDA5NGExYTUyNmJlYzMwMDdhMDA1NTEwNyIsInN1YiI6IjY0YmZkNGU3MDE3NTdmMDBmZjVlYzc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q3Y9mzjW9fomRNxRrO73gpKzVmesQoVHMohB46YsGRU'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${filmId}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovie(response)
            })
            .catch(err => console.error(err));
    }, [filmId])

    return (
        <div>
            {movie && <MovieInfo key={movie.id} movie={movie}/>}
        </div>
    );
};

export {MoviesListCard};