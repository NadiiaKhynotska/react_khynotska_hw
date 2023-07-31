import {apiServices} from "./apiServices";
import {urls} from "../constans";

const postServices = {
    getAll : ()=> apiServices.get(urls.posts)
}

export {postServices}