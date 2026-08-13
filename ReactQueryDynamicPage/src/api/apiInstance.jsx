import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

export const getPost = (pageNum) => {
    return api.get(`/posts?_start=${pageNum}&_limit=3`);
}

export const getSinglePost = (id) => {
    return api.get(`/posts/${id}`);
}

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}

export const updatePost = (id) => {
    return api.patch(`/posts/${id}`, {title: "Hy Haris"});
}