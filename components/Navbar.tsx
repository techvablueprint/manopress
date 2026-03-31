'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-border h-16 flex items-center px-6 md:px-12 justify-between shadow-sm">
      <Link href="/" className="flex items-center gap-2.5">
        <Image src="/assets/manopress-logo-new.png" alt="ManoPress" width={40} height={40} className="h-10 w-10 object-contain rounded-full" />
        <span className="font-bold text-xl tracking-wide text-[#1e3a8a]" style={{ fontFamily: "'Playfair Display', serif" }}>
          MANOPRESS
        </span>
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {links.map(l => (
          <Link key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {l.label}
          </Link>
        ))}
        <Link href="/order" className="px-4 py-2 text-sm font-semibold text-white bg-[#1e3a8a] rounded-lg hover:bg-[#1e40af] transition-colors">Place an Order</Link>
      </div>

      {/* Mobile toggle */}
      <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-4 md:hidden shadow-lg">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm font-medium" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Link href="/order" onClick={() => setOpen(false)} className="px-4 py-2.5 text-sm font-semibold text-white bg-[#1e3a8a] rounded-lg text-center hover:bg-[#1e40af] transition-colors">Place an Order</Link>
        </div>
      )}
    </nav>
  )
}
