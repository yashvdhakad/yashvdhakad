"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import ContextProvider from "./context/portfolioContext";
import AnimatedCursor from "react-animated-cursor";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yash Dhakad",
  description:
    "🦅 Helping businesses create profitable web experiences through persuasive copy, user-centric design, and innovative tech.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          {children}
          <Navigation />
          <AnimatedCursor
            innerSize={8}
            outerSize={40}
            innerScale={1}
            outerScale={1.6}
            outerAlpha={0}
            outerStyle={{
              mixBlendMode: "difference",
              backgroundColor: "#18181b",
            }}
            innerStyle={{
              backgroundColor: "#18181b",
            }}
          />
        </ContextProvider>
      </body>
    </html>
  );
}
