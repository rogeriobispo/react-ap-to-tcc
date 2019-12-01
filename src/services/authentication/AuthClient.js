 import axios from "axios"


const AuthClient = axios.create({
    baseURL: "http://localhost:3001"
})

export default AuthClient 