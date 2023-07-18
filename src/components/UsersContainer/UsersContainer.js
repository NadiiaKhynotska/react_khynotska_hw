import React, {useState} from 'react';
import UserForma from "./UserForma/UserForma";
import Users from "./Users/Users";

const UsersContainer = () => {
    const [users, setUsers] = useState([]);
    return (
        <div>
            <UserForma setUsers={setUsers}/>
            <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export default UsersContainer;