import React from 'react';

import CreateNewUser from "./components/CreateNewUser/CreateNewUser";
import CreatePost from "./components/CreatePost/CreatePost";
import CreateNewComment from "./components/CreateNewComment/CreateNewComment";


const App = () => {
    return (
        <div>
            <CreateNewUser/>
            <CreatePost/>
            <CreateNewComment/>
        </div>
    );
};

export default App;