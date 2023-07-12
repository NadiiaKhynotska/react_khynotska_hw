import React, {useContext} from 'react';


import {Context} from "../../../App";

const SubChild22 = () => {
    const {setData} = useContext(Context);

    return (
        <div>
            <h2>Sub child2_2</h2>
              <button onClick={()=>setData(prev => [...prev,'Hello from sub child 2_2'])}>Say Hello from sub child 2_2</button>
        </div>
    );
};

export default SubChild22;