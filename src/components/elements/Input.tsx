import { FaSearch } from "react-icons/fa";

export const Input = () => {
  // const [search, setSeatch] = useState("");
  // const handleFilter = (country) => {
  //   const searchCountry = country.name.common
  //     .toLowCase()
  //     .includes(search.toLowerCase());
  //   return searchCountry;
  return (
    <div className="search">
      <FaSearch className="img" />
      <input placeholder="Search for a country..." />
    </div>
  );
};
