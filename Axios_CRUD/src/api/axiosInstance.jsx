import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getData = async() => {
    return await api.get("/posts");
}

export const deleteData = async(id) => {
    return await api.delete(`/posts/${id}`);
}

export const postData = async(post) => {
    return await api.post(`/posts`,post);
}

export const putData = async(id,post) => {
    return await api.patch(`/posts/${id}`,post);
}