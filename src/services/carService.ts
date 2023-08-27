import {apiService, IRes} from "./apiService";
import {urls} from "../constants";
import {ICar} from "../interfaces";
import {IPagination} from "../interfaces/paginationInterface";

const carService = {
    getAll: (page:number, size:number): IRes<IPagination<ICar>> => apiService.get(urls.cars.base,{params:{page,page_size:size}}),
    create: (car: ICar): IRes<ICar> => apiService.post(urls.cars.base, car),
    getById: (id: number): IRes<ICar> => apiService.get(urls.cars.byId(id)),
    updateByID: (id:number, data:ICar):IRes<ICar> =>apiService.put(urls.cars.byId(id),data),
    deleteById:(id:number): IRes<void> => apiService.delete(urls.cars.byId(id))
}

export {carService}