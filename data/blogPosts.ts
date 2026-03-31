export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-sublimation-printing',
    title: 'What Is Sublimation Printing? A Complete Guide',
    excerpt: 'Sublimation printing is a unique process that turns solid dye into gas, infusing it directly into the material. Here\'s everything you need to know.',
    date: 'Mar 10, 2025',
    readTime: '5 min read',
    content: [
      'Sublimation printing is a heat-transfer process that converts solid dye into gas without passing through a liquid state. This gas then bonds permanently with polyester fibers or polymer-coated surfaces, creating prints that are embedded in the material itself.',
      'Unlike traditional printing methods, sublimation ink becomes part of the product — not just a layer on top. This means your prints won\'t fade, crack, peel, or wash out, even after years of regular use.',
      'The process requires three things: sublimation ink, a heat press (typically 180–200°C), and a compatible substrate. The substrate must be either 100% polyester or have a polymer coating.',
      'Common sublimation products include t-shirts, mugs, mousepads, ceramic plates, jigsaw puzzles, and metal sheets. The key requirement: the base material must be white or very light-colored to achieve vibrant, accurate colors.',
      'At ManoPress, we use professional-grade sublimation equipment to ensure every print is sharp, colorfast, and consistent. Whether you\'re ordering one item or a hundred, the quality remains the same.',
    ],
  },
  {
    slug: 'how-to-prepare-your-design',
    title: 'How to Prepare Your Design for Sublimation Printing',
    excerpt: 'A well-prepared design file is the key to a great sublimation print. Learn what formats we accept and how to set up your artwork correctly.',
    date: 'Mar 17, 2025',
    readTime: '4 min read',
    content: [
      'Getting your design file right before submitting is the most important step in the ordering process. A well-prepared file means fewer revisions, faster turnaround, and better final results.',
      'Accepted file formats: PNG (preferred), JPG, PDF, SVG, and AI files. For best results, submit your design at 300 DPI or higher. Vector files (SVG, AI) are ideal because they scale without quality loss.',
      'Color mode: Sublimation printing works in RGB color mode, not CMYK. If your file is set to CMYK, convert it to RGB before sending. Colors may shift during conversion, so double-check your design after converting.',
      'Background transparency: If you want the print to match the product color (especially for t-shirts), use a transparent background (PNG with alpha channel). A white background will print as white on the product.',
      'Text and fonts: If your design includes text, either embed the fonts or convert all text to outlines/curves before exporting. This prevents font substitution issues on our end.',
      'Once you\'ve prepared your file, upload it directly through our order form. If you\'re unsure about anything, just add a note in the order form and we\'ll get back to you before starting production.',
    ],
  },
  {
    slug: 'sublimation-product-guide',
    title: 'ManoPress Product Guide: Which Item Is Right for You?',
    excerpt: 'From t-shirts to metal sheets, we print on 7 different product types. This guide helps you choose the right one for your needs.',
    date: 'Mar 24, 2025',
    readTime: '6 min read',
    content: [
      'With 7 product types available, it can be hard to decide which one fits your needs. Here\'s a quick breakdown of each item we offer and what it\'s best for.',
      'Custom T-Shirts (₱250): Our most popular item. Full-color sublimation on white polyester tees. Available in XS to 5XL. Best for: team shirts, event uniforms, personalized gifts, merchandise.',
      'Sublimation Mugs (₱150): 11oz ceramic mugs with wrap-around printing. Dishwasher-safe and microwave-safe. Best for: personalized gifts, corporate giveaways, photo mugs.',
      'Net Caps (₱200): Trucker-style caps with sublimation print panel. Great for outdoor events, team gear, and promotional use. One size with adjustable strap.',
      'Mousepads (₱180): Thick, high-quality mousepads with non-slip rubber base. Multiple sizes available. Best for: office use, gaming setups, branded giveaways.',
      'Ceramic Plates (₱220): Decorative or functional photo plates. Great for personalized gifts, anniversaries, and home décor. Not for regular food use.',
      'Jigsaw Puzzles (₱300): Custom photo puzzles — a unique and memorable gift. Available in multiple piece counts. Best for: birthdays, anniversaries, family photos.',
      'Metal Sheet Prints (₱350): Full-color print on aluminum sheets. Extremely durable, weatherproof, and vibrant. Best for: signage, wall art, outdoor displays.',
      'Not sure which product to choose? Send us a message on Facebook or use our contact form and we\'ll help you decide.',
    ],
  },
  {
    slug: 'bulk-orders-and-pricing',
    title: 'Bulk Orders: What You Need to Know About Pricing and Turnaround',
    excerpt: 'Planning a large order? We offer bulk discounts and can handle team orders, events, and corporate giveaways. Here\'s how it works.',
    date: 'Apr 1, 2025',
    readTime: '3 min read',
    content: [
      'ManoPress accepts orders of any size — from a single personalized mug to hundreds of t-shirts for a corporate event. There\'s no minimum order quantity, and we offer discounts for larger volumes.',
      'Bulk pricing: Orders of 10+ items receive a 10% discount. Orders of 50+ items receive a 15% discount. For orders of 100 or more, contact us directly for a custom quote.',
      'Turnaround time: Standard production is 2–3 business days per item type. For bulk orders (20+), add 1–2 business days. Rush orders may be available — inquire via our Facebook page.',
      'For team orders with multiple names, numbers, or designs, each variation counts as a separate design job. Please submit all variations together in a single order with clear notes.',
      'Payment: For bulk orders, we may request a 50% downpayment before production begins. The remaining balance is due upon pickup or delivery.',
      'To place a bulk order, use our order form and specify the quantity. Add details in the notes section or reach out to us directly via Facebook Messenger for large or complex orders.',
    ],
  },
  {
    slug: 'caring-for-sublimation-prints',
    title: 'How to Care for Your Sublimation Prints',
    excerpt: 'Sublimation prints are incredibly durable, but proper care ensures your items stay vibrant for years. Here are our top care tips.',
    date: 'Apr 8, 2025',
    readTime: '3 min read',
    content: [
      'One of the biggest advantages of sublimation printing is its durability — the ink is fused into the material, not sitting on top. That said, proper care will keep your items looking their best for years.',
      'T-shirts: Machine wash cold, inside out. Tumble dry low or hang dry. Avoid bleach and fabric softeners, which can break down polyester fibers. Do not iron directly on the printed area.',
      'Mugs: Hand wash is recommended for longest print life. While our mugs are technically dishwasher-safe, repeated dishwasher use may cause slight fading over time. Avoid microwaving empty mugs.',
      'Mousepads: Wipe clean with a damp cloth. Avoid soaking the pad. For deep cleaning, hand wash gently with mild soap and air dry flat.',
      'Metal sheets: Wipe with a dry or slightly damp cloth. Avoid abrasive cleaners. For outdoor use, UV-protective coating is recommended to extend print life.',
      'In general: avoid prolonged direct sunlight exposure for any sublimation product. UV rays will eventually cause fading on any printed item, sublimation or otherwise.',
    ],
  },
]
