import React, { createContext } from "react";

const Context = createContext();
const AppProvider = ({ children }) => {
  const userData = {
    name: "IftiMainia",
    age: 40,
  };
  return <Context.Provider value={userData}>{children}</Context.Provider>;
};

export { Context, AppProvider };
