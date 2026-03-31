import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'ManoPress — Custom Sublimation Printing in Santa Rosa, Laguna',
  description: 'ManoPress offers professional sublimation printing on t-shirts, mugs, caps, mousepads, plates, puzzles, and metal sheets in Santa Rosa, Laguna, Philippines.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="pt-16 flex-1">{children}</main>
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
