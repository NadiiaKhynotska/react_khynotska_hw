import React, {useEffect, useState} from 'react';

import PostDetails from "./PostDetails/PostDetails";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response =>response.json())
            .then(posts =>setPosts(posts))
    },[userId])

    return (
        <div>
            {posts.map(post=> <PostDetails key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;