import React from 'react';

import style from './UserComponent.module.css'
const UserComponent = ({user, setUserId}) => {
    return (
        <div className={style.container}>
            <div>User name: {user.name}</div>
            <div>User id: {user.id}</div>
            <button onClick={()=>setUserId(user.id)} className={style.userButton}>Show posts of current user</button>
        </div>
    );
};

export default UserComponent;