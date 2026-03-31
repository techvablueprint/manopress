import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const posts: Record<string, { title: string; date: string; category: string; image: string; content: string }> = {
  'what-is-sublimation-printing': {
    title: 'What Is Sublimation Printing and Why Is It So Popular?',
    date: 'March 20, 2026',
    category: 'Guide',
    image: '/assets/tshirt-design-3.jpg',
    content: `
      <p>Sublimation printing is a method where heat and pressure are used to transfer dye directly into the surface of a material — whether it's polyester fabric, ceramic, aluminum, or other specially coated substrates.</p>
      <p>Unlike traditional printing methods that sit on top of the material, sublimation dye actually becomes part of the surface. The result? Prints that are vibrant, permanent, and resistant to cracking, peeling, or fading over time.</p>
      <h2>Why It's So Popular</h2>
      <p>Sublimation is beloved by small businesses, events teams, and gift shops because it allows for full-color, edge-to-edge printing on a wide range of products. You're not limited to a few colors or simple designs — you can print detailed photos, complex gradients, and intricate artwork.</p>
      <p>It's also a cost-effective option for small quantities, making it perfect for personalized gifts, custom merchandise, and one-off creations.</p>
      <h2>What Can Be Sublimated?</h2>
      <ul>
        <li>Polyester t-shirts and apparel</li>
        <li>Ceramic mugs and plates</li>
        <li>Aluminum metal sheets and signs</li>
        <li>Mousepads and desk accessories</li>
        <li>Jigsaw puzzles</li>
        <li>Net caps and trucker hats</li>
      </ul>
      <p>Ready to get started? Place your order today and we'll handle the rest.</p>
    `,
  },
  'custom-shirts-for-events': {
    title: 'Why Custom Printed Shirts Are Perfect for Events',
    date: 'March 10, 2026',
    category: 'Tips',
    image: '/assets/tshirt-design-5.jpg',
    content: `
      <p>Whether you're organizing a company outing, school event, family reunion, or team sports day — custom printed shirts are one of the easiest ways to create a sense of unity and belonging.</p>
      <h2>Benefits of Custom Event Shirts</h2>
      <p><strong>Identity & Unity:</strong> Matching shirts instantly identify your group and create a shared experience. There's something powerful about wearing the same shirt as your team.</p>
      <p><strong>Lasting Memory:</strong> Long after the event is over, the shirt remains. Every time someone wears it, they remember the experience.</p>
      <p><strong>Professionalism:</strong> For corporate events and brand activations, custom shirts make your team look organized and professional.</p>
      <h2>Tips for Ordering Event Shirts</h2>
      <ul>
        <li>Order at least 1–2 weeks before your event to allow for production time</li>
        <li>Prepare a size breakdown in advance (how many S, M, L, XL, etc.)</li>
        <li>Use a high-resolution logo or design file (300 DPI minimum)</li>
        <li>White or light-colored polyester shirts give the most vibrant sublimation results</li>
      </ul>
      <p>Contact us to discuss bulk orders and get started on your event shirts today.</p>
    `,
  },
  'best-designs-for-mugs': {
    title: '5 Design Ideas That Look Amazing on Mugs',
    date: 'February 28, 2026',
    category: 'Inspiration',
    image: '/assets/mousepad-design-2.jpg',
    content: `
      <p>Custom mugs are one of our most popular products — and for good reason. They make incredible gifts, keepsakes, and branded merchandise. Here are five design ideas that always look stunning.</p>
      <h2>1. Personal Photo Wrap</h2>
      <p>A full wrap-around photo of a loved one, a pet, or a special memory. The sublimation process ensures rich color and sharp detail all the way around the mug.</p>
      <h2>2. Minimalist Quote</h2>
      <p>Simple, clean typography with a meaningful quote or inside joke. Less is often more on a mug.</p>
      <h2>3. Company Logo + Info</h2>
      <p>Great for corporate gifts or brand merchandise. Include your logo, tagline, and contact details.</p>
      <h2>4. Cartoon or Illustration</h2>
      <p>Custom illustrations — whether a cartoon caricature or hand-drawn art — look amazing on mugs. Vibrant colors and clean lines work best.</p>
      <h2>5. Map or Coordinates</h2>
      <p>A meaningful location — your hometown, where you met, or a special destination — as a map or GPS coordinates. Elegant and personal.</p>
      <p>Have a design in mind? Place your order and upload your design file — we'll take it from there.</p>
    `,
  },
  'how-to-prepare-your-design-file': {
    title: 'How to Prepare Your Design File for the Best Print Quality',
    date: 'February 15, 2026',
    category: 'Guide',
    image: '/assets/metalsheet-design-1.jpg',
    content: `
      <p>The quality of your print depends heavily on the quality of your design file. Here's what you need to know before submitting your order.</p>
      <h2>Resolution: 300 DPI Minimum</h2>
      <p>Always work at 300 DPI (dots per inch) or higher at actual print size. Low-resolution images will look blurry or pixelated when printed.</p>
      <h2>File Formats We Accept</h2>
      <ul>
        <li>PNG (preferred for designs with transparency)</li>
        <li>JPG (great for photos)</li>
        <li>PDF (ideal for vector/print-ready files)</li>
        <li>AI or PSD (if you're working with Adobe software)</li>
        <li>SVG (for vector artwork)</li>
      </ul>
      <h2>Color Mode: RGB vs CMYK</h2>
      <p>For sublimation, RGB color mode typically produces the most accurate results. If your file is in CMYK, we'll convert it, but slight color shifts may occur.</p>
      <h2>Background Tips</h2>
      <p>For mugs, mousepads, and metal sheets — white backgrounds are part of the substrate, so design accordingly. Use transparent backgrounds (PNG) if you want the product color to show through.</p>
      <h2>When in Doubt, Ask</h2>
      <p>Not sure if your file is ready? Upload it and add a note in your order. We'll review it before printing and let you know if adjustments are needed.</p>
    `,
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1e3a8a] mb-8"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{post.category}</span>
          <span className="text-xs text-gray-400">{post.date}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{post.title}</h1>

        <article
          className="prose prose-blue max-w-none text-gray-600 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:text-gray-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
          <h3 className="font-bold text-gray-900 mb-2">Ready to Print?</h3>
          <p className="text-sm text-gray-600 mb-4">Place your custom order and we&apos;ll get back to you with details.</p>
          <Link
            href="/order"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1e3a8a] rounded-lg hover:bg-[#1e40af] transition-colors"
          >
            Place an Order <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
