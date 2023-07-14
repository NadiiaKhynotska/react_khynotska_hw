import React, {useEffect, useRef} from 'react';

import style from './CreateCar.module.css'

const CreateCar = ({setOnSave, onUpdate, setOnUpdate}) => {
    let brandRef = useRef('')
    let priceRef = useRef('')
    let yearRef = useRef('')

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
            .then(car => {
                setOnSave(prev => !prev)

                brandRef.current.value = ''
                priceRef.current.value = ''
                yearRef.current.value = ''
            })
    }

    useEffect(()=>{
        if(onUpdate){
            brandRef.current.value = onUpdate.brand
            priceRef.current.value = onUpdate.price
            yearRef.current.value = onUpdate.year
        }

    },[onUpdate])

    const handleUpdate = (onUpdate)=>{
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${onUpdate.id}`, {
            method: 'PUT',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(onUpdate)
        })
            .then(response => response.json())
            .then(() => setOnSave(prev => !prev)),
            setOnUpdate(null)

    }


    return (
        <div className={style.create}>
            <h2>Create New Car</h2>
            <form onSubmit={!onUpdate?handleSubmit:handleUpdate}>
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