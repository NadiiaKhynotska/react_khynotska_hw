import React from 'react';
import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";

const CarContainer = () => {
    return (
        <div>
            <CarForm/>
            <Cars/>

        </div>
    );
};

export {CarContainer};