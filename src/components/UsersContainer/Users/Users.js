import React, {useEffect, useState} from 'react';
import User from "../User/User";

import style from './Users.module.css'
import {userService} from "../../servises/apiServises/userService/userService";

const Users = ({users, setUsers}) => {

    useEffect(()=>{
        userService.getAll()
            .then(response=> response.data)
            .then(users =>setUsers(users))
    },[])

    return (

        <div className={style.create}>
            {users.map(user =>  <User key={user.id} user={user}/> )}
        </div>
    );
};

export default Users;