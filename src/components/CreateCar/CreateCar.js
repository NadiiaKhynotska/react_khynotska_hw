import React, {useRef} from 'react';

import style from './CreateCar.module.css'

const CreateCar = () => {

    const brandRef = useRef('')
    const priceRef = useRef('')
    const yearRef = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const car = {
            brand: brandRef.current.value,
            price: priceRef.current.value,
            year: yearRef.current.value,
        }

        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'POST',
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
            <h2>Create New Car</h2>
            <form onSubmit={handleSubmit}>
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
                <button>Add Car</button>
            </form>
        </div>
    );
};

export default CreateCar;