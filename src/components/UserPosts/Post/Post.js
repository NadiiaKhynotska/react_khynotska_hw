import React from 'react';

const Post = ({post}) => {
    const {id,userId, title, body} = post;
    return (
        <div>
            <h4>post id:{id}</h4>
            <h4>user id:{userId}</h4>
            <h4>title:{title}</h4>
            <p>body:{body}</p>
        </div>
    );
};

export default Post;