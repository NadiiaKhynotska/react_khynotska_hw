import {apiServices} from "./apiServices";
import {urls} from "../constants";

const episodeService ={
    getAll: (page)=> apiServices.get(urls.episodes, {params:{page}})
}

export {episodeService}