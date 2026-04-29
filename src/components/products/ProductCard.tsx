'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
  catId: string
  subId: string
}

export default function ProductCard({ product, catId, subId }: ProductCardProps) {
  const href = `/products/${catId}/${subId}/${product.id}`
  const productName = product.name ?? 'Unnamed Product'
  const highlights = product.highlights ?? []
  const coverImage =
    product.cardCoverImage ?? product.crossSectionImages?.[0] ?? null

  return (
    <motion.article
      className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-sm"
      whileHover={{ y: -5, boxShadow: '0 20px 40px -12px rgba(25, 43, 69, 0.18)' }}
      transition={{ duration: 0.25 }}
    >
      {/* Gradient image area */}
      <Link href={href} className="block">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={`${productName} cover`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{ background: product.gradient ?? 'linear-gradient(135deg, #192b45 0%, #2d6799 100%)' }}
            />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.09)_0%,transparent_65%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/20 to-transparent" />
          {product.badge && (
            <span className="absolute top-3 right-3 font-sans text-[10px] tracking-[0.12em] uppercase bg-white/15 backdrop-blur-sm text-white border border-white/20 px-2.5 py-1 rounded-full">
              {product.badge}
            </span>
          )}
          {/* Hover arrow */}
          <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/0 group-hover:bg-white/15 transition-all duration-300 flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading text-[11px] tracking-[0.18em] uppercase text-primary mb-1.5 leading-snug">
          {productName}
        </h3>
        {product.tagline && (
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
            {product.tagline}
          </p>
        )}

        {/* Highlights */}
        {highlights.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {highlights.map((h, i) => (
              <span
                key={i}
                className="font-sans text-[11px] tracking-wide bg-muted text-foreground/70 px-3 py-1 rounded-full"
              >
                {h}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <Link
          href={href}
          className="w-full flex items-center justify-center gap-1.5 font-sans text-[11px] tracking-[0.15em] uppercase py-2.5 border border-primary/25 text-primary/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 rounded-sm mt-auto"
        >
          View Details
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </motion.article>
  )
}
