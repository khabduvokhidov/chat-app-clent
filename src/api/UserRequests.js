import axios from "axios";

const API = axios.create({baseURL: "http://localhost:4000/"})

API.interceptors.request.use((req)=> {
    if(localStorage.getItem("token")) {
        req.headers.token = localStorage.getItem("token")
    }

    return req
})

export const getUser = (userId) => API.get(`user/${userId}`)

export const getUsers = () => API.get("user/")

export const updateUser = (id, FormData) => API.put(`user/${id}`, FormData)

export const deleteUser = (id) => API.delete(`user/${id}`, FormData)

export const followUser = (id, data) =>  API.put(`user/${id}/follow`, data)

export const unfollowUser = (id, data) => API.put(`user/${id}/unfollow`, data)