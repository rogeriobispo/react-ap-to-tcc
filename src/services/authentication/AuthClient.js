import axios from "axios"

console.dir(process.env)
const AuthClient = axios.create({
    baseURL: "http://localhost:3001"
});


export default AuthClient 