import { createContext, useContext, useEffect, useState } from "react";

type CountryData = {
  flags: {
    png: string;
  };
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  region: string;
  capital: string;
  population: number;
  subregion: string;
  tld: string[];
  languages: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  borders;
  cca3: string;
};

export const CountryContext = createContext<CountryData[] | null>(null);

export const useCountryContext = () => useContext(CountryContext);
export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState<CountryData[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      setCountry(await res.json());
    };
    fetchData();
  }, []);

  return (
    <CountryContext.Provider value={country}>
      {children}
    </CountryContext.Provider>
  );
};
