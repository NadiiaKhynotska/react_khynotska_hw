import React, {useEffect} from 'react';
import {Episode} from "../Episode/Episode";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {episodesActions} from "../../../redux";
import css from './Episodes.module.css'
const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(state => state.episodes);
    const [query, setQuery] = useSearchParams({page:'1'});
    const page = query.get('page');
    console.log(page)

    useEffect(() => {
        dispatch(episodesActions.getAll({page}))
    }, [query]);
    return (
        <div className={css.Episodes}>
            {episodes.map(episode=><Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};