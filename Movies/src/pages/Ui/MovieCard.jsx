import {NavLink} from "react-router-dom"

export const MovieCard = ({Poster, imdbID, Title}) => {
    return(
        <li className="w-full h-full flex flex-col">
            <div>
                <img src={Poster} alt="" className="w-full object-cover object-center aspect-[2/3]"/>
            </div>
            <p className="text-center py-2">{Title}</p>
            <NavLink to={`/movies/${imdbID}`} className="text-center bg-red-500 py-2">More</NavLink>
        </li>
    )
}