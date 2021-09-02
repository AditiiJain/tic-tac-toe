import React, { useContext } from "react";
import ContextTheme from "../context/contextTheme";
import { BsMoon, BsSun } from "react-icons/bs";
import "./themeToggler.css";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ContextTheme);
  const moonStyles = { color: "#f1c40f" };
  const sunStyles = { color: "#f39c12" };
  return (
    <span>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
      />
      <label for="checkbox" className="label">
        <BsSun style={sunStyles} />
        <BsMoon style={moonStyles} />
        <div className="ball"></div>
      </label>
    </span>
  );
};
export default ThemeToggler;
