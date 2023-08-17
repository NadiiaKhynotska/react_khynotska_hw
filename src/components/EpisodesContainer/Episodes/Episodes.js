import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {episodeActions} from "../../../redux";
import {useSearchParams} from "react-router-dom";
import {Episode} from "../Episode/Episode";

import css from './Episodes.module.css'
const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes, errors, isLoading} = useSelector(state => state.episodes)
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = query.get('page')


    useEffect(() => {
        dispatch(episodeActions.all({page}))
        setQuery(prev => ({...prev, page: prev.get('page')}))
    }, [query]);

    console.log(episodes)
    console.log(query.get('page'))

    return ( isLoading? <h1>Loading ......</h1>:

            errors? <h1>{errors}</h1>:

        <div className={css.Episodes}>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};