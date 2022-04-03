import { useState } from "react";
import { Link } from "react-router-dom";
import { useCountryContext } from "./elements/context";
import { Filter } from "./Filter";

export const Main = () => {
  const [filters, setFilters] = useState({ search: "", region: "" });
  const countres = useCountryContext();

  if (!countres) {
    return <>Loading</>;
  }
  const filtredCountries = countres.filter((value) => {
    const searchWord = filters.search.toLowerCase();
    const countryName = value.name.common.toLowerCase();
    if (
      countryName.includes(searchWord) &&
      (!filters.region || filters.region === value.region)
    ) {
      return true;
    }
    return false;
  });

  console.log(countres);
  return (
    <main>
      <Filter
        onRegionChange={(value) => {
          setFilters((prevFilters) => ({
            ...prevFilters,
            region: value,
          }));
        }}
        onSearchChange={(value) => {
          setFilters((prevFilters) => ({
            ...prevFilters,
            search: value,
          }));
        }}
      />
      <ul>
        {filtredCountries.map((country) => (
          <div className="card" key={country.name.common}>
            <Link to={`/CountryPageDetails/${country.name.common}`}>
              <img alt="flag" src={country.flags.png} className="flag" />
            </Link>
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
