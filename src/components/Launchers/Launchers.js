import React, {useEffect, useState} from 'react';
import Launch from "../Launch/Launch";

const Launchers = () => {
    const [launchers, setLaunchers] = useState([]);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response =>response.json())
            .then(data => setLaunchers(data))
    },[])
    const filterLaunches = launchers.filter(launch => launch.launch_year !== '2020')
    return (
        <>
            {filterLaunches.map(launch => <Launch key = {launch.launch_date_unix + launch.mission_name} launch ={launch}/>)}
        </>
    );
};
export default Launchers;

//
// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
