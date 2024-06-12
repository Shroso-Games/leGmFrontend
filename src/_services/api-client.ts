import axios from "axios";


export const apiClient = axios.create({
    baseURL: 'http://localhost:8080'
});


export const pythonClient = axios.create({
    baseURL: "http://127.0.0.1:5000/"
})