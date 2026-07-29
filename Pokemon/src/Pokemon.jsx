import "./index.css";
import { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=50";

  const fetchPokemon = async () => {
    try {
      let response = await fetch(API);
      let data = await response.json();

      let pokemonData = data.results.map(async (singlePokemon) => {
        let response = await fetch(singlePokemon.url);
        let singlePokemonData = await response.json();
        return singlePokemonData;
      });

      let singleData = await Promise.all(pokemonData);
      setPokemons(singleData);
      setFilterData(singleData);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err);
      setLoading(false);
    }
  };

  function handleInput(event) {
    setInput(event.target.value);
    setFilterData(
      pokemons.filter((obj) =>
        obj.name.toLowerCase().includes(event.target.value.toLowerCase()),
      ),
    );
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  // let searchData = pokemons.filter((pokemon) =>
  //   pokemon.name.toLowerCase().includes(input.toLowerCase()),
  // );

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <section className="m-auto w-full flex flex-col justify-center items-center text-center">
        <header>
          <h1>Lets Catch Pokemon</h1>
          {console.log(filterData.length)}
          <input type="text" name="name" value={input} onChange={handleInput}/>
          {/* (e) => setInput(e.target.value) */}
        </header>
        <div>
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-3 md:gap-2 lg:gap-4 ">
            {filterData.map((pokemon) => (
              <PokemonCard key={pokemon.id} props={pokemon} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
