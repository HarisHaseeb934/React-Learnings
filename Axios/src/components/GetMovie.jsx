import { useEffect, useState } from "react";
import axios from "axios";
import { getMoviesData } from "../services/AxiosMovieInstance";


export const Movie = () => {
  let [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // await axios.get(
    //     `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=avengers&page=1`,
    //   );
    try {
      const response = await getMoviesData();
      setMovies(response.data.Search);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ul>
      {movies.map((movie) => (
        <Card key={movie.imdbID} {...movie} />
      ))}
    </ul>
  );
};

const Card = ({ Poster, Title, BoxOffce }) => {
  return (
    <li>
      <div>
        <img src={Poster} alt="" />
      </div>
      <p>{Title}</p>
    </li>
  );
};
