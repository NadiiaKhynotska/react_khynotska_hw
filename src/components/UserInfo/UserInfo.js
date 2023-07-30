import React from 'react';

import css from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={css.user}>
            <h1>User profile </h1>
            <div className={css.userBox}>
                <div className={css.profilePhoto}></div>
                <h2> Nadiia Khynotska</h2>
            </div>

        </div>
    );
};

export {UserInfo};
