import axios from "axios"
import { getToken } from "../authentication/auth"

console.dir(process.env)
const AuthClient = axios.create({
    baseURL: "http://localhost:3001"
});


export default AuthClient 