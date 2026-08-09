import footerApi from "../../api/footerApi.json";
import { TbMailPlus } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";

export const Footer = () => {

    const footerIconObj = {
        MdPlace: <MdPlace/>,
        IoCallSharp: <IoCallSharp/>,
        TbMailPlus: <TbMailPlus/>,
    }
  return (
    <footer>
      <div>
        {footerApi.map((current, index) => {
          const { icon, title, details } = current;
          return (
            <div key={index}>
              <div>{footerIconObj[icon]}</div>
              <div>
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};
