 import axios from "axios"

 import { getToken } from './auth'


const AuthClient = axios.create({
    baseURL: "http://localhost:3001",
    headers: {'x-access-token': getToken() }
})

export default AuthClient