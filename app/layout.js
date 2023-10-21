import "./globals.css";
import { Inter } from "next/font/google";
import ContextProvider from "./context/portfolioContext";
import Navigation from "./components/common/Navigation";

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
          {/* <Navigation /> */}
        </ContextProvider>
      </body>
    </html>
  );
}
