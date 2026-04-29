'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Category } from '@/data/products'
import ProductCard from './ProductCard'

interface ContentPanelProps {
  categories: Category[]
  activeCat: string | null
  activeSub: string | null
  onSelect: (catId: string, subId: string) => void
}

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function ContentPanel({ categories, activeCat, activeSub, onSelect }: ContentPanelProps) {
  const cat = categories.find(c => c.id === activeCat)
  const sub = cat?.subcategories?.find(s => s.id === activeSub)

  // ─── Welcome / landing state ───────────────────────────────────────
  if (!cat || !sub) {
    return (
      <motion.div
        key="welcome"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Intro */}
        <div className="mb-10">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Our Range
          </p>
          <h2 className="font-heading text-2xl md:text-3xl text-primary mb-3">
            Explore the Collection
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-lg leading-relaxed">
            Select a category from the sidebar to explore Orion World's full range of premium fenestration, screening, and shading systems.
          </p>
        </div>

        {/* Category cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {categories.map(c => (
            <motion.button
              key={c.id}
              variants={fadeIn}
              onClick={() => {
                if (!c.disabled && c.subcategories?.[0]) {
                  onSelect(c.id, c.subcategories[0].id)
                }
              }}
              disabled={c.disabled}
              className={`group relative text-left rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ${
                c.disabled
                  ? 'opacity-45 cursor-not-allowed'
                  : 'hover:shadow-md hover:border-primary/20 cursor-pointer'
              }`}
            >
              {c.disabled && (
                <span className="absolute top-4 right-4 font-sans text-[9px] tracking-[0.15em] uppercase bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-primary mb-2 leading-snug pr-20">
                {c.name}
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {c.description}
              </p>
              {!c.disabled && (
                <span className="font-sans text-[11px] tracking-[0.12em] uppercase text-primary/60 group-hover:text-primary flex items-center gap-1.5 transition-colors duration-200">
                  Browse
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    )
  }

  // ─── Subcategory products view ─────────────────────────────────────
  const products = sub.products ?? []
  const hasProducts = products.length > 0

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${activeCat}-${activeSub}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35 }}
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-sans text-xs text-muted-foreground">{cat.name}</span>
          <span className="text-border text-xs">/</span>
          <span className="font-sans text-xs text-primary font-medium">{sub.name}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h2 className="font-heading text-2xl md:text-3xl text-primary mb-3 leading-tight">
            {sub.name}
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-xl leading-relaxed">
            {sub.description}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Products grid – always two columns from md upwards, one column on mobile */}
        {hasProducts ? (
           <motion.div
    variants={stagger}
    initial="hidden"
    animate="visible"
    className="grid grid-cols-1 lg:grid-cols-2 gap-5"
  >
    {products.map(product => (
      <motion.div key={product.id} variants={fadeIn}>
        <ProductCard product={product} catId={cat.id} subId={sub.id} />
      </motion.div>
    ))}
  </motion.div>
        ) : (
          // Coming soon state (for Future category)
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-5">
              <span className="font-heading text-lg text-muted-foreground">✦</span>
            </div>
            <h3 className="font-heading text-base tracking-wider text-primary mb-2">
              Coming Soon
            </h3>
            <p className="font-body text-sm text-muted-foreground max-w-xs leading-relaxed">
              This product line is currently in development. Stay tuned for updates from Orion World.
            </p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}