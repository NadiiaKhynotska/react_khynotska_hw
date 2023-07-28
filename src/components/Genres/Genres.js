import React, {useEffect, useState} from 'react';
import {Genre} from "./Genre/Genre";
import {genreService} from "../../services/genreService";
import {urls} from "../../constans";

const Genres = () => {
    const [genres, setGenres] = useState([]);

    useEffect(()=>{
        genreService.getAll(urls.genres).then(({data})=> setGenres(data.genres))
    },[])
    console.log(genres)
    return (
        <div>
            {genres?.map(genre => <Genre key={genre.id} genre={genre}/> )}
        </div>
    );
};

export {Genres};