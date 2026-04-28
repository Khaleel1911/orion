import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { categories, findProduct, getRelatedProducts } from '@/data/products'
import ProductDetailClient from '@/components/products/ProductDetailClient'

interface PageProps {
  params: Promise<{ catId: string; subId: string; productId: string }>
}

export async function generateStaticParams() {
  const paths: { catId: string; subId: string; productId: string }[] = []
  for (const cat of categories) {
    for (const sub of cat.subcategories) {
      for (const product of sub.products) {
        paths.push({ catId: cat.id, subId: sub.id, productId: product.id })
      }
    }
  }
  return paths
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { catId, subId, productId } = await params
  const { product, cat, sub } = findProduct(catId, subId, productId)

  if (!product || !cat || !sub) {
    return { title: 'Product Not Found — Orion World' }
  }

  return {
    title: `${product.name} — ${sub.name} | Orion World`,
    description: product.tagline,
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { catId, subId, productId } = await params
  const { cat, sub, product } = findProduct(catId, subId, productId)

  if (!cat || !sub || !product) {
    notFound()
  }

  const related = getRelatedProducts(catId, subId, productId)

  return (
    <ProductDetailClient
      cat={cat}
      sub={sub}
      product={product}
      related={related}
    />
  )
}
