import Image from "next/image";
import Button from "../common/Button";
import dp from "../../assets/heroDP.webp";
import LogoMarquee from "@/app/components/common/LogoMarquee";

const Hero = () => {
  const dpSize = 400;
  const heroData = {
    h1a: "Imagine Achieving 10x ROI in ",
    h1b: "Just 30 Days.",
    h3: "I'm Yash and I Craft Digital Experiences that make it Possible.",
  };

  return (
    <section className="w-full mt-36 mb-60 flex flex-row lg:flex-nowrap flex-wrap justify-between items-center gap-6 select-none">
      {/* text and marquee */}
      <div className="w-8/12 flex flex-col gap-6">
        <div className="p-6 flex flex-col gap-6 border border-white/10 rounded-lg drop-shadow shadow bg-main bg-cover">
          <h1 className="text-7xl font-semibold tracking-tighter">
            {heroData.h1a}
            <span className="font-normal italic">{heroData.h1b}</span>
          </h1>
          <h3 className="text-2xl font-semibold">{heroData.h3}</h3>
          <Button cta="Book A Quick Call" />
        </div>
        <LogoMarquee speed={40} />
      </div>
      {/* dp */}
      <div className="relative -scale-x-100">
        <Image
          className="w-full border border-white/10 rounded-lg shadow-lg"
          src={dp}
          alt="Yash Dhakad DP"
          height={dpSize}
        />
        <Image
          className="w-full rounded-lg absolute top-0 blur-xl -z-10"
          src={dp}
          alt="Yash Dhakad DP"
          height={dpSize}
        />
        <Image
          className="w-full rounded-lg absolute top-0 blur-3xl -z-10"
          src={dp}
          alt="Yash Dhakad DP"
          height={dpSize}
        />
      </div>
    </section>
  );
};

export default Hero;
