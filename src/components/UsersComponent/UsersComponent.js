import React, {useEffect, useState} from 'react';

import UserComponent from "./UserComponent/UserComponent";

const UsersComponent = ({setUserId}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }, [])

    return (
        <>
            {users.map(user => <UserComponent key={user.id} user={user} setUserId={setUserId}/> )}
        </>
    );
};

export default UsersComponent;