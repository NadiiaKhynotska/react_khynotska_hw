import React from 'react';

const UserAddress = ({street, suite, city}) => {
    return (
        <div>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
        </div>
    );
};

export default UserAddress;

// UserAddress - яка відображає інформацію street suite city,


