import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import {charactersActions} from "../../../redux";
import {Character} from "../Character/Character";
import css from './Characters.module.css'
import {Button} from "@mui/material";

const Characters = () => {
    const {state:{iDs}} = useLocation();
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(charactersActions.getByIds({iDs}))
    }, []);

    console.log(characters)

    return (
        <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
            <div><Button variant="contained" style={{backgroundColor: '#312f2f', width: '300px'}}
                       onClick={() => navigate(-1)}>Back</Button></div>
            <div className={css.Characters}>
                {characters.map( character =>  <Character key={character.id} character={character}/>)}
            </div>

        </div>
    );
};

export {Characters};