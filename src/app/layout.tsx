import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: "Maître Abdoul Kader Bitie — Avocat en droit des étrangers, droit du travail et droit commercial à Bordeaux",
  description: "Cabinet Abdoul Kader Bitie — Avocat inscrit au Barreau de Bordeaux, spécialisé en droit des étrangers, droit du travail, droit commercial, droit des assurances et droit fiscal. 37 rue Colonel Grandier-Vazeille, 33000 Bordeaux. Tél : 06 27 83 91 53.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter)', background: '#f3f4f6', margin: 0 }}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
