const baseURL = 'https://api.themoviedb.org/3'

const api_key='api_key=8b371c2ada55d20f38189492d2084bef'

const nowPlaying = `/movie/now_playing,${api_key}`
const popular = '/movie/popular'
const topRated = '/movie/top_rated'
const upcoming = '/movie/upcoming'


const urls = {
    nowPlaying,
    popular,
    topRated,
    upcoming,
}

export {baseURL, urls}