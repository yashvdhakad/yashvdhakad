"use client";

import { useContext } from "react";
import { PortfolioContext } from "./context/portfolioContext";
import Banner1 from "./components/common/Banner1";
import Hero from "./components/home/Hero";
import Stats from "./components/home/Stats";
import Services from "./components/home/Services";
import Projects from "./components/home/Projects";

export default function Home() {
  const cta = "🦅 Join Us now to 10X your ROI within A Month. Cheers!";
  const { user } = useContext(PortfolioContext);

  return (
    <section className="max-w-screen-xl m-auto">
      <Banner1 cta={cta} />
      <Hero />
      <Stats />
      <Services />
      <Projects />
    </section>
  );
}
