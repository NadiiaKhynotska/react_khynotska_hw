import {apiService, urls} from "../apiService";


const commentsService = {
    getAll:()=> apiService.get(urls.comments.base),
    create: (comment)=> apiService.post(urls.comments.base, comment)
}

export {commentsService}