import { Upload, CheckCircle, Clock, Truck } from 'lucide-react'

const steps = [
  { num:'1', icon: Upload, title:'Send Your Design', desc:'Upload your artwork via our order form. PNG, JPG, PDF, and vector files accepted.' },
  { num:'2', icon: CheckCircle, title:'Confirm Details', desc:'We review product type, quantity, and size — then confirm pricing before production.' },
  { num:'3', icon: Clock, title:'Production', desc:'Standard turnaround is 2–3 business days from design approval.' },
  { num:'4', icon: Truck, title:'Receive Your Order', desc:"Pick up in Santa Rosa or have it delivered. We'll update your order status." },
]

export default function HowToOrder() {
  return (
    <section id="how-to-order" className="py-20 px-6 md:px-16 bg-muted/40 text-center">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">// The Process</p>
        <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>How to Order</h2>
        <p className="text-muted-foreground mb-14">Simple 4-step process from your design to your doorstep.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(s => (
            <div key={s.num} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-border flex items-center justify-center mb-5 shadow-sm hover:border-primary hover:bg-primary/5 transition-all">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
