
import {urls} from "../constans";
import {apiServices} from "./apiServices";

const genreServices = {
    getAll: ()=> apiServices.get(urls.genres)
}

export {genreServices}