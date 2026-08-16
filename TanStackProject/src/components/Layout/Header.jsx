import { NavLink } from "react-router-dom";

export const Header = () => {
  function style({isActive}){
    return `${isActive ? "text-blue-500 scale-105" : "text-white scale-none"}`
  }
  return (
    <header className="w-full bg-black">
      <nav className="w-full max-w-6xl flex m-auto justify-between p-5 items-center">
        <h1 className="text-2xl text-white">TanStack Project</h1>
 
        <ul className="flex gap-10">
          <li className="text-lg">
            <NavLink to={"/"} className={style}>Home</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to={"/posts"} className={style}>Posts</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to={"/profiles"} className={style}>Profiles</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
