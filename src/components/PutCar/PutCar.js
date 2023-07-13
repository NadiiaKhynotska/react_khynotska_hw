import React, {useRef} from 'react';

import style from './PutCar.module.css'

const PutCar = () => {

    const brandRef = useRef('')
    const priceRef = useRef('')
    const yearRef = useRef('')
    const idRef = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const carId = +idRef.current.value;
        const car = {
            brand: brandRef.current.value,
            price: priceRef.current.value,
            year: yearRef.current.value,
        }

        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carId}`, {
            method: 'PUT',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(response => response.json())
            .then(car => console.log(car))
    }

    return (
        <div className={style.create}>
            <h2>Update Car</h2>
            <form onSubmit={handleSubmit}>
                <label>Car ID to delete</label>
                <input
                    type='number'
                    ref={idRef}
                />
                <label>Brand</label>
                <input
                    type='text'
                    ref={brandRef}
                />

                <label>Price</label>
                <input
                    type='number'
                    ref={priceRef}
                />

                <label>Year of manufactured</label>
                <input
                    type='number'
                    ref={yearRef}
                />
                <button>Update Car</button>
            </form>
        </div>
    );
};

export default PutCar;