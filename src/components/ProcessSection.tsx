"use client"

import { useRef, useState, useEffect } from "react"

const STEPS = [
  { n: "01", title: "Free Consultation", desc: "Share your stage, orientation, noise conditions, and budget with us. Duration: 30-45 minutes, free." },
  { n: "02", title: "Site Audit & Measurement", desc: "Our team measures every opening post-plaster and records sun, wind, and acoustic needs. Free visit." },
  { n: "03", title: "Written Specification", desc: "You receive opening-wise material, profile, glass, and hardware specs in writing before production." },
  { n: "04", title: "In-House Manufacturing", desc: "Frames are built in our Raipur facility to approved specs with full QC and no subcontracting." },
  { n: "05", title: "Precision Installation", desc: "Our trained installers execute sealing, alignment, drainage, and hardware calibration with inspection." },
  { n: "06", title: "AMC & Aftercare", desc: "From Year 1 onward, AMC support includes calibration, seal checks, cleaning, and service response." },
]

const SP  = "cubic-bezier(0.16,1,0.3,1)"
const BNC = "cubic-bezier(0.34,1.56,0.64,1)"

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [go, setGo]   = useState(false)
  const [hov, setHov] = useState<number | null>(null)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setGo(true); obs.disconnect() }
    }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="bg-background overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-14 md:py-20">

        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-12 md:mb-16">
          <div>
            <p
              className="text-[9px] tracking-[0.5em] uppercase text-muted-foreground mb-2"
              style={{
                opacity: go ? 1 : 0,
                transform: go ? "none" : "translateY(6px)",
                transition: `opacity .6s ${SP}, transform .6s ${SP}`,
              }}
            >
              Your Journey With Us
            </p>
            <h2
              className="font-heading text-3xl md:text-4xl font-medium text-primary leading-none"
              style={{
                opacity: go ? 1 : 0,
                transform: go ? "none" : "translateY(24px)",
                transition: `opacity .9s ${SP} 100ms, transform 1s ${SP} 100ms`,
              }}
            >
              One company. Every step.
            </h2>
          </div>
          <p
            className="font-body text-xs text-muted-foreground text-right leading-relaxed max-w-[220px] hidden sm:block"
            style={{
              opacity: go ? 1 : 0,
              transition: `opacity .8s ${SP} 300ms`,
            }}
          >
            From first consultation to long-term aftercare, one team handles every opening.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Animated horizontal line — desktop */}
          <div className="hidden sm:block absolute left-[calc(8.33%+16px)] right-[calc(8.33%+16px)] top-[21px] h-px overflow-hidden">
            <div
              className="h-full bg-border origin-left"
              style={{
                transform: go ? "scaleX(1)" : "scaleX(0)",
                transition: `transform 1s ${SP} 600ms`,
              }}
            />
          </div>

          {/* Vertical line — mobile */}
          <div className="sm:hidden absolute left-[22px] top-[48px] bottom-8 w-px overflow-hidden">
            <div
              className="w-full bg-border origin-top"
              style={{
                transform: go ? "scaleY(1)" : "scaleY(0)",
                transition: `transform .8s ${SP} 500ms`,
                height: "100%",
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-y-2 sm:gap-y-3 lg:gap-y-4 lg:gap-x-3 xl:gap-x-4">
            {STEPS.map(({ n, title, desc }, i) => {
              const isHov = hov === i
              const delay = 320 + i * 170

              return (
                <div
                  key={n}
                  onMouseEnter={() => setHov(i)}
                  onMouseLeave={() => setHov(null)}
                  className="flex flex-row sm:flex-col sm:items-center gap-5 sm:gap-0 pb-8 sm:pb-0 cursor-default lg:px-2"
                  style={{
                    opacity: go ? 1 : 0,
                    transform: go ? "translateY(0)" : "translateY(110px)",
                    transition: `opacity .55s ${SP} ${delay}ms, transform .9s ${SP} ${delay}ms`,
                  }}
                >
                  {/* Circle */}
                  <div
                    className="shrink-0 w-14 h-14 rounded-full border-2 flex items-center justify-center z-10 relative"
                    style={{
                      background: isHov ? "var(--primary)" : "var(--background)",
                      borderColor: isHov ? "var(--primary)" : "var(--border)",
                      transform: go
                        ? isHov ? "scale(1.1)" : "scale(1)"
                        : "scale(0)",
                      boxShadow: isHov
                        ? "0 0 0 5px color-mix(in srgb, var(--primary) 12%, transparent)"
                        : "0 0 0 0px transparent",
                      transition: `background .3s, border-color .3s, transform .55s ${BNC} ${delay + 60}ms, box-shadow .4s ease`,
                    }}
                  >
                    <span
                      className="text-[10px] font-medium tracking-widest"
                      style={{
                        color: isHov ? "var(--primary-foreground)" : "var(--muted-foreground)",
                        transition: "color .3s",
                      }}
                    >
                      {n}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className="sm:mt-5 sm:text-center px-1"
                    style={{
                      transform: go ? "none" : "translateY(10px)",
                      transition: `transform .6s ${SP} ${delay + 140}ms`,
                    }}
                  >
                    <h3
                      className="font-heading text-sm md:text-base font-medium mb-1.5 transition-colors duration-300"
                      style={{ color: isHov ? "var(--secondary)" : "var(--primary)" }}
                    >
                      {title}
                    </h3>
                    <p className="font-body text-xs leading-relaxed text-muted-foreground sm:max-w-[170px] sm:mx-auto">
                      {desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}