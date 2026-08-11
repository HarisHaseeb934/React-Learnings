import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../UI/Loader";
import { getCountryData } from "../../api/axiosInstance";

export const CountryDetails = () => {
  const param = useParams();

  const [country, setCountry] = useState([]);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const countryRes = await getCountryData(param.name);
      setCountry(countryRes.data);
    });
  }, []);

  if (isPending || !country.data?.objects) return <Loader />;
  // console.log()
  return (
    <section className="w-full">
      <div className="max-w-5xl w-full m-auto">
        <div className="flex flex-col justify-center items-center ">
          <img
            src={country.data.objects[0].flag.url_svg || "./images/world.png"}
            alt=""
            className="w-xl"
          />

          <div className="p-5 text-center">
            <p>{country.data.objects[0].names.common}</p>
            <div>
              <p>
                <span>Native Names: </span>
                {Object.values(country.data.objects[0].names.native)
                  .map((arr) => arr.common)
                  .join(",")}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Population: </span>
                {country.data.objects[0].population}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Region: </span>
                {country.data.objects[0].region}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Capital: </span>
                {country.data.objects[0].capitals[0].name}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Currencies: </span>
                {country.data.objects[0].currencies[0].name}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Languages: </span>
                {Object.values(country.data.objects[0].languages[0])
                  .map((lan) => lan)
                  .join(",")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
