import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {MoviesList} from "../../../components";



const MovieListPage = () => {

    return (
        <div>

            <MoviesList/>
            <Outlet/>

        </div>
    );
};

export {MovieListPage};