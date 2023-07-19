import axios from "axios";

const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users';

const urls = {
    users: {
        base: users,
        byId: (id) => `${users}/${id}`
    }
}

const apiService = axios.create({baseURL})

export {apiService, baseURL, urls,users}