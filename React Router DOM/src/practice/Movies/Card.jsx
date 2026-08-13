import { NavLink, useParams } from "react-router-dom";

export const Card = ({ Poster, Title, imdbID}) => {
  console.log(imdbID)
  return (
    <li className="items-center my-10 text-center">
      <div className="w-full h-full">
        <img src={Poster} alt="" className="w-full h-full object-cover" />
      </div>
      <p className="font-bold">{Title}</p>
      <NavLink to = {`/movies/${imdbID}`}>
        <button className="w-full py-3 bg-red-500 text-white">Watch Now</button>
      </NavLink>
    </li>
  );
};
