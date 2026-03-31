import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const products = [
  { name:'Custom T-Shirt', category:'Sublimation', price:'₱250', img:'/assets/tshirt-design-2.jpg' },
  { name:'Mousepad', category:'Sublimation', price:'₱180', img:'/assets/mousepad-design-2.jpg' },
  { name:'Net Cap', category:'Sublimation', price:'₱200', img:'/assets/netcap-design-2.jpg' },
  { name:'Ceramic Plate', category:'Sublimation', price:'₱220', img:'/assets/plate-design-2.jpg' },
  { name:'Jigsaw Puzzle', category:'Sublimation', price:'₱300', img:'/assets/puzzle-design-1.jpg' },
  { name:'Metal Sheet Print', category:'Sublimation', price:'₱350', img:'/assets/metalsheet-design-2.jpg' },
]

export default function ProductsGallery() {
  return (
    <section id="products" className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">// Design Gallery</p>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Sample Prints</h2>
          </div>
          <Button variant="outline" asChild><Link href="/order">Order Now →</Link></Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map(p => (
            <div key={p.name} className="rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-muted/30">
              <div className="aspect-[4/3] overflow-hidden">
                <Image src={p.img} alt={p.name} width={400} height={300} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">{p.category}</p>
                <h3 className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
                <p className="text-sm text-muted-foreground">Starting at <span className="font-mono font-semibold text-primary">{p.price}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
