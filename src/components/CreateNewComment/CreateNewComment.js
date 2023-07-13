import React, {useState} from 'react';

import style from './CreateNewComment.module.css'

const CreateNewComment = () => {

    const [formValue, setFormValue] = useState({
        title: '',
        email: '',
        body: ''
    });

    const handleFormChange = (key, value) => {
        setFormValue(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formValue)
        }).then(response => response.json())
            .then(comment => console.log(comment))
    }

    return (
        <div className={style.create}>
            <h2>Create new comment</h2>
            <form onSubmit={handleSubmit}>

                <label>Post title</label>
                <input
                    type='text'
                    required
                    value={formValue.title}
                    onChange={(e) => handleFormChange('title', e.target.value)}
                />
                <label>User email</label>
                <input
                    type='email'
                    required
                    value={formValue.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                />
                <label>Post body</label>
                <textarea
                    required
                    value={formValue.body}
                    onChange={(e) => handleFormChange('body', e.target.value)}
                />
                <button>Add new comment</button>
            </form>
        </div>
    );
};

export default CreateNewComment;