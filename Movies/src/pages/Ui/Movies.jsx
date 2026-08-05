import { useLoaderData } from "react-router";
import { MovieCard } from "./MovieCard";

export const Movies = () => {
  const movies = useLoaderData();
  console.log(movies)

  return <ul className="grid lg:grid-cols-3 md:grid-cols-2 max-w-[90%] w-full m-auto gap-5">{
        movies.Search.map(movie => (
            <MovieCard key={movie.imdbID} {...movie}/>
        ))
    }</ul>;
};
