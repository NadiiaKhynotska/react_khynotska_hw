import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constants";
import {authService} from "./authService";

type IRes<DATA> = Promise<AxiosResponse<DATA>>

const apiService = axios.create({baseURL})

apiService.interceptors.request.use( req =>{
    const access = authService.getAccessToken();

    if(access){
        req.headers.Authorization = `Bearer ${access}`
    }
    return req 
})

export type {
    IRes
}

export {apiService}