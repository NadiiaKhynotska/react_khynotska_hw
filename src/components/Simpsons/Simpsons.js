import React from 'react';
import style from './Simpsons.module.css'
const Simpsons =  ({name, surname, age, photo} ) => {
    return (

        <div className={style.container}>
            <h1> {name} {surname} {age} years</h1>
            <img src={photo} alt={name}/>
        </div>
    )
};

export default Simpsons;