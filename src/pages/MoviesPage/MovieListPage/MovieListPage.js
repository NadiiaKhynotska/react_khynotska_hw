import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {MoviesList} from "../../../components";



const MovieListPage = () => {

    return (
        <div>
            <h1>Movie list</h1>
            <MoviesList/>
            <Outlet/>

        </div>
    );
};

export {MovieListPage};