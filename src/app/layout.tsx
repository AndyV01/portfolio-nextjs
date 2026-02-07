import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andrés Vallarino | Frontend Developer',
  description: 'Portfolio de Andrés Vallarino - Frontend Developer con más de 4 años de experiencia en React, Next.js, TypeScript y desarrollo web moderno.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Andrés Vallarino' }],
  openGraph: {
    title: 'Andrés Vallarino | Frontend Developer',
    description: 'Portfolio profesional de desarrollo frontend',
    type: 'website',
    locale: 'es_UY',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
