import React from 'react';

import style from './Comment.module.css'

const Comment = ({id,tittle, body}) => {
    return (
        <div className={style.createComment}>
            <h3>ID: {id}  Tittle: {tittle}</h3>
            <p> Body: {body}</p>
        </div>
    );
};

export default Comment;