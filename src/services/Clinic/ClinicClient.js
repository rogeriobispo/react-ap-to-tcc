import axios from "axios"

import { getToken } from '../authentication/auth'

const ClinicClient = axios.create({
    baseURL: "https://roger-clinic-api.herokuapp.com/",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8',
        'authorization': `getToken() ${getToken()}`,
    }
})

export default ClinicClient