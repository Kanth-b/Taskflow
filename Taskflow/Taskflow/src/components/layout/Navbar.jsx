import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/Themecontext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={darkMode ? "dark" : "light"}>
      <h1>Taskflow</h1>

        <button onClick={toggleTheme} className="dark-button"> {darkMode ? "Light" : "Dark"}</button>
    </nav>
  );
};

export default Navbar;
