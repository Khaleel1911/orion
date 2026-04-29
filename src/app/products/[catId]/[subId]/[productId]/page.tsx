import { notFound } from 'next/navigation'
import ProductDetailClient from '@/components/products/ProductDetailClient'
import { findProduct, getRelatedProducts } from '@/data/products'

interface ProductPageProps {
  params: Promise<{
    catId: string
    subId: string
    productId: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { catId, subId, productId } = await params
  const { cat, sub, product } = findProduct(catId, subId, productId)

  if (!cat || !sub || !product) {
    notFound()
  }

  const related = getRelatedProducts(catId, subId, productId)
  return <ProductDetailClient cat={cat} sub={sub} product={product} related={related} />
}