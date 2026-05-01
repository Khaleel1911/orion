"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FaQuoteLeft, FaStar } from "react-icons/fa6"
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
    <section className="relative overflow-hidden bg-primary">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(111,175,216,0.18), transparent 38%), radial-gradient(circle at 80% 100%, rgba(111,175,216,0.1), transparent 36%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 py-14 md:py-20">

        {/* ── Header ── */}
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-14"
          ref={headerRef}
        >
          <div>
            <div style={{ overflow: "hidden", marginBottom: "1rem" }}>
              <p
                className="font-body text-white/50 uppercase"
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
            <p
              className="mt-3 text-white/65 max-w-md"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                opacity: inView ? 1 : 0,
                transition: "opacity 0.8s ease 260ms",
              }}
            >
              Real feedback from homeowners, architects, and project teams who trusted Orion World.
            </p>
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
              transformOrigin: "left center",
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
                <article
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.05] p-6 md:p-7 transition-all duration-300"
                  style={{
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    boxShadow: "0 18px 45px rgba(0,0,0,0.2)",
                    cursor: "default",
                  }}
                >
                  <div
                    className="absolute -top-14 -right-10 h-36 w-36 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(111,175,216,0.3), rgba(111,175,216,0))" }}
                  />

                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          {Array.from({ length: 5 }).map((_, starIdx) => (
                            <FaStar key={starIdx} className="h-3.5 w-3.5 text-[#6fafd8]" />
                          ))}
                        </div>
                        <FaQuoteLeft className="h-5 w-5 text-white/35" />
                      </div>

                      <p
                        className="font-body text-white/80 leading-relaxed"
                        style={{ fontSize: "clamp(0.92rem, 1.6vw, 1.02rem)" }}
                      >
                        {t.quote}
                      </p>
                    </div>

                    <div className="mt-8">
                      <div
                        style={{
                          height: "1px",
                          background: "linear-gradient(to right, rgba(255,255,255,0.22), rgba(255,255,255,0.06))",
                          marginBottom: "1rem",
                        }}
                      />

                      <div className="flex items-center gap-3">
                        <div
                          className="h-10 w-10 rounded-full flex items-center justify-center text-white"
                          style={{
                            background: "rgba(111,175,216,0.2)",
                            border: "1px solid rgba(111,175,216,0.35)",
                            fontFamily: "var(--font-poppins), Poppins, sans-serif",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                          }}
                        >
                          {t.author
                            .split(" ")
                            .filter(Boolean)
                            .slice(0, 2)
                            .map((w) => w[0]?.toUpperCase())
                            .join("")}
                        </div>
                        <div>
                          <p
                            className="font-heading text-white"
                            style={{ fontSize: "0.95rem" }}
                          >
                            {t.author}
                          </p>
                          <p
                            className="font-body text-white/45 mt-0.5"
                            style={{ fontSize: "0.8rem", letterSpacing: "0.04em" }}
                          >
                            {t.role} · {t.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
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
                width: i === startIdx ? "24px" : "8px",
                height: "8px",
                borderRadius: "999px",
                background: i === startIdx
                  ? "#6fafd8"
                  : "rgba(255,255,255,0.28)",
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
        width: "46px",
        height: "46px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(255,255,255,0.22)",
        background: "rgba(255,255,255,0.04)",
        color: disabled ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.78)",
        cursor: disabled ? "not-allowed" : "pointer",
        borderColor: disabled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.22)",
        transition: "border-color 0.25s ease, color 0.25s ease, background 0.25s ease",
        flexShrink: 0,
        borderRadius: "999px",
      }}
      onMouseEnter={e => {
        if (disabled) return
        const el = e.currentTarget
        el.style.borderColor = "rgba(111,175,216,0.75)"
        el.style.color = "rgba(255,255,255,0.95)"
        el.style.background = "rgba(111,175,216,0.2)"
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.borderColor = disabled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.22)"
        el.style.color = disabled ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.78)"
        el.style.background = "rgba(255,255,255,0.04)"
      }}
    >
      {dir === "prev"
        ? <ChevronLeft style={{ width: "18px", height: "18px" }} />
        : <ChevronRight style={{ width: "18px", height: "18px" }} />
      }
    </button>
  )
}
