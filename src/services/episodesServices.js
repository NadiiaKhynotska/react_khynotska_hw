import {apiService} from "./apiService";
import {urls} from "../constansts";

const episodesServices = {
    getAll: (page)=> apiService.get(urls.episodes, {params:{page}})
}


export {episodesServices}