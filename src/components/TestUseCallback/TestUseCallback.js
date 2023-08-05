import React, {useCallback, useState} from 'react';
import ArrComponent from "./ArrComponent";

const TestUseCallback = () => {

    const [arr, setArr] = useState([]);
    const [number, setNumber] = useState(0);

    const fullArr= useCallback( ()=>{
        setArr(prevState => [...prevState, 'nev item of Arr'])
    }, [])

    return (
        <div>
           <ArrComponent arr={arr} fullArr={fullArr}/>
            <div>Number : {number}</div>
            <button onClick={()=>setNumber(prevState => prevState+1)}>Inc number</button>
        </div>
    );
};

export {TestUseCallback};