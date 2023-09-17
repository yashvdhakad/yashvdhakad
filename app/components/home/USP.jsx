import Link from "next/link";

const USP = () => {
  return (
    <section className="w-full my-60 grid grid-cols-3 gap-6">
      <div className="p-6 bg-white/10 backdrop-blur-xl border rounded-lg border-white/10 flex flex-col gap-6 scale-90">
        <div className="h-60 bg-white/10 border rounded-lg border-white/10 "></div>
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl font-bold">
            360º Solutions for your every need.
          </h3>
          <p>
            I’ve spent a majority of my time in software development industry in
            variety of markets.
          </p>
          <Link className="font-semibold" href="/">
            Learn More ›
          </Link>
        </div>
      </div>
      <div className="p-6 bg-white/10 backdrop-blur-xl border rounded-lg border-white/10 flex flex-col gap-6 scale-110 ">
        <div className="h-60 bg-white/10 border rounded-lg border-white/10 "></div>
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl font-bold">
            360º Solutions for your every need.
          </h3>
          <p>
            I’ve spent a majority of my time in software development industry in
            variety of markets.
          </p>
          <Link className="font-semibold" href="/">
            Learn More ›
          </Link>
        </div>
      </div>
      <div className="p-6 bg-white/10 backdrop-blur-xl border rounded-lg border-white/10 flex flex-col gap-6 scale-90 ">
        <div className="h-60 bg-white/10 border rounded-lg border-white/10 "></div>
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl font-bold">
            360º Solutions for your every need.
          </h3>
          <p>
            I’ve spent a majority of my time in software development industry in
            variety of markets.
          </p>
          <Link className="font-semibold" href="/">
            Learn More ›
          </Link>
        </div>
      </div>
    </section>
  );
};

export default USP;
