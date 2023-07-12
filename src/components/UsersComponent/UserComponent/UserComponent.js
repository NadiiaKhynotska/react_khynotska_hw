import React from 'react';
import {useState} from "react";

import style from './UserComponent.module.css'

const UserComponent = ({user, setUserId, activeButton, setActiveButton}) => {
    const {id, name} = user;

    const [show, setShow] = useState(false);
    const handelClick = () => {
        setUserId(id)
        setShow(!show)
        setActiveButton(prev => {
            if (prev === null) {
                return id
            }
            return null
        })
    }
    return (
        <div className={style.container}>
            <div>User name: {name}</div>
            <div>User id: {id}</div>
            <button className={style.userButton}
                    onClick={handelClick}
                    disabled={activeButton !== id && activeButton !== null}>
                    {show ? 'Hide posts' : 'Show posts'} </button>
        </div>
    )
}

export default UserComponent;