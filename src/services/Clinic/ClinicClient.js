import axios from "axios"

import { getToken } from '../authentication/auth'

const ClinicClient = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8',
        'authorization': `getToken() ${getToken()}`,
    }
})

export default ClinicClient