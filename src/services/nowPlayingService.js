import {apiService} from "./apiServices";
import {urls} from "../constans";

const nowPlayingService = {
    getAll: ()=> apiService.get(urls.nowPlaying)
}

export {nowPlayingService}