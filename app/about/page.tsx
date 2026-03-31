import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Star, Shield } from 'lucide-react'

const values = [
  {
    icon: <Star size={24} />,
    title: 'Quality First',
    desc: 'We use premium sublimation inks and materials for prints that last and stay vibrant.',
  },
  {
    icon: <Heart size={24} />,
    title: 'Made with Care',
    desc: 'Every order is handled personally — we treat each print like it\'s our own.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Satisfaction Guaranteed',
    desc: 'Not happy with your order? We\'ll make it right, no questions asked.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a8a] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">About ManoPress</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Printing Dreams,<br />One Piece at a Time</h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            We&apos;re a small sublimation printing business based in Santa Rosa, Laguna — passionate about
            turning your ideas into high-quality printed products.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a8a] mb-3">Our Story</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Born from a Passion for Custom Prints</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ManoPress started as a personal project — a love for creating custom, meaningful items for friends
                and family. Over time, word spread, and what began as a hobby turned into a full-fledged
                sublimation printing business.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, we serve individuals, groups, businesses, and schools throughout Santa Rosa and beyond.
                Our mission is simple: deliver beautiful, durable prints at fair prices, with a personal touch.
              </p>
              <Link
                href="/order"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1e3a8a] rounded-lg hover:bg-[#1e40af] transition-colors"
              >
                Start Your Order <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative h-80 lg:h-auto rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/tshirt-design-1.jpg"
                alt="ManoPress printing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a8a] mb-3">What Drives Us</p>
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-[#1e3a8a] mb-5">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1e3a8a]">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-blue-100 mb-8">
            Place your custom order online or reach out to us on Facebook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#1e3a8a] bg-white rounded-lg hover:bg-blue-50 transition-colors"
            >
              Place an Order <ArrowRight size={16} />
            </Link>
            <a
              href="https://www.facebook.com/profile.php?id=61587380491479"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white border-2 border-white/40 rounded-lg hover:border-white hover:bg-white/10 transition-colors"
            >
              Message on Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
