import React from 'react';
import style from './User.module.css'

const User = ({user,setUserId}) => {
    const {id,name,username,email} =user

    return (
        <div className={style.container}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={()=>setUserId(id)}>Show posts</button>
        </div>
    );
};

export default User;