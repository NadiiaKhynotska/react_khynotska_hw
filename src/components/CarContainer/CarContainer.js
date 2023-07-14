import React, {useRef, useState} from 'react';
import CreateCar from "./CreateCar/CreateCar";
import Cars from "./Cars/Cars";

const CarContainer = () => {
    const [onSave, setOnSave] = useState(null);
    const [onUpdate, setOnUpdate] = useState({});

    const handleUpdate = (obj)=>{

        // const {id, brand, price, year} = obj;
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${obj.id}`, {
            method: 'PUT',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(obj => console.log(obj))

    }

    return (
        <div>
            <CreateCar setOnSave={setOnSave} />
            <Cars onSave={onSave} handleUpdate={handleUpdate}/>
        </div>
    );
};

export default CarContainer;