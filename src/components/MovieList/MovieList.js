import React, {useEffect, useState} from 'react';

import {genreServices, movieServices} from "../../services";
import {MovieInfo} from "./MovieInfo/MovieInfo";
import css from './MovieList.module.css'



const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const [genres, setGenres] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [count, setCount] = useState(1);

    const href = window.location.href;
    console.log(href)

    useEffect(()=>{
        if(href === 'http://localhost:3000/movie'){
            movieServices.getAll(count).then(({data})=>{
                console.log(data);
                setMovieList(data.results);
                setPageCount(data.total_pages);
                data.page = count
            })
                .catch(err => console.error(err));
        }else if( href === 'http://localhost:3000/topRated'){
            movieServices.getTopRated(count).then(({data})=>{
                console.log(data);
                setMovieList(data.results);
                setPageCount(data.total_pages);
                data.page = count
            })
                .catch(err => console.error(err));
        }

        genreServices.getAll().then(({data})=> setGenres(data.genres))
    }, [count])

    console.log(movieList, pageCount, count, genres)
    return (
        <div className={css.create}>

            {movieList?.map(movieListItem => <MovieInfo
                key={movieListItem.id}
                movieListItem={movieListItem}
                genres={genres}
            />)}
            <button disabled={count < 2} onClick={() => setCount(prev => prev - 1)}>Previous</button>
            <button disabled={count > pageCount} onClick={() => setCount(prev => prev + 1)}>Next</button>

        </div>
    );
};

export {MovieList};