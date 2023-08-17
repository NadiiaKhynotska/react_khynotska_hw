import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {characterActions} from "../../../redux/slices/charactersSlice";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters)
    const {state:{iDs}} = useLocation();
    console.log(iDs)

    useEffect(() => {
        dispatch(characterActions.all(iDs))
    }, []);
    console.log(characters)

    return (
        <div>
            Characters
        </div>
    );
};

export {Characters};