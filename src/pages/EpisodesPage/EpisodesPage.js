import React from 'react';
import {Episodes, EpisodesPagination} from "../../components/EpisodesContainer";

const EpisodesPage = () => {
    return (
        <div>
            <Episodes/>
            <EpisodesPagination/>
        </div>
    );
};

export {EpisodesPage};