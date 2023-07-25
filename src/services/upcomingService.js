import {apiService} from "./apiServices";
import {urls} from "../constans";

const upcomingService ={
    getAll: ()=> apiService.get(urls.upcoming)
}

export {upcomingService}