export default function PrivacyPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: March 30, 2026</p>
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>ManoPress (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what information we collect and how we use it.</p>
          <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
          <p>When you place an order, we collect your name, phone number, delivery address, and any design files you upload. We do not require account registration.</p>
          <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
          <p>We use your information solely to process and fulfill your order, and to contact you regarding your order status.</p>
          <h2 className="text-xl font-bold text-gray-900">Data Storage</h2>
          <p>Order data is stored securely in our database (Supabase). Design files are stored in secure cloud storage. We do not sell or share your data with third parties.</p>
          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          <p>For privacy concerns, message us on <a href="https://www.facebook.com/profile.php?id=61587380491479" className="text-[#1e3a8a] hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>.</p>
        </div>
      </div>
    </div>
  )
}
