import React, {useEffect, useState} from 'react';


import Users from "./components/Users/Users";

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }, [])


    return (
        <>
                <Users users={users}/>
        </>
    );
};

export default App;


//
// property drill
//
// Структура:
//     Головна компонента App. App робить запит на https://jsonplaceholder.typicode.com/users
//     В середині Апп лежить компонента Users яка відображає всіх отриманих в апп юзерів з плейсхолдеру

