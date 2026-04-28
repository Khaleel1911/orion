import { Suspense } from 'react'
import ProductsClient from './ProductsClient'

export const metadata = {
  title: 'Products — Orion World',
  description:
    "Explore Orion World's complete range of premium aluminium windows, doors, uPVC systems, skylights, insect screens, and outdoor structures.",
}

function ProductsFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">
          Loading
        </p>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsFallback />}>
      <ProductsClient />
    </Suspense>
  )
}
