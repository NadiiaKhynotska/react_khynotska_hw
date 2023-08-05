import React, {useRef} from 'react';
import {UseArr} from "../hoocs/UseArr";

const TestUseArr = () => {
    const {data, addItem, deleteItem} = UseArr([])
    const inputValue = useRef()

    const add = () => {
        const lastElement = data.slice(-1);
        console.log(lastElement)
        const id = lastElement.length ? lastElement[0].id + 1 : 1
        addItem({id, name: inputValue.current.value})
        inputValue.current.value = ''
    }

    return (
        <div>
            <input type='text' ref={inputValue}/>
            <button onClick={add}>Add item to array</button>
            <div>
                {data.map(item =>
                    <div key={item.id}>
                        <h3>{item.id} {item.name}</h3>
                        <button onClick={()=> deleteItem(item.id)}>Delete item</button>
                    </div>)}

            </div>
        </div>
    );
};

export default TestUseArr;