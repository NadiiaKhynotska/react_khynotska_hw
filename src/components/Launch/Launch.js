import React from 'react';

import style from './Launch.module.css'


const Launch = (props) => {
    const {launch} = props;
    const {mission_name, launch_year, links: {mission_patch_small}} = launch;
    return (
        <div className={style.container}>
            <h2> {mission_name}</h2>
            <h3> {launch_year}</h3>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Launch;