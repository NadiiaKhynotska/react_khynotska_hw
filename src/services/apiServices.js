import axios from "axios";

import {baseURL} from "../constans";

const apiServices = axios.create({baseURL})

export {apiServices}