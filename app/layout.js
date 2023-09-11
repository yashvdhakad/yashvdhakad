import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import BannerMini from './components/BannerMini'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yash Dhakad',
  description: "I craft dynamic websites, captivating landing pages, innovative web applications, and seamless mobile applications that seamlessly align with your organization's objectives.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BannerMini cta="Click here to grab your free assets." />
        <section className='flex justify-center items-center'><Header /></section>
        {children}
      </body>
    </html>
  )
}
