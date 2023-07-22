import React, {createContext, useState} from 'react';
import CarForm from "./CarForm/CarForm";
import Cars from "./Cars/Cars";

const Context = createContext(null)
const CarContainer = () => {
    const [updateCar, setUpdateCar] = useState([]);
    const [trigger, setTrigger] = useState([]);


    return (
        <div>
            <Context.Provider value={{
                updateCar,
                setUpdateCar,
                trigger,
                setTrigger: ()=> setTrigger(prev =>!prev),
            }}>
            <CarForm/>
            <Cars/>
            </Context.Provider>
        </div>
    );
};

export default CarContainer;
export {Context}