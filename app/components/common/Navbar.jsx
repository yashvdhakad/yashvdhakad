import Link from "next/link";

const Navbar = () => {
  const navArr = [
    { name: "/", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Projects", url: "#projects" },
    { name: "Pricing", url: "/pricing" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <nav className="flex flex-row flex-wrap justify-center items-center gap-4">
      {navArr.map((i) => {
        return (
          <Link
            key={i.name}
            className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/10 text-base font-medium rounded transition-all hover:scale-95 focus:bg-orange-600 select-none shadow-md hover:shadow-sm cursor-grab focus:cursor-grabbing"
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
