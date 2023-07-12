import React, {useContext} from 'react';
import {Context} from "../../../App";


const SubChild11 = () => {
const {data} = useContext(Context);
    return (
        <div>
            <h2>SubChild 1_1</h2>
            {data.map((item) => <h3>{item}</h3>)}
        </div>
    );
};

export default SubChild11;