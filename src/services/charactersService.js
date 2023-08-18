import {apiService} from "./apiService";
import {urls} from "../constants";

const charactersService = {
    getAll: (iDs)=> apiService.get(urls.charactersByIds(iDs))
}

export {charactersService}