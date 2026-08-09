import aboutCountry from "../api/aboutCountry.json";

export const About = () => {
  return (
    <section>
      <h2>
        Here are the Interersting Facts <br /> we're proud of
      </h2>
      <div className="gradient-cards">
        {aboutCountry.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          return (
            <div className="card" key={id}>
              <div className="container">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital: </span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Interresting Facts: </span>
                  {interestingFact}
                </p>
                <p>
                  <span className="card-description">Population: </span>
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
