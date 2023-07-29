const baseURL = 'https://api.themoviedb.org/3'

const api_key = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmM2NjUxMDA5NGExYTUyNmJlYzMwMDdhMDA1NTEwNyIsInN1YiI6IjY0YmZkNGU3MDE3NTdmMDBmZjVlYzc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q3Y9mzjW9fomRNxRrO73gpKzVmesQoVHMohB46YsGRU'

const movie = `/discover/movie`
const genres = '/genre/movie/list'
const byId = 'movie'


const urls = {
    movie,
    genres,
    byId : (id)=> `movie/${id}`
}
export {baseURL, urls, api_key}