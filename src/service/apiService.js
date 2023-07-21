import axios from "axios";

const baseURL = ' https://jsonplaceholder.typicode.com'
const comments = '/comments'

const urls = {
    comments: {
        base: comments
    }
}

const apiService = axios.create({baseURL})

export { baseURL,urls,apiService}