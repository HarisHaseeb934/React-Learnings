import { useState } from "react";
import { FaGripLines } from "react-icons/fa";

export const Navbar = () => {
  const [isHide, setHide] = useState(true);
  function handleClick() {
    setHide((prev) => !prev);
  }
  return (
    <>
      <section className="w-full bg-[rgb(213,230,242)] pt-3 pb-3 relative">
        <div className="flex max-w-4xl w-full m-auto justify-between p-4">
          <h1 className="font-bold">Dynamic Navbar</h1>
          <div>
            <ul className="hidden md:block flex  md:flex lg:flex gap-5">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>

            <button className="md:hidden" onClick={handleClick}>
              <FaGripLines />
            </button>
          </div>
        </div>
        <div className="text-center bg-white absolute w-full m-3 shadow-2xl md:hidden">
          {!isHide && (
            <ul>
              <li className="p-2">Home</li>
              <li className="p-2">About</li>
              <li className="p-2">Services</li>
              <li className="p-2">Contact</li>
            </ul>
          )}
        </div>
      </section>
    </>
  );
};
