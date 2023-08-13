import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {episodesActions, store} from "../../../redux";
import {episodesServices} from "../../../services";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css'
const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(store => store.episodes)
    const [query, setQuery]= useSearchParams({page: '1'})

    useEffect(()=>{
        episodesServices.getAll(query.get('page')).then(({data})=> {
            dispatch(episodesActions.setEpisodes(data))
            setQuery(prev => ({...prev, page :  prev.get('page')}))
        })
    },[query, dispatch])

    return (
        <div className={css.Episodes}>
            {episodes.map(episode=> <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};