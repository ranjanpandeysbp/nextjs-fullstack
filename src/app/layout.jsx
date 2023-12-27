import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Crud App',
  description: 'Crud app showing all capabilities of Next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-3xl mx-auto p-4'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
