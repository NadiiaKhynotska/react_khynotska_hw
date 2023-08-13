import {episodesActionTypes} from "../actions/episodesActoins";

let initialState = {
    prevPage: null,
    nextPage: null,
    episodes: []
};
const episodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case episodesActionTypes.SET_EPISODES:
            const episodes = action.payload.results
                .map(
                    episode => ({
                        ...episode,
                        characters: episode.characters.map(character => character.split("/").slice(-1)[0]).join(',')
                    })
                )
            console.log(episodes)
            return {
                ...state,
                prevPage: action.payload.info.prev,
                nextPage: action.payload.info.next,
                episodes,

            }
        default:
            return state;
    }

}

export {
    episodesReducer
}