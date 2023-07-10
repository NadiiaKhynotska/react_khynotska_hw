import React from 'react';

const PostDetails = ({post}) => {
    const {id,userId, title, body} = post;

    return (
        <>
            <div>post id:{id}</div>
            <div>user id:{userId}</div>
            <div>title:{title}</div>
            <p>body:{body}</p>
        </>
    )
};

export default PostDetails;