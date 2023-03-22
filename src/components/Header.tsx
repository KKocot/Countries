import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";

export const Header = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>();

  useEffect(() => {
    const storage = localStorage.getItem("theme");
    if (storage) {
      if (storage === "dark-theme") {
        document.body.classList.add("dark-theme");
      } else {
        document.body.classList.remove("dark-theme");
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("dark-theme");
    }
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
