import React, {useState} from 'react';
import {TestUseMemo} from "./components/TestUseMemo/TestUseMemo";
import {TestUseCallback} from "./components/TestUseCallback/TestUseCallback";
import TestUseToggle from "./components/TestUseToggle/TestUseToggle";
import {UseToggle} from "./components/hoocs/UseToggle";
import css from './App.module.css'
const App = () => {

    const [data, setData] = useState(1);
    const{value, changeValue}= UseToggle(true);

    return (
        <div className={[css.create, value ? css.dark : css.light].join(' ')}>
            <h1>First task  - UseMemo</h1>
            <TestUseMemo data={data} setData={setData}/>
            <hr/>
            <h1>Second task - use Callback</h1>
            <TestUseCallback/>
            <hr/>
            <TestUseToggle changeValue={changeValue}/>
        </div>
    );
};

export default App;