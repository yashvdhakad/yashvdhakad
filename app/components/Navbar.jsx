import Link from "next/link";

const Navbar = () => {
  const navArr = [
    { name: "/", url: "/" },
    // { name: "Copywriting", url: "/copywriting" },
    // { name: "Design", url: "/design" },
    // { name: "Development", url: "/development" },
    // { name: "Clients", url: "/clients" },
    { name: "Projects", url: "/projects" },
    // { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },

    // { name: "Free Assets", url: "/free-assets" },
    // { name: "Products", url: "/products" },
  ];

  return (
    <nav className="p-2 rounded-lg bg-white/10 backdrop-blur-xl border border-white/10 flex flex-row flex-wrap justify-center items-center gap-2 z-10">
      {navArr.map((i) => {
        return (
          <Link
            key={i.name}
            className="px-4 py-2 bg-white/10 text-zinc-200 text-base font-medium rounded-lg border border-white/10 transition-all hover:scale-95 focus:bg-zinc-200 focus:text-zinc-900 select-none"
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
