import React from 'react';

import style from './Comment.module.css'

const Comment = ({comment}) => {
    const {id, name, body} = comment
    return (
        <div className={style.createComment}>
            <h3>ID: {id}  Tittle: {name}</h3>
            <p> Body: {body}</p>
        </div>
    );
};

export default Comment;