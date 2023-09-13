"use client";

import { createContext } from "react";

export const PortfolioContext = createContext();

const ContextProvider = ({ children }) => {
  let user = "Yash";

  return (
    <PortfolioContext.Provider value={{ user }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default ContextProvider;
