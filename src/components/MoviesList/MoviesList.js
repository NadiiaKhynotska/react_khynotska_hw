import React, {useEffect, useState} from 'react';
import {movieService} from "../../services/movieService";
import {urls} from "../../constans";
import {MovieListItem} from "./MovieListItem/MovieListItem";
import css from './MovieList.module.css'

const MoviesList = () => {
    const [movieList, setMovieList] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [count, setCount] = useState(1);
    useEffect(() => {
        // movieService.getAll(urls.movie+`${count}`)
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmM2NjUxMDA5NGExYTUyNmJlYzMwMDdhMDA1NTEwNyIsInN1YiI6IjY0YmZkNGU3MDE3NTdmMDBmZjVlYzc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q3Y9mzjW9fomRNxRrO73gpKzVmesQoVHMohB46YsGRU'
            }
        };

        fetch(`https://api.themoviedb.org/3/discover/movie?page=${count}`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovieList(data.results);
                setPageCount(data.total_pages);
                data.page = count
            })
            .catch(err => console.error(err));

    }, [count])
    console.log(movieList, pageCount,count)

    return (
        <div>
            <div className={css.create}>
                {movieList.map(movieListItem => <MovieListItem key={movieListItem.id} movieListItem={movieListItem}/>)}
                <button disabled={count<2} onClick={()=>setCount(prev=>prev-1)}>Previous</button>
                <button disabled={count>pageCount} onClick={()=>setCount(prev=>prev+1)}>Next</button>
            </div>

        </div>
    );
};

export {MoviesList};