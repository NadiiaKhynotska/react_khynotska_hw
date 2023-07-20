import React from 'react';

import style from './CommentForm.module.css'
import {useForm} from "react-hook-form";
import {commentsService} from "../../service/commentsService/commentsService";

const CommentForm = ({setComments}) => {

    const {
        register,
        reset,
        handleSubmit
    } = useForm()

    const submit = (data) => {
        commentsService.create(data)
            .then(response => response.json())
            .then(data => setComments(prev => [...prev,data]))
        reset()
    }


    return (
        <div className={style.create}>
            <h2>Create new comment</h2>
            <form onSubmit={handleSubmit(submit)}>

                <label>Post title</label>
                <input
                    type='text'
                    {...register('tittle')}
                />
                <label>User email</label>
                <input
                    type='email'
                    {...register('email')}
                />
                <label>Post body</label>
                <textarea
                    {...register('body')}
                />
                <button>Add new comment</button>
            </form>
        </div>

    );
};

export default CommentForm;