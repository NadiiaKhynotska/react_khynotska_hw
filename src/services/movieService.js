import {apiService} from "./apiServices";
import {urls} from "../constans";

const movieService = {
    getAll: () => apiService.get(urls.movie),
    getById: (id) => apiService.get(urls.movieById(id))
}

export {movieService}