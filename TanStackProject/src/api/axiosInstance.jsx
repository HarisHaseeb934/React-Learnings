import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

export const getPosts = async(pageNum) => {
    const response = await api.get(`/posts?_start=${pageNum}&_limit=4`);
    return response.data;
}

export const getPost = async(id) => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
}

export const deletePost = async(id) => {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
}

export const infinitePosts = async({pagaPram = 1}) => {
    const response = await api.get(`https://api.github.com/users?per_page=10&page=${pagaPram}`);
    return response.data;
}