import Button from "@/app/components/common/Button";
import Marquee from "react-fast-marquee";

const Projects = () => {
  const heading = "My Real World Full Stack Projects.";
  const projectsArr = [
    {
      projectTagsArr: [
        {
          title: "Category",
          tags: ["Personal", "Full-Stack"],
        },
        {
          title: "Main Tech-Stack",
          tags: ["NextJs", "Supabase", "Vercel"],
        },
        {
          title: "Business Industry",
          tags: ["E-commerce", "Jewellery"],
        },
      ],
      projectInfoObj: {
        title: "RAJATAM",
        para: "A D2C E-Commerce Marketplace to Buy Highest Quality 920 Silver Jewellery directly from the Manufacturers.",
        cta1: "Live View",
        cta2: "Source Code",
      },
    },
  ];

  return (
    <section id="projects" className="w-full my-60 flex flex-col gap-6">
      {/* section heading */}
      <Marquee speed={80} autoFill>
        <h2 className="mr-4 text-slate-200/20  text-8xl tracking-tighter font-bold uppercase">
          {heading}
        </h2>
      </Marquee>
      {/* divider */}
      <div className="w-full h-[1px] bg-white/10"></div>
      {/* main content box */}
      {projectsArr.map((project) => {
        return (
          <div className="flex gap-6">
            {/* left box */}
            <div className="w-3/12 flex flex-col gap-6">
              {project.projectTagsArr.map((fields) => {
                return (
                  <div className="flex flex-col gap-1">
                    <p className="self-start text-sm font-medium opacity-60">
                      {fields.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {fields.tags.map((tag) => {
                        return (
                          <p className="text-sm font-medium px-3 py-2 border border-white/10 rounded">
                            {tag}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* center box */}
            <div className="w-5/12 border rounded border-white/10 shadow"></div>
            {/* right box */}
            <div className="w-4/12 p-6 flex flex-col gap-6 rounded bg-1 bg-cover shadow text-[#020617]">
              <div className="flex flex-col gap-2 drop-shadow">
                <h3 className="text-4xl font-bold">
                  {project.projectInfoObj.title}
                </h3>
                <p className="font-medium">{project.projectInfoObj.para}</p>
              </div>
              <div>
                <Button cta={project.projectInfoObj.cta1} />
                <button className="pl-6 font-bold opacity-80">
                  {project.projectInfoObj.cta2}
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* divider */}
      {/* <div className="border border-white/10 shadow-sm"></div> */}
    </section>
  );
};

export default Projects;
