import React, {useEffect, useState} from 'react';

import {nowPlayingService} from "../../services/nowPlayingService";
import {NowPlayingFilm} from "./NowPlayingFilm/NowPlayingFilm";

const NowPlayingList = () => {
    const [nowPlayingFilms, setNowPlayingFilms] = useState([]);

    // useEffect(()=>{
    //     nowPlayingService.getAll().then(({data})=> setNowPlayingFilms(data))
    // },[])
    //


        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjM3MWMyYWRhNTVkMjBmMzgxODk0OTJkMjA4NGJlZiIsInN1YiI6IjY0YmZkNGU3MDE3NTdmMDBmZjVlYzc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HNHQDM31OnetOC-yxCYhynLD8yIXLmSqofdCw89fBtw'
            }
        };

        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=8b371c2ada55d20f38189492d2084bef', options)
            .then(response => response.json())
            .then(response => setNowPlayingFilms(response))


    console.log(nowPlayingFilms)
    return (
        <div>
            {nowPlayingFilms.map(nowPlayingFilm => <NowPlayingFilm key={nowPlayingFilm.id} nowPlayingFilm={nowPlayingFilm}/>)}
        </div>
    );
};

export {NowPlayingList};