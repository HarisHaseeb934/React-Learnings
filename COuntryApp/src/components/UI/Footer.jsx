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
    <footer className="w-full bg-[#66BB6A]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {footerApi.map((current, index) => {
          const { icon, title, details } = current;
          return (
            <div key={index} className="flex flex-col md:flex-row justify-center items-center gap-5 text-center p-3">
              <div className="text-3xl">{footerIconObj[icon]}</div>
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
