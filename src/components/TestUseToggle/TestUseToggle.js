import React from 'react';
import {UseToggle} from "../hoocs/UseToggle";

const TestUseToggle = ({changeValue}) => {


    return (
        <div>
            <h1>Third task - Use Toggle</h1>
            <button onClick={changeValue}>Change color</button>
        </div>
    );
};

export default TestUseToggle;