import React, {useEffect, useState} from 'react';


import Users from "./components/Users/Users";
import style from './App.module.css'

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }, [])


    return (
        <div className={style.mainContainer}>
            {users.map((user, id) =><Users key={id} user={user}/>)}
        </div>
    );
};

export default App;


//
// property drill
//
// Структура:
//     Головна компонента App. App робить запит на https://jsonplaceholder.typicode.com/users
//     В середині Апп лежить компонента Users яка відображає всіх отриманих в апп юзерів з плейсхолдеру

