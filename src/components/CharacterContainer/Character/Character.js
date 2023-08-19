import React from 'react';

const Character = ({character}) => {
    const {name, image} = character

    return (
        <div style={{margin:'5px'}}>
            <h3>{name}</h3>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};