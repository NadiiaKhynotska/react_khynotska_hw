import React from 'react';


import UserDetails from "./UserDetails/UserDetails";
import UserAddress from "./UserAddress/UserAddress";
import Company from "./Company/Company";

const Users = ({users}) => {


    return (
        <div>
            {users.map(user => <UserDetails key = {user.id} user={user}/>)}

        </div>
    );
};

export default Users;

// Кожен юзер - це компонента User, в якій є інші комоненти, а саме
// UserDetails - яка відображає інформацію id,name,username,email,phone,website,

//