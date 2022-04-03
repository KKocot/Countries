import Select from "react-select";
import { Input } from "./elements/Input";
import { FaSearch } from "react-icons/fa";

const options = [
  { value: "", label: "All" },
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

export const Filter = ({ onSearchChange, onRegionChange }) => {
  return (
    <nav>
      <div className="search">
        <FaSearch className="img" />
        <Input
          placeholder="Search for a country..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <Select
        className="select"
        placeholder="Filter by Region"
        options={options}
        onChange={(e) => onRegionChange(e.value)}
      />
    </nav>
  );
};
