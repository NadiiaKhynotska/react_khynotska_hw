import React from 'react';

const PostFull = ({post}) => {
    return (
        <div>
            <h3> id: {post.id}</h3>
            <h3> user Id: {post.userId}</h3>
            <h3> tittle: {post.title}</h3>
            <p> Body: {post.body}</p>
        </div>
    );
};

export default PostFull;