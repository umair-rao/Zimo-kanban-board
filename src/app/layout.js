import TopBar from '@/components/TopBar'
import './globals.css'
import { Inter } from 'next/font/google'
import SideBar from '@/components/SideBar'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar/>
        <SideBar/>
        {children}
        </body>
    </html>
  )
}
