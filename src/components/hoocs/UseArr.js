import {useState} from "react";

const UseArr = (defaultValue)=>{
    const [data, setData] = useState(defaultValue)

    const addItem = (item)=>{
        setData(prev => [...prev,item])
    }

    const deleteItem =(id) => {
        setData(prev => {
            const index = prev.findIndex(item => item.id === id);
            prev.splice(index, 1)
            return [...prev]
        })
    }

    return{ data, addItem, deleteItem}
}

export {UseArr}