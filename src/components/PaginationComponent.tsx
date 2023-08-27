import React from 'react';
import {useAppSelector} from "../hooks";
import {useSearchParams} from "react-router-dom";
import css from './Pagination.module.css'

const PaginationComponent = () => {
    const {prev, next} = useAppSelector(state => state.cars);
    const [, setQuery] = useSearchParams();
    const toPrevPage = () => {
        setQuery(prev => ({...prev, page: +prev.get('page') - 1}))
    };

    const toNextPage = () => {
        setQuery(prev => ({...prev, page: +prev.get('page') + 1}))
    };

    return (
        <div>
            <div className={css.Pagination}>
                <button disabled={!prev} onClick={toPrevPage}>Prev</button>
                <button disabled={!next} onClick={toNextPage}>Next</button>
            </div>
        </div>
    );
};

export {PaginationComponent};