import React, {useEffect, useRef} from 'react';

import style from './CreateCar.module.css'

const CreateCar = ({setOnSave, onUpdate, setOnUpdate}) => {
    let brandRef = useRef('')
    let priceRef = useRef('')
    let yearRef = useRef('')

    useEffect(() => {
        if (onUpdate) {
            brandRef.current.value = onUpdate.brand
            priceRef.current.value = onUpdate.price
            yearRef.current.value = onUpdate.year
        }

    }, [onUpdate])
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
            .then(() => {
                setOnSave(prev => !prev)

                brandRef.current.value = ''
                priceRef.current.value = ''
                yearRef.current.value = ''
            })
    }

    const update = (e) => {
        e.preventDefault()
        if (onUpdate) {
            const car = {
                brand: brandRef.current.value,
                price: priceRef.current.value,
                year: yearRef.current.value,
            }
            fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${onUpdate.id}`, {
                headers: {'content-type': 'application/json'},
                method: 'PUT',
                body: JSON.stringify(car)
            }).then(value => value.json()).then(() => {
                setOnSave(prev => !prev)
                setOnUpdate(null)
                brandRef.current.value = ''
                priceRef.current.value = ''
                yearRef.current.value = ''
            })
        }
    }


    return (
        <div className={style.create}>
            <h2>{onUpdate ? 'Update current car' : 'Create New Car'}</h2>
            <form onSubmit={onUpdate ? update : handleSubmit}>
                <label>Brand</label>
                <input
                    type='text'
                    ref={brandRef}
                    required={true}
                />

                <label>Price</label>
                <input
                    type='number'
                    ref={priceRef}
                    min={0}
                    max={1000000}
                    required={true}
                />

                <label>Year of manufactured</label>
                <input
                    type='number'
                    ref={yearRef}
                    min={1990}
                    max={new Date().getFullYear()}
                    required={true}
                />
                <button disabled={!setOnSave}>{onUpdate ? 'Update car' : 'Add new car'}</button>
            </form>
        </div>
    );
};

export default CreateCar;