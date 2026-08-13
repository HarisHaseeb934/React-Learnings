import { useLoaderData } from "react-router-dom"
import { Card } from "./Card";

export const Movies = () => {
    const moviesData = useLoaderData();
    console.log(moviesData);
    return(
        <ul className="grid w-full max-w-7xl gap-x-4 m-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {
                moviesData.Search.map(movies => (
                    <Card key = {movies.imdbID} {...movies}/>
                ))
            }
        </ul>
    )
}

