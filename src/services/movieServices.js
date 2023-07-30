import {apiServices} from "./apiServices";
import {urls} from "../constans";

const movieServices = {
    getAll : (count)=> apiServices.get(urls.movies.moviesPages(count)),
    getTopRated: (count)=> apiServices.get(urls.topRated.listCount(count)),
    byId : (id) => apiServices.get(`${urls.movieDetails}/${id}`)
}

export {movieServices}