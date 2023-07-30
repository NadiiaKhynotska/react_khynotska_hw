import {apiServices} from "./apiServices";
import {urls} from "../constans";

const movieServices = {
    getAll : ()=> apiServices.get(urls.movies),
    getTopRated: ()=> apiServices.get(urls.topRated),
    byId : (id) => apiServices.get(`${urls.movieDetails}/${id}`)
}

export {movieServices}