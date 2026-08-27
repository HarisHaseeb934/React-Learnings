import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  // const [isVisible, setVisible] = useState(false);

  // function handleSerachVisibility() {
  //   setVisible((prev) => !prev);
  // }

  return (
<<<<<<< HEAD
    <header className="w-full sticky top-0 z-50 p-3 h-38 md:h-30 backdrop-blur-xl">
      <div className="w-full max-w-7xl m-auto flex justify-between items-center relative">

        <div className="flex items-center justify-center gap-3">
          <img src="Logo.png" alt="" width="25px" />
          <h1 className="sm:text-lg md:text-2xl font-bold">ApexStore</h1>
        </div>

        <form
          className={`bg-slate-200 nav p-2 rounded-3xl md:w-xs`}
=======
    <header className="w-full p-3 shadow-sm">
      <div className="w-full max-w-7xl m-auto flex justify-between items-center gap-5 relative">
        <NavLink to={"/"} className="flex items-center justify-center">
          <img src="Logo.png" alt="" width="50px" />
          <h1 className="sm:text-lg md:text-2xl font-bold">ApexStore</h1>
        </NavLink>
        <form
          className={`${isVisible ? "nav" : "nav hide"} bg-slate-100 rounded-2xl p-2 md:w-md shadow-md`}
>>>>>>> f6ee61d0f218c0cf4cd3f290fffe03efdf63e527
        >
          <input
            type="text"
            name="search"
            className="outline-none px-2 text-md w-full"
            placeholder="Search Products..."
          />
          <button>
            <IoIosSearch className="text-xl" />
          </button>
        </form>

<<<<<<< HEAD
        <div className="flex items-baseline text-2xl gap-5 md:gap-7">
          {/* <button onClick={handleSerachVisibility}>
            <IoIosSearch className="text-2xl md:hidden" />
          </button> */}
          <NavLink className={`relative`} to={"/favorites"}>
          <span className="absolute -top-2 size-4 -right-2 text-[12px] bg-blue-500 rounded-full text-white md:size-5 flex items-center justify-center">0</span>
=======
        <div className="flex items-center text-2xl gap-4 md:gap-6">
          <button onClick={handleSerachVisibility}>
            <IoIosSearch className="text-xl md:hidden" />
          </button>
          <NavLink>
>>>>>>> f6ee61d0f218c0cf4cd3f290fffe03efdf63e527
            <CiHeart />
          </NavLink>
          <NavLink className={`relative`} to={'/cart'}>
          <span className="absolute -top-2 size-4 -right-2 text-[12px] bg-blue-500 rounded-full text-white md:size-5 flex items-center justify-center">0</span>
            <IoCartOutline />
          </NavLink>
          <NavLink className="bg-blue-700 p-1 text-xl text-white rounded-full" to={"/profile"}>
            <IoPersonOutline />
          </NavLink>
        </div>

      </div>
      <div className="w-full max-w-7xl m-auto my-2 px-3">
        <nav className="flex gap-12 text-[13px] sm:text-base justify-center md:justify-start">
          <NavLink to={"/"} className={({isActive}) => `${isActive ? "text-blue-500 scale-110 font-bold" : "font-bold text-slate-500"}`}>Home</NavLink>
          <NavLink to={"/shop"} className={({isActive}) => `${isActive ? "text-blue-500 scale-110 font-bold" : "font-bold text-slate-500"}`}>Shop All</NavLink>
          <NavLink to={"/categories"} className={({isActive}) => `${isActive ? "text-blue-500 scale-110 font-bold" : "font-bold text-slate-500"}`}>Categories</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
