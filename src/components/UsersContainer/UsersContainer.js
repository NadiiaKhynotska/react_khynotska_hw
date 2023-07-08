import React, {useEffect, useState} from 'react';
import User from "./User/User";

const UsersContainer = ({setUserId}) => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    },[])

    return (

        <>
            {users.map(user =><User key={user.id} user={user} setUserId={setUserId}/>)}
        </>
    );
};

export default UsersContainer;