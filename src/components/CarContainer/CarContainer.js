import React, {useState} from 'react';
import CreateCar from "./CreateCar/CreateCar";
import Cars from "./Cars/Cars";

const CarContainer = () => {
    const [onSave, setOnSave] = useState(null);
    // const [onUpdate, setOnUpdate] = useState(false);

    // const handleUpdate = (id)=>{
    //     fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({})
    //     })
    //         .then(response => response.json())
    //         .then(car => setOnUpdate(car))
    //
    // }

    return (
        <div>
            <CreateCar setOnSave={setOnSave} />
            <Cars onSave={onSave} />
        </div>
    );
};

export default CarContainer;