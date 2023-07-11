import React, {useState} from 'react';

import UsersComponent from "./components/UsersComponent/UsersComponent";
import Posts from "./components/Posts/Posts";

import style from './App.module.css'

const App = () => {
    const [userId, setUserId] = useState(null);


    return (
        <>
            <div className={style.wrapper}>
                <UsersComponent setUserId={setUserId}/>
            </div>
            {userId && <Posts userId={userId}/>}
        </>
    );

};

export default App;

// state lifting
// Є компонента Арр. В середині неї є UsersComponent, який отримує наданні з https://jsonplaceholder.typicode.com/users
//     Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні на яку робиться state
//     lifting, а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули.