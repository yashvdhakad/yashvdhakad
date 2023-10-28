import Image from "next/image";
import Button from "../common/Button";
import dp from "../../assets/heroDP.webp";
import LogoMarquee from "@/app/components/common/LogoMarquee";

const Hero = () => {
  const dpSize = 400;
  const heroData = {
    h1: `Hi, it's Yash & I'm a Full-Stack Web Developer.`,
  };

  return (
    <section className="w-full mt-20 mb-60 flex flex-col lg:flex-nowrap flex-wrap justify-between items-center gap-6 select-none">
      <div className="p-6 rounded drop-shadow shadow bg-clip-text bg-1 bg-cover text-center">
        <h1 className="text-9xl font-semibold tracking-tighter text-transparent">
          {heroData.h1}
        </h1>
      </div>
      <div className="w-full">
        <LogoMarquee speed={40} />
      </div>
    </section>
  );
};

export default Hero;
