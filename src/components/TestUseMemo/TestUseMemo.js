import React, {useMemo, useState} from 'react';

const memoFunc = (n) => {
    console.log('start')
    let sum = 0

    for (let i = 0; i < 1000000000; i++) {
        sum = n;
    }
    console.log('finish')
    return n;
}

const TestUseMemo = ({data, setData}) => {

    const [count, setCount] = useState(6);

    let num = useMemo(()=> memoFunc(count),[count]);


    return (
        <div>
            <div>Count: {num}</div>
            <div>Data: {data}</div>
            <button onClick={()=>setCount(prevState => prevState+1)}>Inc count</button>
            <button onClick={()=>setData(prevState => prevState+1)}>Inc Data </button>
        </div>
    );
};

export {TestUseMemo};