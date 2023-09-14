"use client";

import React, { useContext } from "react";
import { PortfolioContext } from "./context/portfolioContext";
import AnimatedCursor from "react-animated-cursor";
import Banner1 from "./components/Banner1";
import Hero from "./components/Hero";

export default function Home() {
  const { user } = useContext(PortfolioContext);

  return (
    <section className="max-w-screen-xl h-screen m-auto flex flex-col justify-center items-center">
      <AnimatedCursor
        innerSize={8}
        outerSize={40}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        outerStyle={{
          mixBlendMode: "difference",
          backgroundColor: "#e4e4e7",
        }}
        innerStyle={{
          backgroundColor: "#e4e4e7",
        }}
      />
      <Banner1 cta="🦅 Helping businesses create profitable web experiences through persuasive copy, user-centric design, and innovative tech. Join me now to 10X your ROI within a short period of time. Cheers!" />
      <Hero />
    </section>
  );
}
