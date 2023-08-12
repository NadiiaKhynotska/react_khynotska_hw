import {apiService} from "./apiService";
import {urls} from "../constansts";

const characterServices = {
    getByIds: (iDs) => apiService.get(urls.characters.byIds(iDs))
}

export {characterServices}