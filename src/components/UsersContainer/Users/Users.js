import React, {useEffect, useState} from 'react';
import User from "../User/User";

import style from './Users.module.css'

const Users = ({users, setUsers}) => {

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users =>setUsers(users))
    },[])

    return (

        <div className={style.create}>
            {users.map(user =>  <User key={user.id} user={user}/> )}
        </div>
    );
};

export default Users;