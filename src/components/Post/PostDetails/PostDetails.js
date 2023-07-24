import React from 'react';
import {useOutletContext} from "react-router-dom";

const PostDetails = ({post}) => {

    const {id, title, body} = post;
    const {commentId} = useOutletContext();
    return (
        <div>
            <div>CommentId : {commentId}</div>
            <div>PostId : {id}</div>
            <div>Title : {title}</div>
            <div>Body : {body}</div>

        </div>
    );
};

export {PostDetails};