import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
    const [isVisible, setVisible] = useState(false)
  return (
    <header className="w-full p-3">
      <div className="w-full max-w-7xl m-auto flex justify-between items-center gap-4">
        <div className="flex items-center justify-center">
          <img src="Logo.png" alt="" width="50px" />
          <h1 className="text-2xl font-bold">ApexStore</h1>
        </div>
        <form className={`bg-slate-200 hidden md:flex items-center p-2 rounded-3xl md:w-xs`}>
          <IoIosSearch className="text-xl" />
          <input
            type="text"
            name="search"
            className="outline-none px-2 text-md w-full"
            placeholder="Search Products..."
          />
        </form>
        <div className="flex items-center text-2xl gap-5">
          <NavLink>
            <CiHeart />
          </NavLink>
          <NavLink>
            <IoCartOutline />
          </NavLink>
          <NavLink className="bg-blue-700 p-1 text-xl text-white rounded-full">
            <IoPersonOutline />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
