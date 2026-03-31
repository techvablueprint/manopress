'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { Search, ExternalLink } from 'lucide-react'

type Order = {
  id: string
  product_type: string
  quantity: number
  size: string | null
  design_file_url: string | null
  notes: string | null
  contact_name: string
  contact_phone: string
  delivery_address: string
  status: string
  created_at: string
}

const STATUSES = ['All', 'Pending', 'Processing', 'Completed', 'Cancelled']

const statusColors: Record<string, string> = {
  Pending: 'bg-yellow-100 text-yellow-800',
  Processing: 'bg-blue-100 text-blue-800',
  Completed: 'bg-green-100 text-green-800',
  Cancelled: 'bg-red-100 text-red-800',
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const fetchOrders = async () => {
    const supabase = createClient()
    let query = supabase.from('orders').select('*').order('created_at', { ascending: false })
    if (filter !== 'All') query = query.eq('status', filter)
    const { data, error } = await query
    if (error) toast.error('Failed to load orders')
    else setOrders(data || [])
    setLoading(false)
  }

  useEffect(() => {
    fetchOrders()
  }, [filter])

  const updateStatus = async (id: string, status: string) => {
    const supabase = createClient()
    const { error } = await supabase.from('orders').update({ status }).eq('id', id)
    if (error) {
      toast.error('Failed to update status')
    } else {
      toast.success('Status updated')
      setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)))
    }
  }

  const filtered = orders.filter((o) =>
    o.contact_name.toLowerCase().includes(search.toLowerCase()) ||
    o.contact_phone.includes(search) ||
    o.product_type.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="text-sm text-gray-500 mt-1">Manage all customer orders</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-xs">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filter === s
                  ? 'bg-[#1e3a8a] text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-[#1e3a8a]'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-xs text-gray-500 uppercase tracking-wider bg-gray-50">
                <th className="text-left px-6 py-3">Customer</th>
                <th className="text-left px-6 py-3">Product</th>
                <th className="text-left px-6 py-3">Qty</th>
                <th className="text-left px-6 py-3">Design</th>
                <th className="text-left px-6 py-3">Notes</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-left px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-400">Loading...</td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-400">No orders found</td>
                </tr>
              ) : (
                filtered.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{order.contact_name}</div>
                      <div className="text-xs text-gray-400">{order.contact_phone}</div>
                      <div className="text-xs text-gray-400 mt-0.5 max-w-[160px] truncate">{order.delivery_address}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-800">{order.product_type}</div>
                      {order.size && <div className="text-xs text-gray-400">Size: {order.size}</div>}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{order.quantity}</td>
                    <td className="px-6 py-4">
                      {order.design_file_url ? (
                        <a
                          href={order.design_file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#1e3a8a] hover:underline text-xs"
                        >
                          View <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-xs text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-gray-500 max-w-[120px] block truncate" title={order.notes || ''}>
                        {order.notes || '—'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={order.status}
                        onChange={(e) => updateStatus(order.id, e.target.value)}
                        className={`text-xs font-medium px-2 py-1 rounded-full border-0 focus:outline-none focus:ring-1 focus:ring-[#1e3a8a] cursor-pointer ${statusColors[order.status] || 'bg-gray-100 text-gray-700'}`}
                      >
                        {STATUSES.filter((s) => s !== 'All').map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-400 whitespace-nowrap">
                      {new Date(order.created_at).toLocaleDateString('en-PH', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
