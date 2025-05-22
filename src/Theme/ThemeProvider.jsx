// src/providers/ThemeProvider.jsx
import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    const theme = isDark ? "dark" : "light";
    root.classList.toggle("dark", isDark);
    root.setAttribute("data-theme", isDark ? "mydark" : "mylight");
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
