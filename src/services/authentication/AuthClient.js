import axios from "axios"
import { getToken } from "../authentication/auth"

console.dir(process.env)
const AuthClient = axios.create({
    baseURL: "http://localhost:3001"
});
// // intercepta post de conexao
// AuthClient.interceptors.request.use(async config => {
//   const token = getToken()
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// });

export default AuthClient 