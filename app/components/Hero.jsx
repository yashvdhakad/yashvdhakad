import Image from "next/image";
import Button from "./Button";
import dp from "../assets/heroDP.webp";

const Hero = () => {
  const dpSize = 500;

  return (
    <section className="w-full flex justify-between items-center border border-red-600">
      <div className="h-full flex flex-col justify-between border border-blue-500">
        <div>
          <h1>Imagine Achieving 10x ROI <span>in Just One Month.</span></h1>
          <h3>I Craft Digital Experiences that Make it Possible.</h3>
          <p>
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
      <div className="relative">
        <Image
          className="border border-white/10 rounded-lg"
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
