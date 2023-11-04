import LogoMarquee from "@/app/components/common/LogoMarquee";
import Link from "next/link";
import Image from "next/image";
import DP from "@/app/assets/dp.png";

const Hero = () => {
  const heroData = {
    h0: "Hi, I'm Yash Dhakad.",
    h1: "Full-Stack BizBuilder",
    h3: `A Full Stack Engineer based in India.
    I'm building softwares since 2020. I help startups and businesses build their software solutions.
    I'm also bootstrapping my own startup `,
    span: "BizBuilders.",
  };

  return (
    <section className="w-full mt-32 mb-60 flex flex-col gap-6 select-none relative">
      <div className="p-6 rounded drop-shadow bg-clip-text bg-1 bg-bottom bg-cover flex flex-col gap-6">
        <h2 className="font-medium text-2xl text-transparent">{heroData.h0}</h2>
        <h1 className="text-8xl font-bold tracking-tighter text-transparent">
          {heroData.h1}
        </h1>
        <h3 className="w-1/2 font-medium text-lg text-transparent">
          {heroData.h3}
          <span className="italic">
            <Link href="https://bizbuilders.vercel.app" target="_blank">
              {heroData.span}
            </Link>
          </span>
        </h3>
        <button className="w-fit py-3 px-6 bg-orange-600 font-semibold rounded transition-all hover:bg-orange-700 hover:scale-95 focus:bg-orange-500 shadow-md hover:shadow-sm cursor-grab focus:cursor-grabbing">
          Book a FREE Discovery Call ›
        </button>
      </div>
      <Image
        className="absolute bottom-0 right-0 z-10 saturate-150"
        src={DP}
        width={480}
        alt="Yash's Profile Picture"
      />
      <div className="w-full h-[1px] bg-white/10"></div>
      <div className="opacity-60">
        <LogoMarquee color="#e2e8f0" speed={80} size={50} />
      </div>
      <div className="w-full h-[1px] bg-white/10"></div>
    </section>
  );
};

export default Hero;
