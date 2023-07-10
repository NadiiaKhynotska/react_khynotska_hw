import React from 'react';

const UserDetails = ({user}) => {
    return (
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
            <div>website: {user.website}</div>
        </div>
    );
};

export default UserDetails;

// UserDetails - яка відображає інформацію id,name,username,email,phone,website,