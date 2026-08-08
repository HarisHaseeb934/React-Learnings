import countryData from "../api/countryData.json";

export const About = () => {
  return (
    <section>
      <h2>
        Here are the interesting Facts
        <br />
        we're proud of
      </h2>
      <div>{
            countryData.map((country) => {
                const {id, countryName, capital, population, interestingFact} = country;
                return(
                    <div key={id}>
                        <div>
                            <p>{countryName}</p>
                            <p><span>Capital: </span>{capital}</p>
                            <p><span>Population: </span>{population}</p>
                            <p><span>Interesting Facts: </span>{interestingFact}</p>
                        </div>
                    </div>
                )
            })
        }</div>
    </section>
  );
};
