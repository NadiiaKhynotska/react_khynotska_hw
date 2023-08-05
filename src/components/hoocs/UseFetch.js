import {useEffect, useState} from "react";

const UseFetch = (endpoint)=>{
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
            .then(response => response.json())
            .then(value => setData(value))
    }, []);

    return data
}

export {UseFetch}