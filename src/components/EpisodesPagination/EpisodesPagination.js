import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import css from './EpisodePagination.module.css'

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
            <button disabled={!prevPage} onClick={toPrevPage}>Prev</button>
            <button disabled={!nextPage} onClick={toNextPage}>Next</button>
        </div>
    );
};

export {EpisodesPagination};