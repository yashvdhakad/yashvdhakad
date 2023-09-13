"use client";

import React, { useContext } from "react";
import { PortfolioContext } from "./context/portfolioContext";

export default function Home() {
  const { user } = useContext(PortfolioContext);

  return (
    <>
      🚧 Website's Under Construction. 🚧
      <br />
      Will be Live on 20/09/2023.
      {user}
    </>
  );
}
