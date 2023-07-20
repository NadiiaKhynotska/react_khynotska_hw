import axios from "axios";

const baseURL = ' https://jsonplaceholder.typicode.com'
const comments = '/comments'

const urls = {
    comments: {
        base: comments,
        byID: (id) => `${comments}/${id}`
    }
}

const apiService = axios.create({baseURL})

export { baseURL, comments,urls,apiService}