import Link from 'next/link'
import { MapPin, Clock, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1e3a8a] py-20 px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg">
            Have a question about your order or want to discuss a project? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1e3a8a]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-500 text-sm mt-1">Santa Rosa, Laguna, Philippines</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1e3a8a]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours</p>
                    <p className="text-gray-500 text-sm mt-1">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                    <p className="text-gray-500 text-sm">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1e3a8a]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Facebook</p>
                    <a
                      href="https://www.facebook.com/profile.php?id=61587380491479"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1e3a8a] hover:underline mt-1 block"
                    >
                      Message us on Facebook &rarr;
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-blue-50 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-2">Ready to Order?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Skip the messages — fill out our order form and we&apos;ll contact you directly.
                </p>
                <Link
                  href="/order"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1e3a8a] rounded-lg hover:bg-[#1e40af] transition-colors"
                >
                  Place an Order <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked</h2>
              <div className="space-y-5">
                {[
                  {
                    q: 'How do I place an order?',
                    a: 'Use our online order form — select your product, upload your design, fill in your details, and submit. We\'ll contact you to confirm.',
                  },
                  {
                    q: 'How long does production take?',
                    a: 'Typically 1–3 business days depending on the product and quantity. We\'ll confirm the timeline when you order.',
                  },
                  {
                    q: 'What file formats do you accept?',
                    a: 'We accept JPG, PNG, PDF, AI, PSD, and SVG. High-resolution files (300 DPI or higher) produce the best results.',
                  },
                  {
                    q: 'Do you deliver?',
                    a: 'Yes! We ship nationwide via courier. Pickup is also available in Santa Rosa, Laguna.',
                  },
                  {
                    q: 'What is your payment method?',
                    a: 'We accept GCash, bank transfer, and cash on pickup. We\'ll provide payment details when confirming your order.',
                  },
                ].map((faq) => (
                  <div key={faq.q} className="border-b border-gray-100 pb-5">
                    <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
