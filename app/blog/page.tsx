import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    slug: 'what-is-sublimation-printing',
    title: 'What Is Sublimation Printing and Why Is It So Popular?',
    excerpt: 'Sublimation printing uses heat to transfer dye directly into fabric or coated surfaces — resulting in vivid, permanent prints that won\'t fade or crack.',
    category: 'Guide',
    date: 'March 20, 2026',
    image: '/assets/tshirt-design-3.jpg',
  },
  {
    slug: 'custom-shirts-for-events',
    title: 'Why Custom Printed Shirts Are Perfect for Events',
    excerpt: 'From school uniforms to corporate events — custom shirts create unity, boost morale, and make lasting memories.',
    category: 'Tips',
    date: 'March 10, 2026',
    image: '/assets/tshirt-design-5.jpg',
  },
  {
    slug: 'best-designs-for-mugs',
    title: '5 Design Ideas That Look Amazing on Mugs',
    excerpt: 'Mugs are one of the most popular sublimation items. Here are five design styles that always turn out beautifully.',
    category: 'Inspiration',
    date: 'February 28, 2026',
    image: '/assets/mousepad-design-2.jpg',
  },
  {
    slug: 'how-to-prepare-your-design-file',
    title: 'How to Prepare Your Design File for the Best Print Quality',
    excerpt: 'Getting your file print-ready is easier than you think. Learn the key settings that affect your final result.',
    category: 'Guide',
    date: 'February 15, 2026',
    image: '/assets/metalsheet-design-1.jpg',
  },
]

const categoryColors: Record<string, string> = {
  Guide: 'bg-blue-100 text-blue-700',
  Tips: 'bg-green-100 text-green-700',
  Inspiration: 'bg-purple-100 text-purple-700',
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#1e3a8a] py-20 px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">ManoPress Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold">Tips, Guides & Inspiration</h1>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{post.title}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#1e3a8a] hover:underline"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
