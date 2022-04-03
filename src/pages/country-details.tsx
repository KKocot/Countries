import { Link, useParams } from "react-router-dom";
import { useCountryContext } from "../components/elements/context";

export const CountryPageDetails = () => {
  const { countryName } = useParams();
  const countres = useCountryContext();
  if (!countres) {
    return <>Loading</>;
  }
  const country = countres.find((c) => c.name.common === countryName);
  const getBorderCountr = (countryCca3) =>
    countres.find((c) => c.cca3 === countryCca3);

  console.log(country);

  return (
    <>
      <div className="main_country_details">
        <Link to="/">
          <div className="back_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 48 48"
            >
              <path fill="none" d="M0 0h48v48h-48z" />
              <path d="M40 22h-24.34l11.17-11.17-2.83-2.83-16 16 16 16 2.83-2.83-11.17-11.17h24.34v-4z" />
            </svg>
            Back
          </div>
        </Link>
        <div className="main_container">
          <img src={country.flags.png} alt="flag_details" className="flag" />
          <div className="content_container">
            <h1> {countryName}</h1>
            <div className="details_container">
              <div>
                <span>Native Name: </span>
                {Object.values(country.name.nativeName)[0]?.common}
              </div>
              <div>
                <span>Population: </span>
                {country.population}
              </div>
              <div>
                <span>Region: </span>
                {country.region}
              </div>
              <div>
                <span>Sub Region: </span>
                {country.subregion}
              </div>
              <div>
                <span>Capital: </span>
                {country.capital}
              </div>
              <div>
                <span>Top Level Domain: </span>
                {country.tld}
              </div>
              <div>
                <span>Currencies: </span>
                {Object.values(country.currencies)[0]?.name}
              </div>
              <div>
                <span>Languages: </span>
                {country.languages === undefined
                  ? " No languages found"
                  : Object.values(country.languages).join(", ")}
              </div>
            </div>
            <div className="border_container">
              <span>Border Counties: </span>
              <div className="borders">
                {country.borders?.map((e) => (
                  <Link
                    key={e}
                    to={`/CountryPageDetails/${getBorderCountr(e).name.common}`}
                    className="border_box"
                  >
                    {getBorderCountr(e).name.common}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
