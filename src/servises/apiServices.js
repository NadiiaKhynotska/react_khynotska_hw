
import axios from "axios";

import {baseURL} from "../constans/urls";

const apiServices = axios.create({baseURL})

export {apiServices}