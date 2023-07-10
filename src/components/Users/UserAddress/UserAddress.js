import React from 'react';

const UserAddress = ({address}) => {
    return (
        <div>
            <div>street: {address.street}</div>
            <div>suite: {address.suite}</div>
            <div>city: {address.city}</div>
        </div>
    );
};

export default UserAddress;

// UserAddress - яка відображає інформацію street suite city,


