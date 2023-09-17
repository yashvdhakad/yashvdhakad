import LogoMarquee from "../common/LogoMarquee";

const Stats = () => {
  const statsArr = [
    {
      h1: "3yr+",
      h4: "Industry Experience",
      p: "I’ve spent a majority of my time in software development industry in variety of markets.",
    },
    {
      h1: "98%",
      h4: "Clients Satisfaction Rate",
      p: "My top-most priority is to give you tangible results and my client satisfaction rate is showing that.",
    },
    {
      h1: "10+",
      h4: "Projects Completed",
      p: "I’ve worked upon intense and large projects in many fields which made me an expert.",
    },
    {
      h1: "4+",
      h4: "Clients Served",
      p: "All clients are working from the beginning and will keep working.",
    },
    {
      h1: "400%",
      h4: "At least Increment in ROI",
      p: "I’ve given almost 4x Return on Investment to my clients comparing their previous ROI stats.",
    },
  ];

  return (
    <section className="w-full my-60 flex flex-col">
      <div className="p-6 flex justify-between border rounded-lg rounded-b-2xl border-white/10 bg-white/10 backdrop-blur-xl shadow">
        {statsArr.map((stat) => {
          return (
            <div className="flex flex-col items-center gap-2 drop-shadow">
              <h1 className="text-7xl font-semibold">{stat.h1}</h1>
              <div className="flex flex-col items-center text-center">
                <h4 className="text-lg font-semibold">{stat.h4}</h4>
                <p className="px-4 text-xs">{stat.p}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-6 flex flex-col gap-6 border rounded-lg rounded-t-2xl border-white/10 bg-white/10 backdrop-blur-xl shadow">
        <LogoMarquee speed={20} />
        <LogoMarquee speed={20} direction="right" />
      </div>
    </section>
  );
};

export default Stats;
