import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {episodeActions} from "../../../redux";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(store=>store.episodes)
    const [query, setQuery] = useSearchParams({page: '1'})


    useEffect(() => {
           dispatch(episodeActions.all(query.get('page')))
            setQuery(prev => ({...prev, page: prev.get('page')}))
    }, [dispatch]);

    console.log(episodes)
    return (
        <div>
            {/*{episodes.map(episode)}*/}
        </div>
    );
};

export {Episodes};