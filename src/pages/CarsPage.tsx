import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {CarForm, Cars} from "../components";
import {PaginationComponent} from "../components/PaginationComponent";


const CarsPage = () => {

    return (
        <div>
            <Outlet/>
            <CarForm />
            <Cars/>
            <PaginationComponent/>
        </div>
    );
};

export {CarsPage};