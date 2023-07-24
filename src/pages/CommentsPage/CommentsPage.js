import React from 'react';
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};