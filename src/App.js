import React, {useState} from 'react';
import UsersContainer from "./components/UsersContainer/UsersContainer";
import UserPosts from "./components/UserPosts/UserPosts";

const App = () => {
    const [userId, setUserId] = useState(null);

    return (
        <div>
            <UsersContainer setUserId={setUserId}/>
            {userId && <UserPosts userId = {userId}/>}
        </div>
    );
};

export default App;

// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)