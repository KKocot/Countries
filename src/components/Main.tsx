import { useEffect, useState } from "react";

export const Main = () => {
  type CountryData = {
    flags: {
      png: string;
    };
    name: {
      common: string;
    };
    region: string;
    capital: string;
    population: number;
  };
  const [country, setCountry] = useState<CountryData[]>();
  const [fetchSite, setfetchSite] = useState(
    `https://restcountries.com/v3.1/all`
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(fetchSite);
      setCountry(await res.json());
    };
    fetchData();
  }, [fetchSite]);
  if (!country) {
    return <>Loading</>;
  }

  console.log(country[0]);
  return (
    <main>
      <ul>
        {country.map((country) => (
          <div className="card">
            <img alt="flag" src={country.flags.png} className="flag" />
            <div className="card_content">
              <h3>{country.name.common}</h3>
              <div>
                <span>Population: </span>
                <span>{country.population}</span>
              </div>
              <div>
                <span>Region: </span>
                <span>{country.region}</span>
              </div>
              <div>
                <span>Capital: </span>
                <span>{country.capital}</span>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </main>
  );
};
