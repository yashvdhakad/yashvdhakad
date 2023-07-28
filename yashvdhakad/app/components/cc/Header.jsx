import Link from 'next/link'
import homeIcon from '../../assets/svg/home-7-fill.svg'
import Image from 'next/image'

const Header = () => {
    const navArr = [
        { name: "/", url: "/" },
        { name: "Tech Stack", url: "/techstack" },
        { name: "Projects", url: "/projects" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" }
      ]

    return (
        <nav className='fixed bottom-10 w-fit rounded-xl p-2 flex space-x-2 bg-neutral-800 shadow-xl shadow-zinc-800/40 z-50'>
            <div className='p-2 rounded-lg bg-neutral-700 flex flex-row flex-wrap j
            ustify-center items-center gap-2'>
                {
                    navArr.map((i) => {
                        return <Link key={i.name} className="border border-[#333239] bg-neutral-800 text-zinc-100 rounded-lg px-4 py-2 transition-all cursor-pointer shadow-sm shadow-neutral-800/60 hover:scale-95 hover:bg-neutral-900 hover:border-[#1c1b22] focus:bg-zinc-900" href={i.url} >{i.name==="/" ? <Image className='invert opacity-80' src={homeIcon} width={24} height={24} /> : i.name}</Link>
                    })
                }
            </div>
        </nav>
    )
}

export default Header