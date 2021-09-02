import React, { useContext } from "react";
import ContextTheme from "../context/contextTheme";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ContextTheme);
  return (
    <div
      style={{ border: "2px solid black" }}
      onClick={() => {
        setThemeMode( themeMode=== "light" ? "dark" : "light")
      }}
    >
      <span>{themeMode === "light" ? "turn off" : "lights turn on"}</span>
    </div>
  );
};
export default ThemeToggler;
