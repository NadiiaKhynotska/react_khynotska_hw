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
            .then(({data}) => setComments(prev => [...prev,data]))
        reset()
    }


    return (
        <div className={style.create}>
            <h2>Create new comment</h2>
            <form onSubmit={handleSubmit(submit)}>

                <label>Comment title</label>
                <input
                    type='text'
                    {...register('name')}
                />
                <label>User email</label>
                <input
                    type='email'
                    {...register('email')}
                />
                <label>Comment body</label>
                <textarea
                    {...register('body')}
                />
                <button>Add new comment</button>
            </form>
        </div>

    );
};

export default CommentForm;