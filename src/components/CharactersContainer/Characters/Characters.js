import React, {useEffect} from 'react';
import {Character} from "../Character/Character";
import {useDispatch, useSelector} from "react-redux";
import {characterServices} from "../../../services";
import {useLocation} from "react-router-dom";
import {charactersActions} from "../../../redux";

import css from './Characters.module.css'

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const {state:{iDs}} = useLocation();

    useEffect(()=>{
        characterServices.getByIds(iDs).then(({data})=> {
            console.log(data)
            dispatch(charactersActions.setCharacters(data))
        })

    },[])
    return (
        <div className={css.Characters}>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};