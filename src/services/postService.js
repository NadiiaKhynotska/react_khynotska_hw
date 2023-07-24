import {apiService} from "./apiServices";
import {urls} from "../constans";

const postService ={
    getById : (id)=> apiService.get(urls.posts.byId(id))
}

export {postService}