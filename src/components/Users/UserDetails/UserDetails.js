import React from 'react';

const UserDetails = ({id, name, username,email,phone,website}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
        </div>
    );
};

export default UserDetails;

// UserDetails - яка відображає інформацію id,name,username,email,phone,website,