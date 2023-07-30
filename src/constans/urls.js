const baseURL = 'https://api.themoviedb.org/3'

const api_key = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmM2NjUxMDA5NGExYTUyNmJlYzMwMDdhMDA1NTEwNyIsInN1YiI6IjY0YmZkNGU3MDE3NTdmMDBmZjVlYzc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q3Y9mzjW9fomRNxRrO73gpKzVmesQoVHMohB46YsGRU'
const posterUrl = 'https://image.tmdb.org/t/p/w500'

const movies = `/discover/movie`
const movieDetails = `/movie`
const genres = '/genre/movie/list'
const topRated =  '/movie/top_rated'
const urls = {

    movieDetails,
    genres ,
    topRated:{
        listCount: (count)=> `${topRated}?page=${count}`
    },
    movies: {
        moviesPages: (count)=> `${movies}?page=${count}`
    }


}

export {
    baseURL, urls, api_key, posterUrl
}