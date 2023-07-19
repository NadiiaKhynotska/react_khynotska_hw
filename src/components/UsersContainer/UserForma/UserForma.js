import React from 'react';

import style from './UserForma.module.css'
import {useForm} from "react-hook-form";
import {userService} from "../../servises/apiServises/userService/userService";

const UserForma = ({setUsers}) => {

    const {
        register,
        handleSubmit,
        reset,
    } = useForm();


    const submit = (data) => {
        console.log(data)
        userService.create(data)
            .then(response=> response.data)
            .then(data => setUsers(prev => [...prev, data]))
        reset()
    }


    return (
        <div className={style.create}>
            <h2>Create new User</h2>
            <form onSubmit={handleSubmit(submit)}>
                <label>Name:</label>
                <input
                    type='text'
                    {...register('name')}

                />
                <label>User name: </label>
                <input
                    type='text'
                    {...register('username')}

                />
                <label>User email:</label>
                <input
                    type='email'
                    {...register('email')}

                />
                <label>User city:</label>
                <input
                    type='text'
                    {...register('address.city')}
                />
                <label>Gender:</label>
                <select
                    {...register('gender')}
                >
                    <option value='female'> Female</option>
                    <option value='male'> Male</option>
                </select>

                <button>Add User</button>

            </form>

        </div>
    );
};

export default UserForma;