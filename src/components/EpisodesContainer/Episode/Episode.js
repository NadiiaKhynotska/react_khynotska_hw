import React from 'react';

const Episode = ({episode}) => {
    const{id, name, episode:chapter, characters}=episode
    return (
        <div>
           <div>ID: {id}</div>
           <div>Name: {name}</div>
           <div>Chapter: {chapter}</div>
        </div>
    );
};

export {Episode};