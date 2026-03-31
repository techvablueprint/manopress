import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Package, Clock, CheckCircle } from 'lucide-react'

const products = [
  {
    name: 'T-Shirts',
    desc: 'Full-color sublimation on premium polyester tees. Vibrant, wash-resistant prints.',
    images: [
      '/assets/tshirt-design-1.jpg',
      '/assets/tshirt-design-2.jpg',
      '/assets/tshirt-design-3.jpg',
      '/assets/tshirt-design-4.jpg',
    ],
  },
  {
    name: 'Mugs',
    desc: 'Wrap-around sublimation on ceramic mugs. Perfect for gifts and promotions.',
    images: [
      '/assets/mousepad-design-1.jpg',
      '/assets/mousepad-design-2.jpg',
      '/assets/mousepad-design-3.jpg',
      '/assets/mousepad-design-4.jpg',
    ],
  },
  {
    name: 'Net Caps',
    desc: 'Custom prints on structured mesh caps. Ideal for teams and events.',
    images: [
      '/assets/netcap-design-1.jpg',
      '/assets/netcap-design-2.jpg',
      '/assets/netcap-design-3.jpg',
      '/assets/netcap-design-4.jpg',
    ],
  },
  {
    name: 'Mousepads',
    desc: 'High-resolution prints on smooth, non-slip mousepads.',
    images: [
      '/assets/mousepad-design-5.jpg',
      '/assets/mousepad-design-6.jpg',
      '/assets/mousepad-design-7.jpg',
      '/assets/mousepad-design-8.jpg',
    ],
  },
  {
    name: 'Plates',
    desc: 'Elegant sublimation-printed ceramic plates for keepsakes and awards.',
    images: [
      '/assets/plate-design-1.webp',
      '/assets/plate-design-2.jpg',
      '/assets/plate-design-3.webp',
      '/assets/plate-design-4.jpg',
    ],
  },
  {
    name: 'Jigsaw Puzzles',
    desc: 'Turn your favorite photo into a fun, high-quality custom puzzle.',
    images: [
      '/assets/puzzle-design-1.jpg',
      '/assets/puzzle-design-2.jpg',
      '/assets/puzzle-design-3.jpg',
      '/assets/puzzle-design-4.jpg',
    ],
  },
  {
    name: 'Metal Sheets',
    desc: 'Durable aluminum photo panels with vivid, scratch-resistant sublimation.',
    images: [
      '/assets/metalsheet-design-1.jpg',
      '/assets/metalsheet-design-2.jpg',
      '/assets/metalsheet-design-3.jpg',
      '/assets/metalsheet-design-4.jpg',
    ],
  },
]

const steps = [
  {
    icon: <Package size={28} />,
    step: '01',
    title: 'Choose Your Product',
    desc: 'Select from our wide range of sublimation products.',
  },
  {
    icon: <Star size={28} />,
    step: '02',
    title: 'Upload Your Design',
    desc: 'Send us your artwork or photo file.',
  },
  {
    icon: <Clock size={28} />,
    step: '03',
    title: 'We Print & Pack',
    desc: 'We handle production with care and quality checks.',
  },
  {
    icon: <CheckCircle size={28} />,
    step: '04',
    title: 'Delivered to You',
    desc: 'Your order ships straight to your door.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[560px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/hero-cover-v4.png"
          alt="ManoPress Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1e3a8a]/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-4">
            Santa Rosa, Laguna&apos;s #1 Sublimation Printer
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Design,<br />Our Craftsmanship
          </h1>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Premium sublimation printing on shirts, mugs, caps, and more. Quality that lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#1e3a8a] border-2 border-white rounded-lg hover:bg-[#1e40af] transition-colors"
            >
              Place an Order <ArrowRight size={18} />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white border-2 border-white/60 rounded-lg hover:border-white hover:bg-white/10 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a8a] mb-3">
              Welcome to ManoPress
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Bringing Your Ideas to Life
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in high-quality sublimation printing for individuals, businesses, and events.
              Whether you need personalized gifts, branded merchandise, or custom apparel — we deliver
              vibrant, durable prints every time.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a8a] mb-3">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{product.desc}</p>
                  <Link
                    href="/order"
                    className="text-sm font-semibold text-[#1e3a8a] hover:underline inline-flex items-center gap-1"
                  >
                    Order Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Order */}
      <section className="py-20 bg-[#1e3a8a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-3">Simple Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">How to Order</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white mb-4">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-blue-300 mb-2">STEP {s.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-blue-200 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/order"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#1e3a8a] bg-white rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Your Order <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a8a] mb-3">Our Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Print Gallery</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              '/assets/tshirt-design-5.jpg',
              '/assets/tshirt-design-6.jpg',
              '/assets/netcap-design-5.jpg',
              '/assets/netcap-design-6.jpg',
              '/assets/mousepad-design-1.jpg',
              '/assets/mousepad-design-3.jpg',
              '/assets/metalsheet-design-5.jpg',
              '/assets/puzzle-design-5.jpg',
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.facebook.com/profile.php?id=61587380491479"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#1e3a8a] border-2 border-[#1e3a8a] rounded-lg hover:bg-[#1e3a8a] hover:text-white transition-colors"
            >
              See More on Facebook <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Printing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Fill out our simple order form and we&apos;ll take care of the rest.
          </p>
          <Link
            href="/order"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#1e3a8a] rounded-lg hover:bg-[#1e40af] transition-colors"
          >
            Place an Order Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
