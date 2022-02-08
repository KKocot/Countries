import { useState } from "react";
import Select from "react-select";
import { Input } from "./elements/Input";

export const Nav = () => {
  const options = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  return (
    <nav>
      <Input />
      <Select
        className="select"
        placeholder="Filter by Region"
        options={options}
      />
    </nav>
  );
};
