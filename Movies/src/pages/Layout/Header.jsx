import {NavLink} from "react-router-dom"
 
export const Header = () => {

    let style = ({isActive}) => {
        return `${isActive ? "text-blue-400" : "text-white"}`
    }
  return (
    <nav className="bg-gray-800">
      <div className="flex w-full max-w-7xl m-auto justify-between items-center px-5">
        <div className="w-30">
          <NavLink to= "/">
          <img src="movies.png" alt="" className="" />
          </NavLink>
        </div>
        <div>
          <ul className="flex gap-6 text-white">
            <li>
              <NavLink to= "/" className={style}>Home</NavLink>
            </li>
            <li>
              <NavLink to= "/movies" className={style}>Movies</NavLink>
            </li>
            <li>
              <NavLink to= "/contact" className={style}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
