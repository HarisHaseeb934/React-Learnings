import aboutCountry from "../api/aboutCountry.json";

export const About = () => {
  return (
    <section className="w-full my-5">
      <h2 className="text-center text-xl font-bold text-[#66BB6A]">
        Here are the Interersting Facts <br /> we're proud of
      </h2>
      <div className="max-w-6xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {aboutCountry.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          return (
            <div className="p-5 border-1 border-[#66BB6A] m-2" key={id}>
              <div className="container">
                <p className="text-center font-bold text-[#66BB6A]">{countryName}</p>
                <p>
                  <span className="font-bold text-green-800">Capital: </span>
                  {capital}
                </p>
                <p>
                  <span className="font-bold text-green-800">Interresting Facts: </span>
                  {interestingFact}
                </p>
                <p>
                  <span className="font-bold text-green-800">Population: </span>
                  {population}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
