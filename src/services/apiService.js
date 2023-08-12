import axios from "axios";
import {baseURL} from "../constansts";

const apiService = axios.create({baseURL})

export {apiService}