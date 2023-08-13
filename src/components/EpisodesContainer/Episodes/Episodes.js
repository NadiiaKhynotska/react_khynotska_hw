import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {episodesActions, store} from "../../../redux";
import {episodesServices} from "../../../services";
import {useSearchParams} from "react-router-dom";
import {Episode} from "../Episode/Episode";

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(store => store.episodes)
    const [query, setQuery]= useSearchParams({page: '1'})

    useEffect(()=>{
        episodesServices.getAll(query.get('page')).then(({data})=> dispatch(episodesActions.setEpisodes(data)))
    },[])

    return (
        <div>
            {episodes.map(episode=> <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};