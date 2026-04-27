"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/testimonials"
import { useInView } from "@/hooks/useInView"

const EASE = "cubic-bezier(0.16,1,0.3,1)"
const CARD_GAP = 20       // px gap between cards
const AUTO_MS  = 5000     // ms between auto-advances

/* How many cards are visible at each breakpoint */
function getVisible() {
  if (typeof window === "undefined") return 3
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 3
}

export default function TestimonialSection() {
  const { ref: headerRef, inView } = useInView(0.2)
  const trackRef  = useRef<HTMLDivElement>(null)
  const timerRef  = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const [startIdx, setStartIdx]   = useState(0)       // first visible card index
  const [visible,  setVisible]    = useState(3)        // how many cards shown
  const [cardW,    setCardW]      = useState(0)        // px width of one card

  const total   = testimonials.length
  const maxStart = Math.max(0, total - visible)

  /* Measure container → compute card width */
  const measure = useCallback(() => {
    const v = getVisible()
    setVisible(v)
    if (trackRef.current) {
      const containerW = trackRef.current.offsetWidth
      setCardW((containerW - (v - 1) * CARD_GAP) / v)
    }
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [measure])

  /* Navigation */
  const goTo = useCallback((idx: number) => {
    setStartIdx(Math.min(Math.max(idx, 0), maxStart))
  }, [maxStart])

  const prev = useCallback(() => goTo(startIdx - 1), [startIdx, goTo])
  const next = useCallback(() => goTo(startIdx < maxStart ? startIdx + 1 : 0), [startIdx, maxStart, goTo])

  /* Auto-advance */
  useEffect(() => {
    if (!inView) return
    timerRef.current = setTimeout(next, AUTO_MS)
    return () => clearTimeout(timerRef.current)
  }, [startIdx, inView, next])

  const trackX = cardW > 0 ? -(startIdx * (cardW + CARD_GAP)) : 0

  /* Dot indices — one dot per snap position */
  const dotCount = maxStart + 1   // e.g. 5 cards 3-visible → 3 dots

  return (
    <section style={{ background: "#192b45" }} className="overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 md:py-20">

        {/* ── Header ── */}
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
          ref={headerRef}
        >
          <div>
            <div style={{ overflow: "hidden", marginBottom: "1rem" }}>
              <p
                className="font-body text-white/30 uppercase"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.45em",
                  transform: inView ? "translateY(0)" : "translateY(110%)",
                  transition: `transform 0.8s ${EASE}`,
                }}
              >
                What Clients Say
              </p>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h2
                className="font-heading text-white leading-tight"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3rem)",
                  transform: inView ? "translateY(0)" : "translateY(110%)",
                  transition: `transform 0.9s ${EASE} 80ms`,
                }}
              >
                Client Testimonials
              </h2>
            </div>
          </div>

          {/* Prev / Next buttons — top-right */}
          <div
            className="flex gap-3"
            style={{
              opacity: inView ? 1 : 0,
              transition: `opacity 0.7s ease 300ms`,
            }}
          >
            <NavBtn onClick={prev} disabled={startIdx === 0} dir="prev" />
            <NavBtn onClick={next} disabled={false}          dir="next" />
          </div>
        </div>

        {/* ── Track ── */}
        <div style={{ overflow: "hidden" }}>
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: `${CARD_GAP}px`,
              transform: `translateX(${trackX}px)`,
              transition: cardW > 0 ? `transform 0.55s ${EASE}` : "none",
              opacity: inView ? 1 : 0,
              willChange: "transform",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  flex: "none",
                  width: cardW > 0 ? `${cardW}px` : "100%",
                }}
              >
                <Card
                  className="h-full transition-all duration-300 group"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    borderRadius: "0",
                    boxShadow: "none",
                    cursor: "default",
                  }}
                >
                  <CardContent
                    className="flex flex-col justify-between h-full"
                    style={{ padding: "2rem" }}
                  >
                    {/* Quote mark */}
                    <span
                      className="font-heading text-white/10 leading-none select-none block mb-4"
                      style={{ fontSize: "3.5rem", lineHeight: 0.8 }}
                      aria-hidden
                    >
                      &ldquo;
                    </span>

                    {/* Quote text */}
                    <p
                      className="font-body text-white/75 leading-relaxed flex-1"
                      style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)" }}
                    >
                      {t.quote}
                    </p>

                    {/* Divider + attribution */}
                    <div className="mt-8">
                      <div
                        style={{
                          height: "1px",
                          background: "rgba(255,255,255,0.08)",
                          marginBottom: "1.25rem",
                        }}
                      />
                      <div>
                        <p
                          className="font-heading text-white"
                          style={{ fontSize: "0.9rem" }}
                        >
                          {t.author}
                        </p>
                        <p
                          className="font-body text-white/35 mt-0.5"
                          style={{ fontSize: "0.8rem", letterSpacing: "0.04em" }}
                        >
                          {t.role} · {t.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* ── Dots ── */}
        <div
          className="flex items-center justify-center gap-2 mt-8"
          style={{
            opacity: inView ? 1 : 0,
            transition: `opacity 0.6s ease 500ms`,
          }}
        >
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: i === startIdx ? "28px" : "8px",
                height: "4px",
                borderRadius: "2px",
                background: i === startIdx
                  ? "rgba(255,255,255,0.7)"
                  : "rgba(255,255,255,0.18)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: `width 0.4s ${EASE}, background 0.3s ease`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Nav arrow button ── */
function NavBtn({
  onClick,
  disabled,
  dir,
}: {
  onClick: () => void
  disabled: boolean
  dir: "prev" | "next"
}) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous" : "Next"}
      disabled={disabled}
      style={{
        width: "44px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(255,255,255,0.14)",
        background: "transparent",
        color: disabled ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.65)",
        cursor: disabled ? "not-allowed" : "pointer",
        borderColor: disabled ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.14)",
        transition: "border-color 0.25s ease, color 0.25s ease, background 0.25s ease",
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        if (disabled) return
        const el = e.currentTarget
        el.style.borderColor = "rgba(255,255,255,0.35)"
        el.style.color = "rgba(255,255,255,0.95)"
        el.style.background = "rgba(255,255,255,0.06)"
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.borderColor = disabled ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.14)"
        el.style.color = disabled ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.65)"
        el.style.background = "transparent"
      }}
    >
      {dir === "prev"
        ? <ChevronLeft style={{ width: "18px", height: "18px" }} />
        : <ChevronRight style={{ width: "18px", height: "18px" }} />
      }
    </button>
  )
}
