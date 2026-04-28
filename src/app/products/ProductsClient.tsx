'use client'

import { useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SidebarNav from '@/components/products/SidebarNav'
import ContentPanel from '@/components/products/ContentPanel'
import { categories } from '@/data/products'

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

  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground min-h-screen">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="bg-primary pt-16 md:pt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/40 mb-3">
              Orion World
            </p>
            <h1 className="font-heading text-3xl md:text-5xl text-white tracking-wide mb-3">
              Products
            </h1>
            <p className="font-body text-sm text-white/50 max-w-md leading-relaxed">
              Premium fenestration, screening, and shading systems — engineered for architectural precision.
            </p>
          </div>
        </section>

        {/* ── Thin accent line ──────────────────────────────────── */}
        <div className="h-px bg-gradient-to-r from-primary via-secondary to-transparent" />

        {/* ── Main layout ───────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-14">

          {/* Mobile: sticky category selector */}
          <div className="md:hidden mb-8 sticky top-[64px] z-30">
            <SidebarNav
              categories={categories}
              activeCat={activeCat}
              activeSub={activeSub}
              onSelect={handleSelect}
            />
          </div>

          <div className="flex gap-10 items-start">
            {/* Desktop sidebar */}
            <aside className="hidden md:block w-64 xl:w-72 flex-shrink-0 sticky top-28 self-start">
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
        </div>
      </main>

      <Footer />
    </>
  )
}
