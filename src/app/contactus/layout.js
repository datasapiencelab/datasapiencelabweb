import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Data Sapience Lab',
  description: 'Data Sapience Lab website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="datadark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
