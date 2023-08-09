import {apiService} from "./apiService";
import {urls} from "../constans";

const carsService = {
    getAll: () => apiService.get(urls.cars),
    updateById: (id, data) => apiService.put(urls.byID(id), data),
    delete: (id) => apiService.delete(urls.byID(id)),
    create: (data) => apiService.post(urls.cars, data)
}

export {carsService}