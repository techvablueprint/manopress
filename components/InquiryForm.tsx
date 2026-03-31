'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const schema = z.object({
  name: z.string().min(2),
  contact: z.string().min(5),
  orderType: z.string().min(1),
  message: z.string().min(10),
})
type FormData = z.infer<typeof schema>

export default function InquiryForm() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(_data: FormData) {
    await new Promise(r => setTimeout(r, 800))
    setSent(true)
  }

  if (sent) return (
    <section className="py-20 px-6 md:px-16 bg-primary text-white text-center">
      <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Message Sent!</h2>
      <p className="text-white/80">We&apos;ll get back to you within 24 hours.</p>
    </section>
  )

  return (
    <section id="contact-form" className="py-20 px-6 md:px-16 bg-primary/5">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">// Get in Touch</p>
        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Send an Inquiry</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Name</Label>
              <Input {...register('name')} placeholder="Your name" />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label>Email or Phone</Label>
              <Input {...register('contact')} placeholder="email@example.com or 09xx" />
              {errors.contact && <p className="text-xs text-destructive">{errors.contact.message}</p>}
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Order Type</Label>
            <Select onValueChange={(v: string | null) => setValue('orderType', v ?? '')}>
              <SelectTrigger><SelectValue placeholder="Select a product" /></SelectTrigger>
              <SelectContent>
                {['T-Shirt','Mug','Net Cap','Mousepad','Plate','Jigsaw Puzzle','Metal Sheet','Other'].map(o => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.orderType && <p className="text-xs text-destructive">Please select a product</p>}
          </div>
          <div className="space-y-1.5">
            <Label>Message</Label>
            <Textarea {...register('message')} placeholder="Tell us about your order — quantity, design details, etc." rows={4} />
            {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </Button>
        </form>
      </div>
    </section>
  )
}
