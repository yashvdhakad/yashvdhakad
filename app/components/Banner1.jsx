import { Oswald } from "next/font/google";
import Marquee from "react-fast-marquee";

const oswald = Oswald({ subsets: ["latin"] });

const BannerMini = ({ cta }) => {
  return (
    <section className={oswald.className}>
      <div className="w-full fixed top-0 left-0 p-1 bg-white/10 backdrop-blur-xl italic uppercase tracking-wide border-b border-white/10 z-10 select-none">
        <Marquee speed={80}>
          {cta}
        </Marquee>
      </div>
    </section>
  );
};

export default BannerMini;
