"use client";
import React, { createContext, useState } from "react";
export const Context = createContext();
const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  
  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  const contextValue = {
    theme,
    toggle,
  };

  return (
    <Context.Provider value={contextValue}>
      <div className={theme}>{children}</div>
    </Context.Provider>
  );
};

export default ContextProvider;