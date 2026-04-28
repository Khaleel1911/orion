'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Clock } from 'lucide-react'
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
  // Mobile drawer open state
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
    ? categories.find(c => c.id === activeCat)?.subcategories.find(s => s.id === activeSub)?.name
    : null

  const navContent = (
    <nav aria-label="Product categories">
      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4 px-1">
        Categories
      </p>
      <ul className="space-y-1">
        {categories.map(cat => {
          const isOpen = openCats.has(cat.id)
          const isCatActive = activeCat === cat.id

          return (
            <li key={cat.id}>
              {/* Category header */}
              <button
                onClick={() => toggleCat(cat.id)}
                disabled={cat.disabled}
                className={cn(
                  'w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-left transition-all duration-200',
                  cat.disabled
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:bg-muted cursor-pointer',
                  isCatActive && !cat.disabled && 'bg-muted'
                )}
              >
                <span
                  className={cn(
                    'font-sans text-sm font-medium leading-snug flex-1',
                    isCatActive && !cat.disabled ? 'text-primary' : 'text-foreground/80'
                  )}
                >
                  {cat.name}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  {cat.disabled && (
                    <span className="flex items-center gap-1 font-sans text-[9px] tracking-[0.1em] uppercase bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                      <Clock className="w-2.5 h-2.5" />
                      Soon
                    </span>
                  )}
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 text-foreground/40 transition-transform duration-200',
                      isOpen && 'rotate-180'
                    )}
                  />
                </div>
              </button>

              {/* Subcategories */}
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300 ease-in-out',
                  isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <ul className="pl-3 pb-1 pt-0.5 space-y-0.5">
                  {cat.subcategories.map(sub => {
                    const isSubActive = activeCat === cat.id && activeSub === sub.id

                    return (
                      <li key={sub.id}>
                        <button
                          onClick={() => !cat.disabled && handleSelect(cat.id, sub.id)}
                          disabled={cat.disabled}
                          className={cn(
                            'w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all duration-150',
                            cat.disabled
                              ? 'cursor-not-allowed opacity-40'
                              : 'hover:bg-muted cursor-pointer',
                            isSubActive
                              ? 'bg-primary/8 border-l-2 border-primary'
                              : 'border-l-2 border-transparent'
                          )}
                        >
                          <ChevronRight
                            className={cn(
                              'w-3 h-3 shrink-0 transition-colors duration-150',
                              isSubActive ? 'text-primary' : 'text-foreground/30'
                            )}
                          />
                          <span
                            className={cn(
                              'font-sans text-[13px] leading-snug',
                              isSubActive
                                ? 'text-primary font-medium'
                                : 'text-foreground/65 hover:text-foreground/90'
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
      {/* ─── Desktop sidebar ─────────────────────────────── */}
      <div className="hidden md:block w-full">{navContent}</div>

      {/* ─── Mobile sticky bar + dropdown ───────────────── */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen(prev => !prev)}
          className="w-full flex items-center justify-between gap-3 px-4 py-3.5 bg-card border border-border rounded-2xl shadow-sm"
        >
          <div className="flex flex-col items-start min-w-0">
            <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-muted-foreground leading-none mb-0.5">
              Browse
            </span>
            <span className="font-sans text-sm font-medium text-primary truncate">
              {activeSubLabel ?? activeCatLabel ?? 'All Categories'}
            </span>
          </div>
          <ChevronDown
            className={cn(
              'w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200',
              mobileOpen && 'rotate-180'
            )}
          />
        </button>

        {/* Mobile dropdown panel */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            mobileOpen ? 'max-h-[75vh] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="mt-2 bg-card border border-border rounded-2xl shadow-lg p-4 overflow-y-auto max-h-[70vh]">
            {navContent}
          </div>
        </div>
      </div>
    </>
  )
}
