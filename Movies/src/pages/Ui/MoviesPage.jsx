import { useLoaderData } from "react-router-dom";

export const MoviesPage = () => {
  const { Poster, BoxOffice, Actors, Runtime, Title } = useLoaderData();
  // console.log(movie)
  return (
    <section className="">
      <div className="flex justify-center items-center max-w-lg w-full m-auto shadow-2xl my-10">
        <div className="size-50 h-full">
        <img src={Poster} alt="" />
      </div>
      <div className="px-4">
        <p className=""><span className="font-bold">Title: </span>{Title}</p>
        <p className=""><span className="font-bold">Actors: </span>{Actors}</p>
        <p className=""><span className="font-bold">RunTime: </span>{Runtime}</p>
        <p className=""><span className="font-bold">BoxOffice: </span>{BoxOffice}</p>
      </div>    
      </div>
      
    </section>
  );
};
