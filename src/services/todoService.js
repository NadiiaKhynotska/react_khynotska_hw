import {apiService} from "./apiServices";
import {urls} from "../constans";

const todoService = {
    getAll: () => apiService.get(urls.todos)
}

export {todoService}