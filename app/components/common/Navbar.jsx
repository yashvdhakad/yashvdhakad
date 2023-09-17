import Link from "next/link";

const Navbar = () => {
  const navArr = [
    { name: "/", url: "/" },
    { name: "Copywriting", url: "/copywriting" },
    { name: "Design", url: "/design" },
    { name: "Development", url: "/development" },
    { name: "Clients", url: "/clients" },
    { name: "Projects", url: "/projects" },
    { name: "Case Studies", url: "/case-studies" },
    { name: "Store", url: "/store" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <nav className="flex flex-row flex-wrap justify-center items-center gap-4">
      {navArr.map((i) => {
        return (
          <Link
            key={i.name}
            className={`px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/10 text-base font-semibold rounded-lg transition-all hover:scale-95 focus:bg-zinc-200 focus:text-zinc-900 select-none shadow hover:shadow-sm ${
              i.name === "/" || i.name === "Contact"
                ? ""
                : "pointer-events-none opacity-40"
            }`}
            href={i.url}
          >
            {i.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
