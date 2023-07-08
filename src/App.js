import React from 'react';
import Launchers from "./components/Launchers/Launchers";

import style from './App.module.css'

const App = () => {
    return (
        <div className={style.container}>
            <Launchers/>
        </div>
    );
};

export default App;

