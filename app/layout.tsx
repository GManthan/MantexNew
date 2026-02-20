import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mantex.me'),
  title: 'Manthan Gourshete | Debug Engineer Intern · Embedded Systems & Edge AI',
  description: 'Debug Engineer Intern at Jabil (Final Sem B.Tech E&TC). Embedded Systems, Telecom product debug, and Edge AI. Based in Aurangabad, Maharashtra. mantex.me',
  keywords: ['embedded systems', 'debug engineer', 'edge AI', 'IoT', 'firmware', 'ARM', 'STM32', 'PCB debug', 'telecom'],
  authors: [{ name: 'Manthan Gourshete' }],
  openGraph: {
    title: 'Manthan Gourshete | Debug Engineer · Embedded Systems & Edge AI',
    description: 'Debug Engineer specializing in PCB-level fault isolation, Embedded Systems, and Edge AI.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
