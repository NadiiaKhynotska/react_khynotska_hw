import React, { useState} from 'react';

import UsersComponent from "./components/UsersComponent/UsersComponent";
import Posts from "./components/Posts/Posts";


const App = () => {
    const [userId, setUserId] = useState(null);


    return (
        <div>
            <UsersComponent setUserId={setUserId}/>
            {userId && <Posts userId={userId}/>}
        </div>
    );

};

export default App;

// state lifting
// Є компонента Арр. В середині неї є UsersComponent, який отримує наданні з https://jsonplaceholder.typicode.com/users
//     Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні на яку робиться state
//     lifting, а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули.