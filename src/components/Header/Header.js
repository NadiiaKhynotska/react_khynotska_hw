import React from 'react';

import css from './Header.module.css'
import {Box, LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";

const Header = () => {
    const {isProgress} = useSelector(state => state.progress);
    const {currentEpisode} = useSelector(state => state.episodes)
    return (
        <div>
            <div className={css.Header}>
                {currentEpisode ? currentEpisode : 'Rick & Morty'}
            </div>
            {
                isProgress ? (
                        <Box sx={{width: '100%', height: '10px'}}>
                            <LinearProgress color={"secondary"}/>
                        </Box>
                    ) :
                    <div style={{height: '10px'}}></div>
            }

        </div>
    );
};

export {Header};