import {apiService} from "./apiServices";
import {urls} from "../constans";

const genreService={
    getAll: ()=> apiService.get(urls.genres)
}

export {genreService}