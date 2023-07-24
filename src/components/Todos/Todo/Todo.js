import React from 'react';

const Todo = ({todo}) => {
    const {id, title} = todo
    return (
        <div>
            <div>ID : {id}</div>
            <div>Title : {title }</div>
        </div>
    );
};

export {Todo};