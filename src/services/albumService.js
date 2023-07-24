import {apiService} from "./apiServices";
import {urls} from "../constans";

const albumService = {
    getAll: ()=> apiService.get(urls.albums)
}

export {albumService}