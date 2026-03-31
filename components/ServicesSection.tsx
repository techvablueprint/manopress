import { Shirt, Coffee, HardHat, MousePointer2, Circle, Puzzle, Layers } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const services = [
  { num:'01', icon: Shirt, name:'Custom T-Shirts', desc:'Full-color sublimation on white polyester tees. XS to 5XL.' },
  { num:'02', icon: Coffee, name:'Sublimation Mugs', desc:'Wrap-around ceramic mug prints. Dishwasher-safe, fade-proof.' },
  { num:'03', icon: HardHat, name:'Net Cap Printing', desc:'Custom sublimation on net caps. Great for teams and events.' },
  { num:'04', icon: MousePointer2, name:'Mousepads', desc:'Thick mousepads with non-slip rubber base. Various sizes.' },
  { num:'05', icon: Circle, name:'Ceramic Plates', desc:'Photo plates and decorative ceramics — perfect gifts.' },
  { num:'06', icon: Puzzle, name:'Jigsaw Puzzles', desc:'Custom photo puzzles. Fun and unique gifts.' },
  { num:'07', icon: Layers, name:'Metal Sheet Prints', desc:'Full-color on aluminum. Durable, great for signage.' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 md:px-16 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">// What We Print</p>
        <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(s => (
            <Card key={s.num} className="hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardContent className="pt-6">
                <p className="font-mono text-[10px] text-primary mb-4">{s.num}</p>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
