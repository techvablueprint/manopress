import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'
import { Button } from '@/components/ui/button'

export default function BlogPreview() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">// From Our Blog</p>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Tips & Guides</h2>
          </div>
          <Button variant="outline" asChild><Link href="/blog">All Articles →</Link></Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.slice(0,3).map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="bg-muted/30 border border-border rounded-xl p-6 h-full hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <p className="font-mono text-xs text-primary mb-3">{post.date} · {post.readTime}</p>
                <h3 className="font-bold text-lg leading-snug mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold uppercase tracking-wide text-primary">
                  Read more <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
