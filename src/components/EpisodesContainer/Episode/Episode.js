import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Episode.module.css'
import {useDispatch} from "react-redux";
import {episodeActions} from "../../../redux";

const Episode = ({episode}) => {

    const{id, name, episode:chapter, characters}=episode
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toCharacter =()=>{
        navigate('/characters', {state:{iDs:characters}})
        dispatch(episodeActions.setCurrentEpisode(name))
    }

    return (
        <div className={css.Episode} onClick={()=> toCharacter() }>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Chapter: {chapter}</div>
        </div>
    );
};

export {Episode};