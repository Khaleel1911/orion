'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronRight, FileText, Mail, Ruler, Shield, Thermometer, Wind } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/products/ProductCard'
import type { Category, SubCategory, Product } from '@/data/products'

interface ProductDetailClientProps {
  cat: Category
  sub: SubCategory
  product: Product
  related: Product[]
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

// Helper to map feature names to icons (customize as needed)
const getFeatureIcon = (featureName: string) => {
  const name = featureName.toLowerCase()
  if (name.includes('thermal') || name.includes('insulation')) return <Thermometer className="w-5 h-5" />
  if (name.includes('weather') || name.includes('water')) return <Wind className="w-5 h-5" />
  if (name.includes('durability') || name.includes('strength')) return <Shield className="w-5 h-5" />
  return <Ruler className="w-5 h-5" />
}

export default function ProductDetailClient({ cat, sub, product, related }: ProductDetailClientProps) {
  const productName = product.name ?? 'Unnamed Product'
  const productTagline = product.tagline ?? `${cat.name} · ${sub.name}`
  const productFeatures = product.features ?? []
  const productSpecs = product.specs ?? []
  const productCrossSectionImages = product.crossSectionImages ?? []
  const hasProductFeatures = productFeatures.length > 0
  const hasProductSpecs = productSpecs.length > 0
  const hasCrossSectionImages = productCrossSectionImages.length > 0

  // Determine hero image: use product.heroImage if available, else fallback to product.images[0] or a default gradient
  const heroImage = product.heroImage || product.images?.[0] || null

  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground min-h-screen">

        {/* ── Full‑width Hero with Image & Overlay ────────────────── */}
        <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          {heroImage ? (
            <Image
              src={heroImage}
              alt={productName}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
          )}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Breadcrumb & text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto w-full px-4 lg:px-8">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 mb-4" aria-label="Breadcrumb">
                <Link
                  href="/products"
                  className="font-sans text-[11px] text-white/60 hover:text-white/90 transition-colors"
                >
                  Products
                </Link>
                <ChevronRight className="w-3 h-3 text-white/40" />
                <Link
                  href={`/products?cat=${cat.id}&sub=${sub.id}`}
                  className="font-sans text-[11px] text-white/60 hover:text-white/90 transition-colors"
                >
                  {cat.name}
                </Link>
                <ChevronRight className="w-3 h-3 text-white/40" />
                <span className="font-sans text-[11px] text-white/80">{productName}</span>
              </nav>

              {/* Title & subtext */}
              <h1 className="font-heading text-4xl md:text-6xl text-white tracking-tight leading-tight max-w-3xl">
                {productName}
              </h1>
              <p className="font-body text-white/70 text-base md:text-lg mt-3 max-w-xl">
                {productTagline}
              </p>
            </div>
          </div>
        </section>

        {/* ── Key Features (icons + text) ───────────────────────── */}
        {hasProductFeatures && (
          <section className="max-w-7xl mx-auto px-4 lg:px-8 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Why choose this
              </p>
              <h2 className="font-heading text-xl md:text-2xl text-primary">Key Features</h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {productFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-primary shrink-0 mt-0.5">
                    {getFeatureIcon(feature)}
                  </div>
                  <p className="font-body text-sm text-foreground/80 leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* ── Specifications Table (optional) ───────────────────── */}
        {hasProductSpecs && (
          <section className="bg-muted/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14 md:py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Technical data
                </p>
                <h2 className="font-heading text-xl md:text-2xl text-primary">Specifications</h2>
              </motion.div>

              <div className="rounded-xl border border-border overflow-hidden bg-card">
                {productSpecs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex flex-col sm:flex-row sm:items-center gap-2 px-5 py-4 ${
                      i % 2 === 0 ? 'bg-muted/30' : 'bg-background'
                    }`}
                  >
                    <span className="font-sans text-xs font-semibold text-foreground w-full sm:w-1/3">
                      {spec.label}
                    </span>
                    <span className="font-sans text-sm text-foreground/80 sm:w-2/3">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Cross‑section / Related Images (optional) ─────────── */}
        {hasCrossSectionImages && (
          <section className="max-w-7xl mx-auto px-4 lg:px-8 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Technical details
              </p>
              <h2 className="font-heading text-xl md:text-2xl text-primary">Cross‑Section & Diagrams</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {productCrossSectionImages.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border">
                  <Image
                    src={img}
                    alt={`${productName} cross-section ${idx + 1}`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Interest Section with two buttons ─────────────────── */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 py-14 md:py-20">
          <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-transparent rounded-2xl border border-primary/20 p-8 md:p-12 text-center">
            <h2 className="font-heading text-2xl md:text-3xl text-primary mb-3">
              Interested in {productName}?
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto mb-8">
              Get detailed specifications, pricing, and project consultation from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-sans text-[11px] tracking-[0.18em] uppercase px-8 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-sm"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
              {product.brochureUrl && (
                <Link
                  href={product.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-sans text-[11px] tracking-[0.18em] uppercase px-8 py-3.5 border border-primary/30 text-primary hover:border-primary hover:bg-primary/5 transition-all rounded-sm"
                >
                  <FileText className="w-4 h-4" />
                  Download Brochure
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* ── Related Products (if any) ─────────────────────────── */}
        {related.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 lg:px-8 py-14 md:py-20 border-t border-border">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Also in {sub.name}
                </p>
                <h2 className="font-heading text-xl md:text-2xl text-primary">Related Products</h2>
              </div>
              <Link
                href={`/products?cat=${cat.id}&sub=${sub.id}`}
                className="hidden sm:flex items-center gap-1.5 font-sans text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                View all
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className={`grid gap-5 ${
              related.length === 1
                ? 'grid-cols-1 max-w-sm'
                : related.length === 2
                ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              {related.map(p => (
                <ProductCard key={p.id} product={p} catId={cat.id} subId={sub.id} />
              ))}
            </div>
          </section>
        )}

      </main>

      <Footer />
    </>
  )
}