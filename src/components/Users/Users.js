import React from 'react';


import UserDetails from "./UserDetails/UserDetails";
import UserAddress from "./UserAddress/UserAddress";
import Company from "./Company/Company";
import style from './Users.module.css'

const Users = ({user}) => {

    return (
        <div className={style.container}>
            <UserDetails user={user}/>
            <UserAddress address={user.address}/>
            <Company company={user.company}/>
        </div>
    );
};

export default Users;

// Кожен юзер - це компонента User, в якій є інші комоненти, а саме
// UserDetails - яка відображає інформацію id,name,username,email,phone,website,

//