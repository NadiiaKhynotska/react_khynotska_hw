import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from './Episode.module.css'
import {episodeActions} from "../../../redux";
const Episode = ({episode}) => {

    const{id, name, episode:chapter, characters}=episode

    const dispatch = useDispatch();

    dispatch(episodeActions.setCurrentEpisode({name}))

    const navigate = useNavigate();
    return (
        <div className={css.Episode} onClick={()=> navigate('/characters', {state:{iDs:characters}})}>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Chapter: {chapter}</div>
        </div>
    );
};

export {Episode};