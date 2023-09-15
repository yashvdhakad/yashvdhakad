"use client";

import { useContext } from "react";
import { PortfolioContext } from "./context/portfolioContext";
import Banner1 from "./components/Banner1";
import Hero from "./components/Hero";

export default function Home() {
  const { user } = useContext(PortfolioContext);

  return (
    <section className="max-w-screen-xl m-auto">
      <Banner1 cta="🦅 Helping businesses create profitable web experiences through persuasive copy, user-centric design, and innovative tech. Join me now to 10X your ROI within a short period of time. Cheers!" />
      <Hero />
    </section>
  );
}
