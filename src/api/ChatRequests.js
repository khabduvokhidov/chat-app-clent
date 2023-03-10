import axios from "axios";

const API = axios.create({baseURL: "https://chat-app-backend-1cbh.onrender.com/"})

API.interceptors.request.use((req)=> {
    if(localStorage.getItem("token")) {
        req.headers.token = localStorage.getItem("token")
    }

    return req
})

export const userAddChat = (data) => API.post(`chat`, data)

export const userChats = () => API.get(`chat`)

export const deleteChat = (id) => API.delete(`chat/${id}`)

