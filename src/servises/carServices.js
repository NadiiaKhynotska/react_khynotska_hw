import {apiServices} from "./apiServices";
import {urls} from "../constans/urls";

const carServices = {
    getAll: () => apiServices.get(urls.cars.base),
    create: (data) => apiServices.post(urls.cars.base, data),
    updateById: (data, id) => apiServices.put(urls.cars.byId(id),data),
    deleteById: (id) => apiServices.delete(urls.cars.byId(id))
}

export {carServices}