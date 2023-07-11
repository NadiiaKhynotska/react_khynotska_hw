import React from 'react';

const UserDetails = ({user}) => {
    const {id, name, username, email, phone, website} = user
    return (
        <>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
        </>
    );
};

export default UserDetails;

// UserDetails - яка відображає інформацію id,name,username,email,phone,website,