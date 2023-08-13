const episodesActionTypes = {
    SET_EPISODES: 'SET_EPISODES'
}

const episodesActions = {
    setEpisodes: (payload)=>({ type: episodesActionTypes.SET_EPISODES ,payload})
}

export {
    episodesActions,
    episodesActionTypes
}