import axios, {create} from "axios";

//
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com'
// })
//
// const endPoints = {
//     POST: '/users',
//     GET: '/users',
// }
// export const apiService = {
//     submit: (data) => {
//       axios.post( 'https://jsonplaceholder.typicode.com/users', {
//           method: 'POST',
//           headers: {"Content-Type": "application/json"},
//           body: JSON.stringify(data)
//       }).then(response => response)
//     }
// }