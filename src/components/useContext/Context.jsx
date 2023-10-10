import React, { createContext } from "react";

const Context = createContext();
const AppProvider = ({ children }) => {
  const userData = {
    name: "xeeshuu",
    age: 21,
  };
  return <Context.Provider value={userData}>{children}</Context.Provider>;
};

export { Context, AppProvider };
