import {apiServices} from "./apiServices";
import {urls} from "../constans";

const commentsServices = {
    getAll : ()=> apiServices.get(urls.comments)
}

export {commentsServices}