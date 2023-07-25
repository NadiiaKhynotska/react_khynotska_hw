import React from 'react';

const NowPlayingFilm = ({nowPlayingFilm}) => {
    const {title,overview}= nowPlayingFilm

    return (
        <div>
            <div>{title}</div>
            <div>{overview}</div>
        </div>
    );
};

export {NowPlayingFilm};