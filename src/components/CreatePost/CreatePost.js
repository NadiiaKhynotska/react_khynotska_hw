import React, {useState} from 'react';
import style from './CreatePost.module.css'
import {logDOM} from "@testing-library/react";
const CreatePost = () => {

    const [tittle, setTittle]=useState('')
    const [body, setBody]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const post ={tittle,body}
        console.log(post)

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        })
            .then(response => response.json())
            .then(post=> console.log(post))
    }

    return (
        <div className={style.create}>
            <h2>Create new post</h2>
            <form onSubmit={handleSubmit}>
                <label>Tittle</label>
                <input
                    type='text'
                    required
                    value={tittle}
                    onChange={(e)=>{setTittle(e.target.value)}}
                />
                <label>Post body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                />
                <button>Create new post</button>

            </form>

        </div>
    );
};

export default CreatePost;