import React, {useState} from 'react';
import UsersContainer from "./components/UsersContainer/UsersContainer";
import UserPosts from "./components/UserPosts/UserPosts";

import style from './App.module.css'

const App = () => {
    const [userId, setUserId] = useState(null);

    return (
        <div className= {style.container}>
           <div> <UsersContainer setUserId={setUserId}/></div>
           <div>{userId && <UserPosts userId = {userId}/>}</div>
        </div>
    );
};

export default App;

// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)