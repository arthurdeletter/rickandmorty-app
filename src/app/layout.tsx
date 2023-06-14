import './globals.css'
import { Poppins } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import Providers from '@/components/Providers'

const poppins = Poppins({ weight: ["100", "400", "500", "700", "900"], subsets: ['latin'] })

export const metadata = {
  title: 'Rick and morty App',
  description: 'Experiment app with NextJS, TypeScript that uses the Rick And Morty API.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Navbar />

          {children}
        </Providers>
      </body>
    </html>
  )
}
