import Image from "next/image";
import Button from "./Button";
import dp from "../assets/heroDP.webp";
import bg from "../assets/bg.webp";
import noise from "../assets/noise.webp";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const dpSize = 550;
  const bgSize = 800;

  return (
    <section className="w-full flex lg:flex-nowrap flex-wrap justify-between items-center gap-6">
      <div className="w-7/12 flex flex-col justify-between gap-6">
        <div className="p-6 flex flex-col justify-between relative">
          <Image
            className="w-full h-full absolute left-0 top-0 border border-white/10 rounded-lg -z-20"
            width={bgSize}
            src={bg}
            alt="bg"
          />
          <Image
            className="w-full h-full absolute left-0 top-0 rounded-lg -z-10 mix-blend-soft-light"
            width={bgSize}
            src={noise}
            alt="bg"
          />
          <div className="flex flex-col gap-6">
            <h1 className="text-7xl text-zinc-900 font-bold tracking-tight">
              Imagine Achieving 10x ROI
              <span className="text-4xl font-bold -tracking-normal"> in Just One Month.</span>
            </h1>
            <h3 className="text-2xl text-zinc-900 font-bold">
              I Craft Digital Experiences that Make it Possible.
            </h3>
            <p className="text-lg text-zinc-900 font-medium">
              Your Business, My Commitment. When we collaborate, your business's
              success becomes my priority. And I deliver f* exceptional RESULTS.
            </p>
            <div className="">
              <Button cta="Claim your FREE 30min Consultation ›" />
              <button className="pl-6 text-zinc-900 font-bold">
                Discover My Profit-Boosting Strategy
              </button>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-lg bg-white/10 border border-white/10 backdrop-blur-xl">
          <Marquee
            className="rounded-lg"
            autoFill
            speed={80}
            gradient
            gradientColor={[50, 50, 50]}
            gradientWidth={100}
          >
            <div className="w-16 h-16 ml-6 border rounded-lg border-white/10 bg-white/10"></div>
          </Marquee>
        </div>
      </div>
      <div className="w-5/12 relative">
        <Image
          className="border border-white/10 rounded-lg shadow-md"
          src={dp}
          alt="Yash Dhakad DP"
          height={dpSize}
        />
        <Image
          className="rounded-lg absolute top-0 blur-xl -z-10"
          src={dp}
          alt="Yash Dhakad DP"
          height={dpSize}
        />
        <Image
          className="rounded-lg absolute top-0 blur-3xl -z-10"
          src={dp}
          alt="Yash Dhakad DP"
          height={dpSize}
        />
      </div>
    </section>
  );
};

export default Hero;
