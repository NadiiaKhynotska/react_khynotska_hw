import {apiServices} from "./apiServices";
import {urls} from "../constants";

const characterService = {
    getAll: (iDs) => apiServices.get(urls.characters.byIds(iDs))
}

export {characterService}