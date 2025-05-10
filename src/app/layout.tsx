import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import ClientSidebar from './components/ClientSidebar'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'A modern note-taking application with Zettelkasten methodology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <div className="flex min-h-screen">
          <ClientSidebar />
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 