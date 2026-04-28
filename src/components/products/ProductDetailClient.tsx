'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react'
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function ProductDetailClient({ cat, sub, product, related }: ProductDetailClientProps) {
  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground min-h-screen">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="bg-primary pt-16 md:pt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-12 md:pb-16">

            {/* Back + breadcrumb row */}
            <div className="flex items-center gap-3 mb-8">
              <Link
                href={`/products?cat=${cat.id}&sub=${sub.id}`}
                className="flex items-center gap-1.5 font-sans text-[11px] tracking-[0.12em] uppercase text-white/40 hover:text-white/80 transition-colors duration-200"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </Link>
              <span className="text-white/20 text-xs">|</span>
              <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
                <Link
                  href="/products"
                  className="font-sans text-[11px] text-white/40 hover:text-white/70 transition-colors duration-200"
                >
                  Products
                </Link>
                <ChevronRight className="w-3 h-3 text-white/20" />
                <Link
                  href={`/products?cat=${cat.id}&sub=${sub.id}`}
                  className="font-sans text-[11px] text-white/40 hover:text-white/70 transition-colors duration-200"
                >
                  {cat.name}
                </Link>
                <ChevronRight className="w-3 h-3 text-white/20" />
                <Link
                  href={`/products?cat=${cat.id}&sub=${sub.id}`}
                  className="font-sans text-[11px] text-white/40 hover:text-white/70 transition-colors duration-200"
                >
                  {sub.name}
                </Link>
                <ChevronRight className="w-3 h-3 text-white/20" />
                <span className="font-sans text-[11px] text-white/75">{product.name}</span>
              </nav>
            </div>

            {/* Product title block */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                {product.badge && (
                  <span className="inline-block font-sans text-[10px] tracking-[0.18em] uppercase bg-white/10 border border-white/15 text-white/70 px-3 py-1 rounded-full mb-3">
                    {product.badge}
                  </span>
                )}
                <h1 className="font-heading text-3xl md:text-5xl text-white tracking-wide leading-tight mb-2">
                  {product.name}
                </h1>
                <p className="font-body text-sm text-white/50">
                  {cat.name} &nbsp;·&nbsp; {sub.name}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="font-sans text-[11px] tracking-wide bg-white/10 border border-white/15 text-white/75 px-3 py-1.5 rounded-full"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accent line */}
        <div className="h-px bg-gradient-to-r from-primary via-secondary to-transparent" />

        {/* ── Main two-column section ───────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16"
          >
            {/* Left: Visual */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              {/* Gradient visual */}
              <div
                className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative"
                style={{ background: product.gradient }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.09)_0%,transparent_60%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />
                {product.badge && (
                  <span className="absolute top-4 right-4 font-sans text-xs tracking-[0.12em] uppercase bg-white/15 backdrop-blur-sm text-white border border-white/20 px-3 py-1.5 rounded-full">
                    {product.badge}
                  </span>
                )}
                {/* Subtle orion brand mark */}
                <div className="absolute bottom-5 left-5">
                  <p className="font-heading text-[10px] tracking-[0.25em] uppercase text-white/30">
                    Orion World
                  </p>
                </div>
              </div>

              {/* Highlights chips below visual */}
              <div className="flex flex-wrap gap-2 mt-4">
                {product.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="font-sans text-xs tracking-wide bg-muted text-foreground/70 px-4 py-1.5 rounded-full"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: Info */}
            <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-8">

              {/* Description */}
              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Overview
                </p>
                <p className="font-body text-sm text-foreground/75 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Specs table */}
              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Specifications
                </p>
                <div className="rounded-xl border border-border overflow-hidden">
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-4 px-4 py-3 ${
                        i % 2 === 0 ? 'bg-muted/60' : 'bg-background'
                      }`}
                    >
                      <span className="font-sans text-[11px] tracking-wide text-muted-foreground w-2/5 shrink-0 pt-px">
                        {spec.label}
                      </span>
                      <span className="font-sans text-[12px] text-foreground/85 font-medium leading-snug">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href="/contact"
                  className="w-full text-center font-sans text-[11px] tracking-[0.18em] uppercase py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 rounded-sm"
                >
                  Request a Quote
                </Link>
                <Link
                  href={`/products?cat=${cat.id}&sub=${sub.id}`}
                  className="w-full text-center font-sans text-[11px] tracking-[0.18em] uppercase py-3 border border-primary/25 text-primary/80 hover:border-primary hover:text-primary transition-all duration-200 rounded-sm"
                >
                  View {sub.name}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Features section ──────────────────────────────────── */}
        <section className="bg-muted/50 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                What sets it apart
              </p>
              <h2 className="font-heading text-xl md:text-2xl text-primary">
                Key Features
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {product.features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-foreground/75 leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Related products ──────────────────────────────────── */}
        {related.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-end justify-between mb-10"
            >
              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Also in {sub.name}
                </p>
                <h2 className="font-heading text-xl md:text-2xl text-primary">
                  Related Products
                </h2>
              </div>
              <Link
                href={`/products?cat=${cat.id}&sub=${sub.id}`}
                className="hidden sm:flex items-center gap-1.5 font-sans text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                View all
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`grid gap-5 ${
                related.length === 1
                  ? 'grid-cols-1 max-w-sm'
                  : related.length === 2
                  ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {related.map(p => (
                <motion.div key={p.id} variants={fadeUp}>
                  <ProductCard product={p} catId={cat.id} subId={sub.id} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* ── CTA banner ────────────────────────────────────────── */}
        <section className="bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-heading text-xl md:text-2xl text-white mb-2">
                Interested in {product.name}?
              </h2>
              <p className="font-body text-sm text-white/50 max-w-md">
                Contact our team for technical specifications, pricing, and project consultation.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap shrink-0">
              <Link
                href="/contact"
                className="font-sans text-[11px] tracking-[0.18em] uppercase px-7 py-3.5 bg-white text-primary hover:bg-white/90 transition-colors duration-200 rounded-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="font-sans text-[11px] tracking-[0.18em] uppercase px-7 py-3.5 border border-white/25 text-white/80 hover:border-white/60 hover:text-white transition-all duration-200 rounded-sm"
              >
                All Products
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
