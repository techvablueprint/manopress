import { createClient } from '@/lib/supabase/server'
import { ShoppingBag, Clock, CheckCircle, Package, Users } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const supabase = await createClient()

  const [
    { count: totalOrders },
    { count: pendingOrders },
    { count: completedOrders },
    { data: recentOrders },
  ] = await Promise.all([
    supabase.from('orders').select('*', { count: 'exact', head: true }),
    supabase.from('orders').select('*', { count: 'exact', head: true }).eq('status', 'Pending'),
    supabase.from('orders').select('*', { count: 'exact', head: true }).eq('status', 'Completed'),
    supabase.from('orders').select('*').order('created_at', { ascending: false }).limit(10),
  ])

  const stats = [
    { label: 'Total Orders', value: totalOrders ?? 0, icon: ShoppingBag, color: 'bg-blue-500' },
    { label: 'Pending', value: pendingOrders ?? 0, icon: Clock, color: 'bg-yellow-500' },
    { label: 'Completed', value: completedOrders ?? 0, icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Products', value: 7, icon: Package, color: 'bg-purple-500' },
  ]

  const statusColors: Record<string, string> = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Processing: 'bg-blue-100 text-blue-800',
    Completed: 'bg-green-100 text-green-800',
    Cancelled: 'bg-red-100 text-red-800',
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Overview of your ManoPress orders</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${color} text-white mb-3`}>
              <Icon size={20} />
            </div>
            <div className="text-2xl font-bold text-gray-900">{value}</div>
            <div className="text-sm text-gray-500">{label}</div>
          </div>
        ))}
        <a href="https://analytics.google.com/analytics/web/#/p523522243/reports/intelligenthome" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:border-[#1e3a8a] transition-colors">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500 text-white mb-3">
            <Users size={20} />
          </div>
          <div className="text-2xl font-bold text-gray-900">View</div>
          <div className="text-sm text-gray-500">Site Visitors →</div>
        </a>
      </div>

      {/* Recent orders */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-xs text-gray-500 uppercase tracking-wider">
                <th className="text-left px-6 py-3">Customer</th>
                <th className="text-left px-6 py-3">Product</th>
                <th className="text-left px-6 py-3">Qty</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-left px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentOrders?.length ? (
                recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{order.contact_name}</div>
                      <div className="text-xs text-gray-400">{order.contact_phone}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{order.product_type}</td>
                    <td className="px-6 py-4 text-gray-700">{order.quantity}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[order.status] || 'bg-gray-100 text-gray-700'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      {new Date(order.created_at).toLocaleDateString('en-PH', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                    No orders yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
