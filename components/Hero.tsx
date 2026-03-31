import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Facebook } from 'lucide-react'

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
        <Button asChild size="lg"><Link href="/order">Place an Order</Link></Button>
        <Button variant="outline" size="lg" asChild>
          <a href="https://www.facebook.com/profile.php?id=61587380491479" target="_blank" rel="noopener noreferrer">
            <Facebook size={16} className="mr-2" /> Message Us
          </a>
        </Button>
      </div>
    </section>
  )
}
