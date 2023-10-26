import Link from "next/link";

const Navbar = () => {
  const navArr = [
    { name: "/", url: "/" },
    { name: "Clients", url: "/clients" },
    { name: "Projects", url: "/projects" },
    { name: "Store", url: "/store" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <nav className="flex flex-row flex-wrap justify-center items-center gap-4">
      {navArr.map((i) => {
        return (
          <Link
            key={i.name}
            className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/10 text-base font-semibold rounded-lg transition-all hover:scale-95 focus:bg-zinc-200 focus:text-zinc-900 select-none shadow-md hover:shadow-sm"
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
