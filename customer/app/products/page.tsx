import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ready Products — FOFUS',
  description: 'Browse our catalogue of ready-to-order 3D-printed products.',
}

const CATEGORIES = [
  { name: 'Organizers', count: 12, color: '#4a9eff' },
  { name: 'Gadget Stands', count: 8, color: '#00cc66' },
  { name: 'Home Décor', count: 15, color: '#ff9800' },
  { name: 'Functional Parts', count: 20, color: '#a855f7' },
]

export default function ProductsPage() {
  return (
    <div className="pt-14 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-2">Ready Products</h1>
            <p className="text-gray-500">Pre-designed items ready to order — printed and shipped in 24–48 hours</p>
          </div>
          <Link href="/upload" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl text-black" style={{ background: '#00cc66' }}>
            Upload custom design <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {CATEGORIES.map(({ name, count, color }) => (
            <button key={name} className="bg-white rounded-2xl border border-black/[0.06] p-5 text-left hover:border-[#00cc6630] transition-colors">
              <div className="w-10 h-10 rounded-xl mb-3" style={{ background: `${color}18` }} />
              <div className="font-semibold">{name}</div>
              <div className="text-sm text-gray-400">{count} products</div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl border border-black/[0.06] p-12 text-center">
          <p className="text-gray-400 mb-2">Product catalogue coming soon</p>
          <p className="text-sm text-gray-300 mb-6">Our team is curating a collection of popular designs</p>
          <Link href="/upload" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl text-black" style={{ background: '#00cc66' }}>
            Upload your own design
          </Link>
        </div>
      </div>
    </div>
  )
}
