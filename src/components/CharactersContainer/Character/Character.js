import React from 'react';

import css from './Character.module.css'

const Character = ({character}) => {
    const{name, image}=character
    return (
        <div className={css.Character}>
           <h3>Name - {name}</h3>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};