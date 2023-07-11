import React from 'react';
import {useState} from "react";

import style from './UserComponent.module.css'

const UserComponent = ({user, setUserId}) => {

    const [showPost, setShowPost] = useState(false);
    const [activeButton, setActiveButton] = useState(null)

    const handelClick = () => {

        setShowPost(!showPost)
        showPost ? setUserId(null) : setUserId(user.id)

        setActiveButton(!activeButton)
        activeButton? setActiveButton(null): setActiveButton(user.id)

        return ({
            setActiveButton,
            setUserId,
            showPost
        })
    }
    return (
        <div className={style.container}>
            <div>User name: {user.name}</div>
            <div>User id: {user.id}</div>
            <button className={style.userButton}
                    onClick={handelClick}
                    disabled={activeButton !== user.id && activeButton !== null}>
                {showPost ? 'Hide posts' : 'Show posts'} </button>
        </div>
    )
}

export default UserComponent;