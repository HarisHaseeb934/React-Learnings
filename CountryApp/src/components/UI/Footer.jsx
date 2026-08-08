import footerApi from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";


export const Footer = () => {

    const footerIcons = {
        MdPlace: <MdPlace/>,
        IoCallSharp: <IoCallSharp/>,
        TbMailPlus: <TbMailPlus/>,
    }

  return (
    <footer>
      <div>
        {footerApi.map((curr, index) => {
          const { icon, title, details } = curr;
          return(
            <div key={index}>
                <div>{footerIcons[icon]}</div>
                <div>{title}</div>
                <div>{details}</div>
            </div>
          );
        })}
      </div>

      <div>
        <div>
            <div>
                <div>
                    <p>Copyright &copy; 2026, All rights Reserved</p>
                    <NavLink to={""}>Technical.com</NavLink>
                </div>
                <div>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                        <li><NavLink to={"/country"}>Country</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};
