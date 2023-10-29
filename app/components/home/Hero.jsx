import Button from "../common/Button";
import LogoMarquee from "@/app/components/common/LogoMarquee";
import Link from "next/link";

const Hero = () => {
  const heroData = {
    h1: `Hi, I'm Yash.`,
    h3: `A Full Stack Engineer based in India.
    I'm building softwares since 2020. I help startups and businesses build their software solutions.
    I'm also bootstrapping my own startup `,
    span: "BizBuilders.",
  };

  return (
    <section className="w-full mt-32 mb-60 flex flex-col lg:flex-nowrap flex-wrap justify-between items-center gap-6 select-none">
      <div className="p-6 rounded drop-shadow shadow bg-clip-text bg-1 bg-bottom  bg-cover text-center flex flex-col gap-6 items-center">
        <h1 className="text-9xl font-bold tracking-tighter text-transparent">
          {heroData.h1}
        </h1>
        <h3 className="w-1/2 font-medium  text-xl text-transparent">
          {heroData.h3}
          <span className="italic">
            <Link href="/" target="_blank">
              {heroData.span}
            </Link>
          </span>
        </h3>
        <button className="py-3 px-6 bg-slate-200 text-slate-950 font-bold rounded transition-all hover:scale-95 focus:bg-slate-300 shadow-md hover:shadow-sm">
          Book a quick call ›
        </button>
      </div>
      <div className="w-1/2 opacity-60">
        <LogoMarquee speed={80} size={44} />
      </div>
    </section>
  );
};

export default Hero;
