import axios from "axios";

const API = axios.create({baseURL: "https://chat-app-backend-1cbh.onrender.com/"})

API.interceptors.request.use((req)=> {
    if(localStorage.getItem("token")) {
        req.headers.token = localStorage.getItem("token")
    }

    return req
})

export const uploadImage = (data) => API.post(`upload`, data)

export const uploadPost = (data) => API.post(`post`, data)
