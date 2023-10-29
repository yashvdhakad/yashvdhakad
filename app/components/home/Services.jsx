import Link from "next/link";
import Marquee from "react-fast-marquee";

const Services = () => {
  const servicesArr = [
    {
      h5: "Dynamic Websites",
      p: "This is going to be some text about this sub-section.",
      cta: "Learn More ›",
    },
    {
      h5: "Converting Landing Pages",
      p: "This is going to be some text about this sub-section.",
      cta: "Learn More ›",
    },
    {
      h5: "Web Applications",
      p: "This is going to be some text about this sub-section.",
      cta: "Learn More ›",
    },
    {
      h5: "Mobile Applications",
      p: "This is going to be some text about this sub-section.",
      cta: "Learn More ›",
    },
    {
      h5: "Desktop Applications",
      p: "This is going to be some text about this sub-section.",
      cta: "Learn More ›",
    },
    {
      h5: "Shopify/Zoho Store",
      p: "This is going to be some text about this sub-section.",
      cta: "Learn More ›",
    },
    {
      h5: "Wordpress Websites",
      p: "This is going to be some text about this sub-section.",
      cta: "Learn More ›",
    },
  ];

  return (
    <section className="w-full my-60 p-10 flex flex-col gap-10 rounded text-[#020617] bg-1 bg-cover shadow">
      <div className="flex flex-col gap-6 drop-shadow">
        <h2 className="w-10/12 text-6xl font-bold">
          I Craft Digital Experiences that{" "}
          <span className="font-normal italic">Create IMPACT.</span>
        </h2>
        <p className="text-xl font-medium">
          I craft dynamic websites, captivating landing pages, innovative web
          applications, and seamless mobile applications that seamlessly align
          with your organization's objectives.
        </p>
      </div>

      <div>
        <Marquee className="rounded" speed={80} pauseOnHover>
          {servicesArr.map((service) => {
            return (
              <div className="ml-10 pr-6 flex items-center gap-6 border rounded border-white/10 bg-white/20 shadow">
                <div className="w-28 h-28 border rounded border-white/10 bg-white/10"></div>
                <div className="flex flex-col gap-1 drop-shadow">
                  <h5 className="text-xl font-bold">{service.h5}</h5>
                  <p className="w-60 text-xs">{service.p}</p>
                  <Link href="/" className="text-xs font-medium">
                    {service.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default Services;
