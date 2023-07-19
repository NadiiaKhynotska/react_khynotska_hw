import React from 'react';

import style from './User.module.css'

const User = ({user}) => {
    const {id, name, username, email, address, gender} = user;
    return (
        <div className={style.userPreview}>
            <h3>ID: {id} User name:{name}</h3>
            <div>Username:{username}</div>
            <div>Email:{email}</div>
            {address.city && <div>City:{address.city}</div>}
            {gender && <div>Gender:{gender}</div>}
        </div>
    );
};

export default User;