import React, {useEffect} from 'react';
import Comment from "../Comment/Comment";
import {commentsService} from "../../service/commentsService/commentsService";
import style from './Comments.module.css'

const Comments = ({comments, setComments}) => {

    useEffect(()=>{
        commentsService.getAll ().then(response =>response.data).then(data =>setComments(data))
    },[comments])


    return (
        <div className={style.create}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/> )}
        </div>
    );
};

export default Comments;