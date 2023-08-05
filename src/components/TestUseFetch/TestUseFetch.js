import React from 'react';
import {UseFetch} from "../hoocs/UseFetch";


const TestUseFetch = () => {
    const posts = UseFetch('/posts')
    const comments = UseFetch('/comments')
    const users = UseFetch('/users')
    return (
        <>
            {posts.map(post => (
                <div key={post.id}>
                    <>id: {post.id}</>
                    <> title: {post.title}</>
                </div>
            ))}

            {comments.map(comment => (
                <div key={comment.id}>
                    <> id: {comment.id}</>
                    <> email: {comment.email}</>
                </div>
            ))}


            {users.map(user =>(
                <div key={user.id}>
                    <>Name: {user.name}</>
                </div>
            ))}

        </>
    );
};

export default TestUseFetch;