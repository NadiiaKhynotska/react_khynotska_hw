import React from 'react';

import css from './Character.module.css'

const Character = ({character}) => {

    const {name ,image} = character;
    return (
        <div className={css.Character}>

            <div> Name - {name}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};