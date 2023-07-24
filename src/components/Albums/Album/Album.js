import React from 'react';

const Album = ({album}) => {
    const {id, title} = album;
    return (
        <div>
            <div>ID : {id}</div>
            <div>Title : {title}</div>
        </div>
    );
};

export {Album};