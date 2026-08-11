import { startTransition, useEffect, useState, useTransition } from "react";
import { getApiData } from "../api/axiosInstance";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/UI/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [isPending, StartTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const countries = await getApiData();
      setCountries(countries.data);
    });
  }, []);

    const searchCountry = (country) => {
        if(search){
            return country.names.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    }

    const filterCountry = (country) => {
        if(filter === "all") return country;
        return country.region === filter;
    }

    
  
    // console.log(countries);
    if (isPending || !countries.data?.objects) return <Loader />;
    //   console.log(countries?.data?.objects.map(country => country.region));
    let filterData = countries.data.objects.filter(country => searchCountry(country) && filterCountry(country))
  return (
    <section className="w-full">
        <SearchFilter search = {search} setSearch = {setSearch} filter = {filter} setFilter = {setFilter} countries = {countries} setCountries = {setCountries}/>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center m-auto max-w-7xl w-full">
        {filterData.map((country,index) => {
            const {population} = country;
          return <CountryCard key={index} {...country}/>
        // console.log(population)
        })}
      </ul>
    </section>
  );
};
