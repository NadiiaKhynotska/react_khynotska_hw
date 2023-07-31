import axios from "axios";
import {baseURL, baseURLCars} from "../constans";

const apiServices = axios.create({baseURL})

const apiServicesCars = axios.create({baseURL: baseURLCars})

export {
    apiServices,
    apiServicesCars
}