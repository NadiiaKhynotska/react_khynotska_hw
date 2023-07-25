import {apiService} from "./apiServices";
import {urls} from "../constans";

const topRatedService = {
    getAll : ()=> apiService.get(urls.topRated)
}

export {topRatedService}