import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com",
});

export const getApiData = async({pageParam}) => {
    const response = await api.get(`/users?per_page=10&page=${pageParam}`);
    return response.data;
}

