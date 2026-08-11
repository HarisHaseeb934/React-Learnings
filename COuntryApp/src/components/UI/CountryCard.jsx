import {NavLink}  from "react-router-dom"

export const CountryCard = ({ names, capitals, flag, region, population }) => {
  // console.log(region);
  return (
      <li className="w-sm p-3 flex flex-col justify-center items-center">
        <div>
          <img src={flag.url_svg || `./images/world.png`} alt="not found" className="w-full aspect-[3/2]"/>

          <div>
            <p>{names.common}</p>
            <p>
              <span>Capital: </span>
              {capitals[0]?.name}
            </p>
            <p>
              <span>Region: </span>
              {region}
            </p>

            <NavLink to={`/country/${names.common}`}>
              <button className="bg-[#66BB6A] text-white p-3">Read More</button>
            </NavLink>
          </div>
        </div>
      </li>
  );
};
