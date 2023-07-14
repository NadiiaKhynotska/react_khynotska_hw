import React, {useRef, useState} from 'react';
import CreateCar from "./CreateCar/CreateCar";
import Cars from "./Cars/Cars";

const CarContainer = () => {
    const [onSave, setOnSave] = useState(null);
    const [onUpdate, setOnUpdate] = useState(null);

    return (
        <div>
            <CreateCar setOnSave={setOnSave} onUpdate={onUpdate} setOnUpdate={setOnUpdate}/>
            <Cars onSave={onSave} setOnUpdate={setOnUpdate}/>
        </div>
    );
};

export default CarContainer;