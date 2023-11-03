import LogoMarquee from "@/app/components/common/LogoMarquee";
import Link from "next/link";
import Image from "next/image";
import DP from "@/app/assets/dp.png";

const Hero = () => {
  const heroData = {
    h0: "Hi, I'm Yash Dhakad.",
    h1: `Build Buzz Boom`,
    h3: `A Full Stack Engineer based in India.
    I'm building softwares since 2020. I help startups and businesses build their software solutions.
    I'm also bootstrapping my own startup `,
    span: "SHYENS LABS.",
  };

  return (
    <section className="w-full mt-32 mb-60 flex flex-col lg:flex-nowrap flex-wrap justify-between items-center gap-6 select-none">
      <div className="p-6 rounded drop-shadow bg-clip-text bg-1 bg-bottom  bg-cover text-center flex flex-col gap-6 items-center">
        <h2 className="font-medium text-4xl text-transparent">{heroData.h0}</h2>
        <h1 className="text-9xl font-bold tracking-tighter text-transparent">
          {heroData.h1}
        </h1>
        <h3 className="w-1/2 font-medium text-xl text-transparent">
          {heroData.h3}
          <span className="italic">
            <Link href="https://shyens.com" target="_blank">
              {heroData.span}
            </Link>
          </span>
        </h3>
        <button className="py-3 px-6 bg-orange-600 font-bold rounded transition-all hover:bg-orange-700 hover:scale-95 focus:bg-orange-500 shadow-md hover:shadow-sm cursor-grab focus:cursor-grabbing">
          Book a FREE Discovery Call ›
        </button>
      </div>
      {/* divider */}
      <div className="w-full h-[1px] bg-white/10"></div>
      <div className="w-full flex justify-center items-center gap-6">
        <p className="text-sm opacity-60">Tech-Stack:</p>
        <div className="w-1/2 opacity-60">
          <LogoMarquee speed={80} size={44} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
