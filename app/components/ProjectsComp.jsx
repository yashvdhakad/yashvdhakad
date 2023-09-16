import Button from "@/app/components/Button";

const ProjectsComp = () => {
  return (
    <section className="w-full my-60 flex flex-col gap-6">
      <h3 className="text-2xl font-bold opacity-40">
        Some of My Full Stack Projects.
      </h3>
      <div className="border border-white/10 shadow-sm"></div>
      <div className="flex gap-6">
        <div className="w-3/12 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="self-start text-sm font-medium opacity-60">
              Category
            </p>
            <p className="text-sm font-medium px-3 py-2 self-start bg-white/10 border border-white/10 rounded-lg">
              Full Stack from Scratch
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="self-start text-sm font-medium opacity-60">
              Tools/Tech Stack
            </p>
            <div className="flex gap-2">
              <p className="text-sm font-medium px-3 py-2 bg-white/10 border border-white/10 rounded-lg">
                Figma
              </p>
              <p className="text-sm font-medium px-3 py-2 bg-white/10 border border-white/10 rounded-lg">
                Vercel
              </p>
              <p className="text-sm font-medium px-3 py-2 bg-white/10 border border-white/10 rounded-lg">
                Appwrite
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="self-start text-sm font-medium opacity-60
            ">
              Duration
            </p>
            <p className="text-sm font-medium px-3 py-2 self-start bg-white/10 border border-white/10 rounded-lg">
              Full Stack from Scratch
            </p>
          </div>
        </div>
        <div className="w-5/12 border rounded-lg border-white/10 bg-white/10 backdrop-blur-xl shadow"></div>
        <div className="w-4/12 p-6 flex flex-col gap-6 border border-white/10 rounded-lg bg-white/10 backdrop-blur-xl shadow">
          <div className="flex flex-col gap-2 drop-shadow">
            <h3 className="text-4xl font-bold">E-Commerce Platform - SWARNA</h3>
            <p>
              A D2C Marketplace to Buy & Sell Imitation Jewellery of various
              metals and 920 Silver Jewellery directly from the Manufacturers.
            </p>
          </div>
          <div>
            <Button cta="Live View" />
            <button className="pl-6 font-bold opacity-80">Source Code</button>
          </div>
        </div>
      </div>
      <div className="border border-white/10 shadow-sm"></div>
    </section>
  );
};

export default ProjectsComp;
