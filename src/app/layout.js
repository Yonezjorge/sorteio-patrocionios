import { ScreenSizeProvider } from '@/context/screenSizeContext'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Sorteio - Patrocinios',
  description: 'Venda de contas',
}


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <ScreenSizeProvider>
        <body className={montserrat.className}>{children}</body>
      </ScreenSizeProvider>
    </html>
  )
}
