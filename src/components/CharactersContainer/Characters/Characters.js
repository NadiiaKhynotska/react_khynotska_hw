import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {characterActions} from "../../../redux/slices/charactersSlice";
import {Character} from "../Character/Character";
import css from './Characters.module.css'
const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters)
    const {state:{iDs}} = useLocation();


    useEffect(() => {
        dispatch(characterActions.all({iDs}))
    }, [iDs]);


    return (
        <div className={css.Characters}>
            {characters.map(character=> <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};