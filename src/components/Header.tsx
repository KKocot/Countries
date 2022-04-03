import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";

export const Header = () => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("theme") === "dark-theme" ? true : false
  );

  useEffect(() => {
    localStorage.getItem("theme") === "dark-theme"
      ? document.body.classList.add("dark-theme")
      : document.body.classList.remove("dark-theme");
  }, [darkTheme]);

  const handleTheme = () => {
    setDarkTheme((pre) => !pre);
    !darkTheme
      ? localStorage.setItem("theme", "dark-theme")
      : localStorage.setItem("theme", "off");
  };
  return (
    <header>
      <h3>Where in the world?</h3>
      <div className="darkModeBtn" onClick={handleTheme}>
        <h5>
          <FaRegMoon />
          Dark Mode
        </h5>
      </div>
    </header>
  );
};
