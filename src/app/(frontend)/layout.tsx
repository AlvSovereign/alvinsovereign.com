import React from 'react'
import './globals.css'
import { Manrope } from 'next/font/google'
import clsx from 'clsx'
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const htmlClasses = clsx(manrope.className, 'bg-background text-foreground dark')

  return (
    <html lang="en" className={htmlClasses}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
