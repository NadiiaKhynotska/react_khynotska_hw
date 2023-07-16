import React, {useState} from 'react';
import CarForm from "./CarForm/CarForm";
import Cars from "./Cars/Cars";

const CarContainer = () => {
    const [onSave, setOnSave] = useState(null);
    return (
        <div>
            <CarForm setOnSave={setOnSave} />
            <Cars onSave={onSave}/>
            
        </div>
    );
};

export default CarContainer;