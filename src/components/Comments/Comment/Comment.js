import React from 'react';

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;
    return (
        <div>
            <div>ID : {id}</div>
            <div>Name : {name}</div>
            <div>Email : {email}</div>
            <div>Body : {body}</div>

        </div>
    );
};

export {Comment};