import { useLoaderData } from "react-router-dom";

export const MoviesDetail = () => {
  const movieDetail = useLoaderData();
  return (
    <section className="w-full max-w-lg mx-auto flex flex-col justify-center items-center">
      <div>
        <div className="w-full h-full">
          <img src={movieDetail.Poster} alt="" className="w-full h-full object-cover object-fit"/>
        </div>
        <div className="py-4">
          <ul>
            <li className="text-center font-bold">Title: {movieDetail.Title}</li>
            <li>RunTime: {movieDetail.Runtime}</li>
            <li>BoxOffice: {movieDetail.BoxOffice}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
