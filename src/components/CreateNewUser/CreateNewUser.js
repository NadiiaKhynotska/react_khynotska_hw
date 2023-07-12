import React, {useState} from 'react';

import style from './CreateNewUser.module.css'

const CreateNewUser = () => {
    const [name, setName]= useState('')
    const [userName, setUserName]= useState('')
    const [email, setEmail]= useState('')
    const [gender, setGender]= useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, userName, email, gender };
        console.log(user);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log('new user added');
        })
    }


    return (
        <div className={style.create}>
            <h2>Create new User</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type='text'
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <label>User name: </label>
                <input
                    type='text'
                    required
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                />
                <label>User email:</label>
                <input
                    type='email'
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <label>Gender:</label>
                <select
                    value={gender}
                    onChange={(e)=>setGender(e.target.value)}
                >
                    <option value='female'> Female</option>
                    <option value='male'> Male</option>
                </select>

                <button>Add User</button>

            </form>

        </div>
    );
};

export default CreateNewUser;