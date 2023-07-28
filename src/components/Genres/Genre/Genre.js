import React, {useEffect, useState} from 'react';

const Genre = ({genre}) => {
    const {id, name} = genre
    const [genreId, setGenreId] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmM2NjUxMDA5NGExYTUyNmJlYzMwMDdhMDA1NTEwNyIsInN1YiI6IjY0YmZkNGU3MDE3NTdmMDBmZjVlYzc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q3Y9mzjW9fomRNxRrO73gpKzVmesQoVHMohB46YsGRU'
            }
        };

        fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    },[ genreId])


    return (
        <div>
            <p>{name}</p>
            <button onClick={()=> setGenreId(id)}>Show all films of current genre</button>
        </div>
    );
};

export {Genre};