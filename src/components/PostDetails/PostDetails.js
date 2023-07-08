import React, {useState} from 'react';
import PostFull from "../PostFull/PostFull";

const PostDetails = ({post}) => {
    const [showPostDetails, setShowPostDetails] = useState(false);

    return (
        <div>
            <h2> {post.id} {post.title}</h2>
            <button onClick={()=>setShowPostDetails(!showPostDetails)}>
                {showPostDetails?'Hide post details':'Show post details'}</button>
            {showPostDetails&& <PostFull post={post}/>}
        </div>
    );
};

export default PostDetails;