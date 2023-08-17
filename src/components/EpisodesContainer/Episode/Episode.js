import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Episode.module.css'
const Episode = ({episode}) => {
    const{id, name, episode:chapter, characters}=episode

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