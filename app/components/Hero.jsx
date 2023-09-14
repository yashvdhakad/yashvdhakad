import Image from "next/image";
import Button from "./Button";
import dp from "../assets/heroDP.webp";
import bg from "../assets/bg.webp";

const Hero = () => {
  const dpSize = 1000;

  return (
    <section className="w-full flex justify-between items-center">
      <div className="w-2/3 h-full p-6 flex flex-col justify-between bg-hero bg-no-repeat bg-cover bg-center bg-fixed border border-white/10 rounded-lg">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-bold">
            Imagine Achieving 10x ROI{" "}
            <span className="text-4xl font-bold">in Just One Month.</span>
          </h1>
          <h3 className="text-2xl font-bold">
            I Craft Digital Experiences that Make it Possible.
          </h3>
          <p className="text-lg">
            Your Business, My Commitment. When we collaborate, your business's
            success becomes my priority. And I deliver f* exceptional RESULTS.
          </p>
          <div className="">
            <Button cta="Claim your FREE 30min Consultation ›" />
            <Button cta="Discover My Profit-Boosting Strategy" />
          </div>
        </div>
        <div>Tech Stack</div>
      </div>
      <div className="w-1/3 relative">
        <Image
          className="border border-white/10 rounded-lg shadow-md"
          src={dp}
          alt="Yash Dhakad DP"
          width={dpSize}
          height={dpSize}
        />
        <Image
          className="rounded-lg absolute top-0 blur-xl -z-10"
          src={dp}
          alt="Yash Dhakad DP"
          width={dpSize}
          height={dpSize}
        />
        <Image
          className="rounded-lg absolute top-0 blur-3xl -z-10"
          src={dp}
          alt="Yash Dhakad DP"
          width={dpSize}
          height={dpSize}
        />
      </div>
    </section>
  );
};

export default Hero;
