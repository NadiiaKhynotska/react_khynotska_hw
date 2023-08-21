import axios, {AxiosPromise, AxiosResponse} from "axios";
import {baseURL} from "../constans";

type IRes<DATA> = Promise<AxiosResponse<DATA>>

const apiService = axios.create({baseURL})

export type {IRes}
export {
   
    apiService
}