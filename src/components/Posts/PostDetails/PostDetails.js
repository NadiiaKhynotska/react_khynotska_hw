import React from 'react';

import style from './PostDetails.module.css'
const PostDetails = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div className={style.container}>
            <h3 className={style.tittle}>title: {title}</h3>
            <div className={style.wrapper}>
                <div className={style.box}>post id: {id}</div>
                <div className={style.box}>user id: {userId}</div>
            </div>
            <p className={style.bodyPost}> <strong>Body: </strong>{body}</p>
        </div>
    )
};

export default PostDetails;