import axios from "axios";

let api = axios.create({
    baseURL: `https://www.omdbapi.com/`,
})

export const getMoviesData = () => {
    return api.get(`?apikey=${import.meta.env.VITE_API_KEY}&s=avengers&page=1`);
}