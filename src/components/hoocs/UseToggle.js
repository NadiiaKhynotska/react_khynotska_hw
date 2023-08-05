import {useState} from "react";


const UseToggle = (defaultValue) =>{
    const [value, setValue] = useState(defaultValue);

    const changeValue =()=>{
        setValue(prev => !prev)
    }
    return{
        value,
        changeValue
    }
}

export {UseToggle}