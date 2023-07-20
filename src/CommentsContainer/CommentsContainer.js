import React, {useState} from 'react';
import CommentForm from "./CommentForm/CommentForm";
import Comments from "./Comments/Comments";

const CommentsContainer = () => {
    const [comments, setComments] = useState([]);

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <Comments comments={comments} setComments={setComments}/>

        </div>
    );
};

export default CommentsContainer;