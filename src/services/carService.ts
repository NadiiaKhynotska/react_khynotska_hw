import {apiService, IRes} from "./apiService";
import {urls} from "../constants";
import {ICar} from "../interfaces";

const carService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.base),
    create: (car: ICar): IRes<ICar> => apiService.post(urls.base, car),
    getById: (id: number): IRes<ICar> => apiService.get(urls.byId(id)),
    updateByID: (id:number, data:ICar):IRes<ICar> =>apiService.put(urls.byId(id),data),
    deleteById:(id:number): IRes<void> => apiService.delete(urls.byId(id))
}

export {carService}