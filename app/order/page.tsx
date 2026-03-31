'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { ArrowRight, Upload, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const PRODUCT_TYPES = [
  'T-Shirt',
  'Mug',
  'Net Cap',
  'Mousepad',
  'Plate',
  'Jigsaw Puzzle',
  'Metal Sheet',
]

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL']

const schema = z.object({
  product_type: z.string().min(1, 'Please select a product'),
  quantity: z.preprocess((v) => parseInt(String(v), 10), z.number().int().min(1, 'Minimum 1').max(500)),
  size: z.string().optional(),
  notes: z.string().optional(),
  contact_name: z.string().min(2, 'Name is required'),
  contact_phone: z.string().min(7, 'Phone number is required'),
  delivery_address: z.string().min(5, 'Address is required'),
})

type FormValues = z.infer<typeof schema>

export default function OrderPage() {
  const [file, setFile] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { quantity: 1 },
  })

  const productType = watch('product_type')
  const needsSize = productType === 'T-Shirt' || productType === 'Net Cap'

  const onSubmit = async (values: FormValues) => {
    setLoading(true)
    const supabase = createClient()
    let design_file_url: string | null = null

    try {
      // Upload design file if provided
      if (file) {
        const ext = file.name.split('.').pop()
        const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
        const { error: uploadError } = await supabase.storage
          .from('designs')
          .upload(filename, file, { upsert: false })

        if (uploadError) {
          toast.error('Failed to upload design file. Please try again.')
          setLoading(false)
          return
        }

        const { data: urlData } = supabase.storage.from('designs').getPublicUrl(filename)
        design_file_url = urlData.publicUrl
      }

      const { error } = await supabase.from('orders').insert({
        product_type: values.product_type,
        quantity: values.quantity,
        size: needsSize ? values.size || null : null,
        design_file_url,
        notes: values.notes || null,
        contact_name: values.contact_name,
        contact_phone: values.contact_phone,
        delivery_address: values.delivery_address,
      })

      if (error) {
        toast.error('Failed to submit order. Please try again.')
        setLoading(false)
        return
      }

      setSubmitted(true)
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Received!</h1>
          <p className="text-gray-600 mb-6">
            Thank you! We&apos;ve received your order and will contact you shortly to confirm details
            and arrange payment.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            For faster response, you may also message us on Facebook.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=61587380491479"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1877f2] rounded-lg hover:bg-[#166fe5] transition-colors"
            >
              <Facebook size={16} /> Message on Facebook
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#1e3a8a] border-2 border-[#1e3a8a] rounded-lg hover:bg-[#1e3a8a] hover:text-white transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a8a] mb-2">
            Custom Printing
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Place an Order</h1>
          <p className="text-gray-600">
            Fill out the form below and we&apos;ll get back to you to confirm your order.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Product & Quantity */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="font-bold text-gray-900 text-lg">Product Details</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Product Type <span className="text-red-500">*</span>
              </label>
              <select
                {...register('product_type')}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
              >
                <option value="">Select a product...</option>
                {PRODUCT_TYPES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              {errors.product_type && (
                <p className="mt-1 text-xs text-red-500">{errors.product_type.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min={1}
                  {...register('quantity')}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                />
                {errors.quantity && (
                  <p className="mt-1 text-xs text-red-500">{errors.quantity.message}</p>
                )}
              </div>

              {needsSize && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Size</label>
                  <select
                    {...register('size')}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                  >
                    <option value="">Select size...</option>
                    {SIZES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Design upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Design File
                <span className="ml-2 text-xs text-gray-400 font-normal">(JPG, PNG, PDF, AI, PSD)</span>
              </label>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#1e3a8a] hover:bg-blue-50 transition-colors">
                <Upload size={24} className="text-gray-400 mb-2" />
                {file ? (
                  <span className="text-sm text-[#1e3a8a] font-medium">{file.name}</span>
                ) : (
                  <span className="text-sm text-gray-500">Click to upload your design</span>
                )}
                <input
                  type="file"
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.pdf,.ai,.psd,.svg,.zip"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
              </label>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Special Instructions
                <span className="ml-2 text-xs text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                {...register('notes')}
                rows={3}
                placeholder="Colors, placement, specific requirements..."
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent resize-none"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="font-bold text-gray-900 text-lg">Contact & Delivery</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('contact_name')}
                placeholder="Full name"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
              />
              {errors.contact_name && (
                <p className="mt-1 text-xs text-red-500">{errors.contact_name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                {...register('contact_phone')}
                placeholder="+63 9XX XXX XXXX"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
              />
              {errors.contact_phone && (
                <p className="mt-1 text-xs text-red-500">{errors.contact_phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Delivery Address <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register('delivery_address')}
                rows={3}
                placeholder="House/unit no., street, barangay, city, province"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent resize-none"
              />
              {errors.delivery_address && (
                <p className="mt-1 text-xs text-red-500">{errors.delivery_address.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 text-base font-semibold text-white bg-[#1e3a8a] rounded-xl hover:bg-[#1e40af] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Submitting...' : (
              <>Submit Order <ArrowRight size={18} /></>
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            By submitting, you agree to our{' '}
            <Link href="/terms" className="underline hover:text-gray-600">Terms of Service</Link>.
            We&apos;ll contact you to confirm pricing and payment.
          </p>
        </form>
      </div>
    </div>
  )
}
