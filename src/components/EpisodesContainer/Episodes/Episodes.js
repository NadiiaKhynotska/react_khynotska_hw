import React, {useEffect} from 'react';
import {Episode} from "../Episode/Episode";
import {useDispatch, useSelector} from "react-redux";
import {episodesActions} from "../../../redux";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(state => state.episodes);
    const [query, setQuery] = useSearchParams({page:'1'});
    const page = query.get('page');

    useEffect(() => {
        dispatch(episodesActions.getAll({page}))
    }, []);
    return (
        <div>
            {episodes.map(episode=><Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};