import TopBar from '@/components/TopBar'
import './globals.css'
import { Inter } from 'next/font/google'
import SideBar from '@/components/SideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zimo Kanban Board App',
  description: 'Kanban Board to Manage tasks',
}

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
