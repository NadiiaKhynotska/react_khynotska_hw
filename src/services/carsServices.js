import {apiServicesCars} from "./apiServices";
import {urls} from "../constans";

const carsServices = {
    getAll: ()=> apiServicesCars.get(urls.cars)
}

export {carsServices}