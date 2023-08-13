import React from 'react';
import {Characters} from "../../components";
import {useNavigate} from "react-router-dom";

import css from './CharactersPage.module.css'

const CharactersPage = () => {
    const navigate = useNavigate();
    return (
        <div className={css.CharacterPage}>
            <button onClick={()=>navigate(-1)}>Back</button>
            <Characters/>
        </div>
    );
};

export {CharactersPage};