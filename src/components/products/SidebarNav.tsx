'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Clock, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Category } from '@/data/products'

interface SidebarNavProps {
  categories: Category[]
  activeCat: string | null
  activeSub: string | null
  onSelect: (catId: string, subId: string) => void
}

export default function SidebarNav({ categories, activeCat, activeSub, onSelect }: SidebarNavProps) {
  const [openCats, setOpenCats] = useState<Set<string>>(
    () => new Set(activeCat ? [activeCat] : [categories[0]?.id ?? ''])
  )
  const [mobileOpen, setMobileOpen] = useState(false)

  // Auto-open active category when URL changes
  useEffect(() => {
    if (activeCat) {
      setOpenCats(prev => new Set([...prev, activeCat]))
    }
  }, [activeCat])

  function toggleCat(catId: string) {
    setOpenCats(prev => {
      const next = new Set(prev)
      next.has(catId) ? next.delete(catId) : next.add(catId)
      return next
    })
  }

  function handleSelect(catId: string, subId: string) {
    onSelect(catId, subId)
    setMobileOpen(false)
  }

  const activeCatLabel = activeCat
    ? categories.find(c => c.id === activeCat)?.name
    : null
  const activeSubLabel = activeSub
    ? categories.find(c => c.id === activeCat)?.subcategories?.find(s => s.id === activeSub)?.name
    : null

  const navContent = (
    <nav aria-label="Product categories" className="space-y-2">
      <div className="flex items-center justify-between mb-4 px-1">
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
          Categories
        </p>
        <Sparkles className="w-3.5 h-3.5 text-primary/40" />
      </div>
      <ul className="space-y-1.5">
        {categories.map(cat => {
          const isOpen = openCats.has(cat.id)
          const isCatActive = activeCat === cat.id

          return (
            <li key={cat.id} className="group">
              {/* Category header */}
              <button
                onClick={() => toggleCat(cat.id)}
                disabled={cat.disabled}
                className={cn(
                  'w-full flex items-center justify-between gap-2 px-3 py-3 rounded-xl text-left transition-all duration-200',
                  cat.disabled
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:bg-muted/60 active:scale-[0.98] cursor-pointer',
                  isCatActive && !cat.disabled && 'bg-muted/40 backdrop-blur-sm ring-1 ring-primary/10'
                )}
              >
                <span
                  className={cn(
                    'font-sans text-sm font-medium tracking-tight leading-snug flex-1 transition-colors',
                    isCatActive && !cat.disabled ? 'text-primary' : 'text-foreground/80 group-hover:text-foreground'
                  )}
                >
                  {cat.name}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  {cat.disabled && (
                    <span className="flex items-center gap-1 font-sans text-[10px] tracking-[0.12em] uppercase bg-muted/80 text-muted-foreground px-2 py-0.5 rounded-full">
                      <Clock className="w-2.5 h-2.5" />
                      Soon
                    </span>
                  )}
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-background/50 group-hover:bg-background transition-colors">
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 text-foreground/40 transition-all duration-300',
                        isOpen && 'rotate-180 text-primary'
                      )}
                    />
                  </div>
                </div>
              </button>

              {/* Subcategories */}
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300 ease-out',
                  isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <ul className="pl-4 mt-1 space-y-0.5 border-l border-border/60 ml-3">
                  {(cat.subcategories ?? []).map(sub => {
                    const isSubActive = activeCat === cat.id && activeSub === sub.id

                    return (
                      <li key={sub.id}>
                        <button
                          onClick={() => !cat.disabled && handleSelect(cat.id, sub.id)}
                          disabled={cat.disabled}
                          className={cn(
                            'w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-all duration-150',
                            cat.disabled
                              ? 'cursor-not-allowed opacity-40'
                              : 'hover:bg-muted/40 cursor-pointer',
                            isSubActive
                              ? 'bg-primary/5 text-primary'
                              : 'text-foreground/70'
                          )}
                        >
                          <ChevronRight
                            className={cn(
                              'w-3 h-3 shrink-0 transition-all duration-200',
                              isSubActive ? 'text-primary translate-x-0.5' : 'text-foreground/30'
                            )}
                          />
                          <span
                            className={cn(
                              'font-sans text-[13px] leading-snug transition-colors',
                              isSubActive
                                ? 'font-medium text-primary'
                                : 'group-hover:text-foreground'
                            )}
                          >
                            {sub.name}
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </nav>
  )

  return (
    <>
      {/* ─── Desktop sidebar – premium card style with scroll ────────────────── */}
      <div className="hidden md:block w-full bg-card/40 backdrop-blur-sm rounded-2xl border border-border/60 shadow-sm transition-all hover:shadow-md">
        <div className="p-5 overflow-y-auto max-h-[calc(100vh-8rem)] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border">
          {navContent}
        </div>
      </div>

      {/* ─── Mobile sticky bar + dropdown ───────────────────────── */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen(prev => !prev)}
          className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-sm transition-all active:scale-[0.99]"
        >
          <div className="flex flex-col items-start min-w-0">
            <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-muted-foreground leading-none mb-1">
              Browse
            </span>
            <span className="font-sans text-sm font-medium text-primary truncate flex items-center gap-1.5">
              {activeSubLabel ?? activeCatLabel ?? 'All Categories'}
              <Sparkles className="w-3 h-3 text-primary/50" />
            </span>
          </div>
          <ChevronDown
            className={cn(
              'w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300',
              mobileOpen && 'rotate-180 text-primary'
            )}
          />
        </button>

        {/* Mobile dropdown panel – smooth glass effect with scroll */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            mobileOpen ? 'max-h-[75vh] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="mt-2 bg-card/90 backdrop-blur-md border border-border/60 rounded-2xl shadow-xl p-5 overflow-y-auto max-h-[70vh]">
            {navContent}
          </div>
        </div>
      </div>
    </>
  )
}