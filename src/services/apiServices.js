import axios from "axios";

import {api_key, baseURL} from "../constans";

const apiServices = axios.create({
    baseURL,
    headers:{
        accept: 'application/json',
        Authorization: api_key
    }
})


export {apiServices}