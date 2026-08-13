import { NavLink } from "react-router-dom";

export const Header = () => {
  let style = ({ isActive }) => {
    return `hover:text-blue-200 ${isActive ? "text-blue-500" : ""}`;
  };
  return (
    <section className="bg-gray-800 shadow-lg">
      <nav className="flex justify-between items-center max-w-6xl  m-auto">
        <div className="size-25">
          <NavLink to= "/">
            <img src="movies.png" alt="" />
          </NavLink>
        </div>
        <div>
          <ul className="flex gap-8 text-white px-3">
            <li>
              <NavLink to="/" className={style}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={style}>
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={style}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};
