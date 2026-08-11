import axios from "axios";

const api = axios.create({
  baseURL: "https://api.restcountries.com",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_REST_COUNTRIES_KEY}`,
  },
});

export const getApiData = () => {
  return api.get("/countries/v5?response_fields=names.common,population,region,capitals,flag.url_svg");
};

export const getCountryData = (name) => {
  return api.get(`/countries/v5/names.common/${name}`);
};