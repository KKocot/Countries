import { FaSearch } from "react-icons/fa";

export const Nav = () => {
  return (
    <nav>
      <div className="search">
        <FaSearch className="img" />
        <input placeholder="Search for a country..." />
      </div>
      <select id="filterByRegion">
        <option value="filterByRegion">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </nav>
  );
};
