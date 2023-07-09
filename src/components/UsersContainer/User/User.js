import React, {useState} from 'react';
import style from './User.module.css'

const User = ({user, setUserId}) => {
    const {id, name, username, email} = user

    const [showPost, setShowPost] = useState(false);


    return (
        <div className={style.container}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={() => {
                {
                    showPost ? setUserId(null) : setUserId(id)
                }
                return ({
                    setUserId,
                    setShowPost: setShowPost(!showPost)
                })
            }}

            > {showPost ? 'Hide posts' : 'Show posts'} </button>
        </div>
    );
};

export default User;