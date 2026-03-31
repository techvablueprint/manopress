import Link from 'next/link'
import { MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0f1f40] text-white/65 pt-14 pb-8 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10 mb-8">
        <div>
          <span className="font-bold text-xl text-white block mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            MANO<span className="text-blue-400">PRESS</span>
          </span>
          <p className="text-sm leading-relaxed mb-4">Custom sublimation printing in Santa Rosa, Laguna. Vibrant colors, lasting quality.</p>
          <a href="https://www.facebook.com/profile.php?id=61587380491479" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 text-sm hover:text-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> Follow us on Facebook
          </a>
        </div>
        <div>
          <p className="font-bold text-white text-sm mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Services</p>
          <ul className="space-y-2 text-sm">
            {['T-Shirts','Mugs','Net Caps','Mousepads','Plates','Jigsaw Puzzles','Metal Sheets'].map(s => (
              <li key={s}><Link href="/#products" className="hover:text-white/90 transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-white text-sm mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Company</p>
          <ul className="space-y-2 text-sm">
            {([['About Us','/about'],['Blog','/blog'],['Contact','/contact'],['How to Order','/#how-to-order']] as [string,string][]).map(([label,href]) => (
              <li key={href}><Link href={href} className="hover:text-white/90 transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-white text-sm mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Contact</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0 text-blue-400" />Santa Rosa, Laguna, Philippines</li>
            <li className="flex items-center gap-2"><Clock size={14} className="text-blue-400" />Mon–Sat, 9AM–6PM</li>
            <li><Link href="/privacy" className="hover:text-white/90">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white/90">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex justify-between text-xs opacity-40 flex-wrap gap-2">
        <span>© {new Date().getFullYear()} ManoPress. All rights reserved.</span>
        <span>Santa Rosa, Laguna, Philippines</span>
      </div>
    </footer>
  )
}
