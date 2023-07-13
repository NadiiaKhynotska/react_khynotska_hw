import React, {useRef} from 'react';

import style from './DeleteCar.module.css'

const DeleteCar = () => {
    const idRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const carId = idRef.current.value;


        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carId}`, {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        // .then(response => response.json())
        // .then(car => console.log(car))
    }

    return (
        <div className={style.create}>
            <h2>Delete car</h2>
            <form onSubmit={handleSubmit}>
                <label>Car ID to delete</label>
                <input
                    type='number'
                    ref={idRef}
                />
                <button>Delete car</button>
            </form>

        </div>
    );
};

export default DeleteCar;