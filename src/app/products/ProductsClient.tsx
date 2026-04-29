'use client'

import { useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SidebarNav from '@/components/products/SidebarNav'
import ContentPanel from '@/components/products/ContentPanel'
import { categories } from '@/data/products'

// ─── Category image map ──────────────────────────────────────────────────────
const CATEGORY_IMAGES: Record<string, string> = {
  'windows-doors': '/images/categories/aluminium-windows-doors.avif',
  'upvc':      '/images/categories/upvc-systems.avif',
  'skylight':         '/images/categories/skylights.avif',
  'screens':    '/images/categories/insect-screens.avif',
  'blinds':'/images/categories/outdoor-structures.avif',
  'future':'/images/categories/outdoor-structures.avif'
}

// ─── Category card ───────────────────────────────────────────────────────────
function CategoryCard({
  category,
  onSelect,
}: {
  category: (typeof categories)[number]
  onSelect: (catId: string, subId: string) => void
}) {
  const firstSubId = category.subcategories?.[0]?.id ?? ''
  const imgSrc = CATEGORY_IMAGES[category.id] ?? null
  const canOpenCategory = !category.disabled && Boolean(firstSubId)

  return (
    <button
      onClick={() => {
        if (canOpenCategory) {
          onSelect(category.id, firstSubId)
        }
      }}
      disabled={!canOpenCategory}
      className="group relative w-full text-left overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`View ${category.name}`}
    >
      <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
        <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
          <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-white/50 mb-2 translate-y-1 transition-all duration-500 group-hover:text-white/70">
            Orion World
          </p>
          <h2 className="font-heading text-2xl md:text-3xl text-white tracking-wide leading-tight">
            {category.name}
          </h2>
          {category.description && (
            <p className="font-body text-xs text-white/55 mt-2 max-w-xs leading-relaxed line-clamp-2 transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
              {category.description}
            </p>
          )}
          <div className="mt-5 flex items-center gap-2 text-white/70 group-hover:text-white transition-colors duration-300">
            <span className="font-sans text-[10px] tracking-[0.22em] uppercase">
              Explore
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/10 pointer-events-none" />
    </button>
  )
}

// ─── Home grid ───────────────────────────────────────────────────────────────
function CategoryGrid({
  onSelect,
}: {
  onSelect: (catId: string, subId: string) => void
}) {
  return (
    <section className="py-6 md:py-10">
      <div className="mb-8 md:mb-10">
        <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-2">
          Browse by category
        </p>
        <div className="h-px w-12 bg-primary" />
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ProductsClient() {
  const router = useRouter()
  const params = useSearchParams()

  const activeCat = params.get('cat')
  const activeSub = params.get('sub')

  const handleSelect = useCallback(
    (catId: string, subId: string) => {
      router.push(`/products?cat=${catId}&sub=${subId}`, { scroll: false })
    },
    [router]
  )

  const showGrid = !activeCat

  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground min-h-screen">
        {/* Hero */}
        <section className="bg-primary pt-16 md:pt-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-16">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/40 mb-3">
              Orion World
            </p>
            <h1 className="font-heading text-3xl md:text-5xl text-white tracking-wide mb-3">
              Products
            </h1>
            <p className="font-body text-sm text-white/50 max-w-md leading-relaxed">
              Premium fenestration, screening, and shading systems — engineered
              for architectural precision.
            </p>
          </div>
        </section>

        {/* Accent line */}
        <div className="h-px bg-gradient-to-r from-primary via-secondary to-transparent" />

        {/* Content area */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 md:py-14">
          {showGrid ? (
            <CategoryGrid onSelect={handleSelect} />
          ) : (
            <>
              <button
                onClick={() => router.push('/products', { scroll: false })}
                className="group mb-8 flex items-center gap-2 font-sans text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M17 10a.75.75 0 0 1-.75.75H6.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L6.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                    clipRule="evenodd"
                  />
                </svg>
                All categories
              </button>

              {/* Mobile sticky nav */}
              <div className="md:hidden mb-8 sticky top-[64px] z-30">
                <SidebarNav
                  categories={categories}
                  activeCat={activeCat}
                  activeSub={activeSub}
                  onSelect={handleSelect}
                />
              </div>

              {/* Two-column layout with wider sidebar & reduced gap */}
              <div className="flex gap-5 items-start">
                {/* Desktop sidebar - wider */}
                <aside className="hidden md:block w-80 xl:w-96 flex-shrink-0 sticky top-28 self-start">
                  <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
                    <SidebarNav
                      categories={categories}
                      activeCat={activeCat}
                      activeSub={activeSub}
                      onSelect={handleSelect}
                    />
                  </div>
                </aside>

                {/* Content panel */}
                <div className="flex-1 min-w-0">
                  <ContentPanel
                    categories={categories}
                    activeCat={activeCat}
                    activeSub={activeSub}
                    onSelect={handleSelect}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}