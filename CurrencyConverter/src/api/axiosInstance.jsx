import axios from "axios";

const api = axios.create({
    baseURL: `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}`,
})

export const getCurrency = ({from, to, amount}) => {
    console.log(from, to, amount)
    return api.get(`/pair/${from}/${to}/${amount}`);
}