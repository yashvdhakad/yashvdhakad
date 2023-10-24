import Button from "@/app/components/common/Button";

const Projects = () => {
  const heading = "Some of My Full Stack Projects.";
  const projectsArr = [
    {
      projectTagsArr: [
        {
          title: "Category",
          tags: ["Full Stack"],
        },
        {
          title: "Tools/Tech-Stack",
          tags: ["Figma", "NextJs", "Appwrite"],
        },
        {
          title: "Duration",
          tags: ["2 weeks"],
        },
      ],
      projectInfoObj: {
        title: "E-Commerce Platform - RAJATAM",
        para: "A D2C Marketplace to Buy & Sell Imitation Jewellery of various metals and 920 Silver Jewellery directly from the Manufacturers.",
        cta1: "Live View",
        cta2: "Source Code",
      },
    },
    {
      projectTagsArr: [
        {
          title: "Category",
          tags: ["Full Stack"],
        },
        {
          title: "Tools/Tech-Stack",
          tags: ["Figma", "NextJs", "Appwrite"],
        },
        {
          title: "Duration",
          tags: ["2 weeks"],
        },
      ],
      projectInfoObj: {
        title: "E-Commerce Platform - SWARNA",
        para: "A D2C Marketplace to Buy & Sell Imitation Jewellery of various metals and 920 Silver Jewellery directly from the Manufacturers.",
        cta1: "Live View",
        cta2: "Source Code",
      },
    },
    {
      projectTagsArr: [
        {
          title: "Category",
          tags: ["Full Stack"],
        },
        {
          title: "Tools/Tech-Stack",
          tags: ["Figma", "NextJs", "Appwrite"],
        },
        {
          title: "Duration",
          tags: ["2 weeks"],
        },
      ],
      projectInfoObj: {
        title: "E-Commerce Platform - SWARNA",
        para: "A D2C Marketplace to Buy & Sell Imitation Jewellery of various metals and 920 Silver Jewellery directly from the Manufacturers.",
        cta1: "Live View",
        cta2: "Source Code",
      },
    },
    {
      projectTagsArr: [
        {
          title: "Category",
          tags: ["Full Stack"],
        },
        {
          title: "Tools/Tech-Stack",
          tags: ["Figma", "NextJs", "Appwrite"],
        },
        {
          title: "Duration",
          tags: ["2 weeks"],
        },
      ],
      projectInfoObj: {
        title: "E-Commerce Platform - SWARNA",
        para: "A D2C Marketplace to Buy & Sell Imitation Jewellery of various metals and 920 Silver Jewellery directly from the Manufacturers.",
        cta1: "Live View",
        cta2: "Source Code",
      },
    },
    {
      projectTagsArr: [
        {
          title: "Category",
          tags: ["Full Stack"],
        },
        {
          title: "Tools/Tech-Stack",
          tags: ["Figma", "NextJs", "Appwrite"],
        },
        {
          title: "Duration",
          tags: ["2 weeks"],
        },
      ],
      projectInfoObj: {
        title: "E-Commerce Platform - SWARNA",
        para: "A D2C Marketplace to Buy & Sell Imitation Jewellery of various metals and 920 Silver Jewellery directly from the Manufacturers.",
        cta1: "Live View",
        cta2: "Source Code",
      },
    },
  ];

  return (
    <section className="w-full my-60 flex flex-col gap-6">
      {/* section heading */}
      <h3 className="text-2xl font-bold opacity-40">{heading}</h3>
      {/* divider */}
      <div className="border border-white/10 shadow-sm"></div>
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
                          <p className="text-sm font-medium px-3 py-2 bg-white/10 border border-white/10 rounded-lg">
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
            <div className="w-5/12 border rounded-lg border-white/10 bg-white/10 backdrop-blur-xl shadow"></div>
            {/* right box */}
            <div className="w-4/12 p-6 flex flex-col gap-6 border border-white/10 rounded-lg bg-main bg-cover  shadow">
              <div className="flex flex-col gap-2 drop-shadow">
                <h3 className="text-4xl font-bold">
                  {project.projectInfoObj.title}
                </h3>
                <p>{project.projectInfoObj.para}</p>
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
