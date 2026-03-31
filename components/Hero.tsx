import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-blue-50">
      <Image
        src="/assets/hero-cover-v4.png"
        alt="ManoPress Custom Sublimation Printing"
        width={1920} height={900}
        className="w-full max-h-[88vh] object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      <div className="absolute bottom-10 left-8 md:left-16 flex gap-3 flex-wrap z-10">
        <Link href="/order" className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#1e3a8a] rounded-lg hover:bg-[#1e40af] transition-colors">Place an Order</Link>
        <a
          href="https://www.facebook.com/profile.php?id=61587380491479"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold border border-gray-300 bg-white rounded-lg hover:bg-gray-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#1877f2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          Message Us
        </a>
      </div>
    </section>
  )
}
