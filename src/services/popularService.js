import {apiService} from "./apiServices";
import {urls} from "../constans";

const popularService = {
    getAll: ()=> apiService.get(urls.popular)
}

export {popularService}