import React, {useEffect, useState} from 'react';
import Post from "./Post/Post";

const UserPosts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response =>response.json())
            .then(posts =>setPosts(posts))
    },[userId])

    return (

        <>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </>
    );
};

export default UserPosts;