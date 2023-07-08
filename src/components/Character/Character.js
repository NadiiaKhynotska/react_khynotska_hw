import React from 'react';
import style from './Character.module.css'

const Character = ({id, name, status, species, gender, image}) => {
   
    return (
        <div className={style.container}>
            <h1> Id-{id} {name} </h1>
            <h3>{status} {species} {gender}</h3>
            <img src={image} alt={name}/>
        </div>
    );
};
export default Character;