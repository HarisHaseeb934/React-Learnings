import { NavLink } from "react-router-dom";

export const Header = () => {

  const style = ({isActive}) => {
    return `${isActive ? "text-[#A5D6A7]" : "text-[#E8F5E9]"}`
  }
  return (
    <header className="w-full bg-[#66BB6A]">
      <div className="max-w-4xl w-full m-auto p-5">
        <div className="flex justify-between items-center h-15">
          <div className="text-xl font-bold text-[#E8F5E9]">
            <NavLink to={"/"}>
              <h1>World Tour</h1>
            </NavLink>
          </div>

          <nav className="">
            <ul className="flex gap-5">
                <li><NavLink to={"/"} className={style}>Home</NavLink></li>
                <li><NavLink to={"/country"} className={style}>Country</NavLink></li>
                <li><NavLink to={"/about"} className={style}>About</NavLink></li>
                <li><NavLink to={"/contact"} className={style}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
