import React, {createContext, useState} from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../../components";
import css from './CommentsPage.module.css'

const Context = createContext(null);
const CommentsPage = () => {
    const [commentId, setCommentId] = useState(null);
    return (
        <div className={css.commentsPage}>

            <Context.Provider value={{setCommentId}}>
                <div className={css.comments}><Comments/></div>
            </Context.Provider>

            <div className={css.post}><Outlet context={{commentId}}/></div>

        </div>
    );
};

export {CommentsPage, Context};