import {apiService, urls} from "../apiServises";

const userService = {
    getAll: ()=>apiService.get(urls.users.base),
    create: (user)=> apiService.post(urls.users.base, user)
}
export {userService}