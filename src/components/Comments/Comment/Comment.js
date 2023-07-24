import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {Context} from "../../../pages";

const Comment = ({comment}) => {
    const {id, name, email, body, postId} = comment;

    const navigate = useNavigate();
    const {setCommentId} = useContext(Context);
    const handleClick = () => {
        navigate(`posts/${postId}`);
        setCommentId(id)
    }

    return (
        <div>
            <div>ID : {id}</div>
            <div>Post ID : {postId}</div>
            <div>Name : {name}</div>
            <div>Email : {email}</div>
            <div>Body : {body}</div>
            <button onClick={handleClick}>Get post</button>

        </div>
    );
};

export {Comment};