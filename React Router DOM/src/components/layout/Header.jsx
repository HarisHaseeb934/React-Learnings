import { NavLink } from "react-router-dom";

export const Header = () => {
  let colorChange = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "black",
    };
  };
  return (
    <section className="flex flex-col shadow-lg">
      <div className="bg-gray-800">
        <div className="w-full max-w-3xl m-auto flex justify-between py-3 text-md text-white">
          <div>
            <p>Get My Membership, 30-day return or refund gurantee.</p>
          </div>
          <div className="flex gap-7">
            <a href="" className="">
              SIGN IN
            </a>
            <a href="" className="">
              SIGN UP
            </a>
          </div>
        </div>
      </div>

      <div className="m-auto max-w-3xl w-full flex justify-between py-3">
        <div>
          <a href="#">
            <p>MovieFlix</p>
          </a>
        </div>

        <nav>
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "navlink")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : "black",
                  };
                }}
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={colorChange}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
