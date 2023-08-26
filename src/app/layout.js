import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/cc/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yash Dhakad | Home',
  description: 'Your unfair advantage.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <section className='relative max-w-screen-xl m-auto flex justify-center items-center'><Header /></section>
          {children}
        </>
      </body>
    </html>
  )
}
