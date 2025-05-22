// src/providers/ThemeProvider.jsx
import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
     if(e.target.checked){
      setTheme("dark");
     }else{
      setTheme("light");
     }
  };

  const ThemeData = {
    handleToggle
  }

  return (
    <ThemeContext.Provider value={ThemeData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
