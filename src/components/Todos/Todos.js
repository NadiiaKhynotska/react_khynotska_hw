import React, {useEffect, useState} from 'react';
import {todoService} from "../../services";
import {Todo} from "./Todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(async ()=>{
        await  todoService.getAll().then(({data})=> setTodos(data))
    },[])
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
            
        </div>
    );
};

export {Todos};