import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  description: 'A business-oriented FullStack TypeScript developer with over 9 years of experience',
  title: 'Alvin Sovereign',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const htmlClasses = clsx(inter.className, 'bg-background text-foreground dark')

  return (
    <html lang="en" className={htmlClasses}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
