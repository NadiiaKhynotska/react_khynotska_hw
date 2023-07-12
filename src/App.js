import React from 'react';

import CreateNewUser from "./components/CreateNewUser/CreateNewUser";
import CreatePost from "./components/CreatePost/CreatePost";


const App = () => {
    return (
        <div>
            <CreateNewUser/>
            <CreatePost/>
        </div>
    );
};

export default App;