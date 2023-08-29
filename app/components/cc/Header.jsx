import Link from 'next/link'

const Header = () => {
    const navArr = [
        { name: "/", url: "/" },
        { name: "Tech Stack", url: "/techstack" },
        { name: "Projects", url: "/projects" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" }
      ]

    return (
        <nav className='fixed bottom-10 w-fit rounded-lg p-2 bg-zinc-800 shadow-xl shadow-zinc-800/40 z-10'>
            <div className='p-2 rounded-lg bg-zinc-700 flex flex-row flex-wrap justify-center items-center gap-2'>
                {
                    navArr.map((i) => {
                        return <Link key={i.name} className="bg-zinc-800 text-zinc-100 rounded-lg px-4 py-2 transition-all cursor-pointer shadow-sm shadow-zinc-800/60 hover:scale-95 hover:bg-zinc-900 focus:bg-zinc-900" href={i.url} >{i.name}</Link>
                    })
                }
            </div>
        </nav>
    )
}

export default Header