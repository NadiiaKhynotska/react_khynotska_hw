import React from 'react';

import css from './EpisodePagination.module.css'
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodesPagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.episodes)
    const [, setQuery] = useSearchParams();

    function toPrevPage() {
        setQuery(prev => ({...prev, page: +prev.get('page') - 1}))
    }

    function toNextPage() {
        setQuery(prev => ({...prev, page: +prev.get('page') + 1}))
    }

    return (
        <div className={css.EpisodePagination}>
            <button disabled={!prevPage} onClick={toPrevPage}>Ptrev</button>
            <button disabled={!nextPage} onClick={toNextPage}>Next</button>
        </div>
    );
};

export {EpisodesPagination};