import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";

export const Header = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>();

  useEffect(() => {
    const storage = localStorage.getItem("theme");
    const remove = () => document.body.classList.remove("dark-theme");
    const add = () => document.body.classList.add("dark-theme");
    if (storage) {
      if (storage === "dark-theme") {
        add();
      } else {
        remove();
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      add();
    } else add();
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
