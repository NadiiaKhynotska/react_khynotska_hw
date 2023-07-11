import React from 'react';

const UserAddress = ({address}) => {
    const {street, suite,city} = address
    return (
        <>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
        </>
    );
};

export default UserAddress;

// UserAddress - яка відображає інформацію street suite city,


