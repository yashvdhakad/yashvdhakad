"use client";

import { useContext } from "react";
import { PortfolioContext } from "./context/portfolioContext";
import Banner from "./components/common/Banner";
import Hero from "./components/home/Hero";
import Stats from "./components/home/Stats";
import Services from "./components/home/Services";
import Projects from "./components/home/Projects";
import USP from "./components/home/USP";

export default function Home() {
  const cta = "Buzz Build Boom⚡";
  const { user } = useContext(PortfolioContext);

  return (
    <section className="max-w-screen-xl m-auto">
      {/* <Banner cta={cta} /> */}
      <Hero />
      {/* <Stats /> */}
      {/* <Services /> */}
      <Projects />
      {/* <USP /> */}
    </section>
  );
}
