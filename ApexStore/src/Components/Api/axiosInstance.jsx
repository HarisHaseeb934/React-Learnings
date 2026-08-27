import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com",
})

export const getCategories = async() => {
    const response = await api.get("/products/categories")
    return response.data 
}
