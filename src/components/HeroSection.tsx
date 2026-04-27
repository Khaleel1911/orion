"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarDays } from "lucide-react"

const HERO_IMAGES = [
  "/hero/pexels-artbovich-8134818.jpg",
  "/hero/pexels-clubhouseconvos-13620065.jpg",
  "/hero/pexels-clubhouseconvos-13620069.jpg",
  "/hero/pexels-naimbic-2030037.jpg",
  "/hero/pexels-worldofmtc-36519371.jpg",
]

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveImage((p) => (p + 1) % HERO_IMAGES.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const scrollable = containerRef.current.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      const p = Math.min(Math.max(scrolled / scrollable, 0), 1)
      setProgress(p)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const doorProgress = Math.min(progress / 0.75, 1)
  const contentOpacity = Math.max((progress - 0.2) / 0.55, 0)
  const scrollHintOpacity = Math.max(1 - progress * 8, 0)

  /* ── Glass engraving shared style ── */
  const engravingStyle: React.CSSProperties = {
    fontFamily: "var(--font-cinzel)",
    fontSize: "clamp(1rem, 5vw, 3.5rem)",
    letterSpacing: "0.45em",
    fontWeight: 400,
    color: "transparent",
    WebkitTextStroke: "0.5px rgba(255,255,255,0.28)",
    textShadow:
      "0 1px 0 rgba(255,255,255,0.22), 0 -1px 0 rgba(0,0,0,0.12), 0 0 40px rgba(255,255,255,0.06)",
    userSelect: "none",
    pointerEvents: "none",
    textTransform: "uppercase",
  }

  return (
    <div ref={containerRef} style={{ height: "260vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── Background carousel ── */}
        <div className="absolute inset-0">
          {HERO_IMAGES.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at center, rgba(10,18,32,0.15) 0%, rgba(5,10,20,0.65) 75%),
                    linear-gradient(to bottom, rgba(6,12,22,0.55), rgba(4,8,16,0.85))
                  `,
                }}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
              />
            </div>
          ))}
          {/* Very light dark wash — let images breathe */}
          <div className="absolute inset-0" style={{ background: "rgba(8,16,28,0.22)" }} />
        </div>

        {/* ── Left door ── */}
        <div
          className="absolute top-0 left-0 h-full z-20"
          style={{
            width: "50.5%",
            transform: `translateX(-${doorProgress * 105}%)`,
            willChange: "transform",
          }}
        >
          <div
            className="w-full h-full relative overflow-hidden flex items-center justify-center"
            style={{
              backdropFilter: "blur(28px) brightness(0.82) saturate(0.55)",
              WebkitBackdropFilter: "blur(28px) brightness(0.82) saturate(0.55)",
              background:
                "linear-gradient(110deg, rgba(25,43,69,0.38) 0%, rgba(20,36,60,0.28) 100%)",
              borderRight: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            {/* Subtle inner frame */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "28px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            />

            {/* Glass engraving: "ORION" */}
            <div
              className="absolute bottom-1/3 right-8 flex items-end"
              style={{ writingMode: "horizontal-tb" }}
            >
              <span style={engravingStyle}>ORION</span>
            </div>

            {/* Door handle */}
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2"
              style={{
                width: "5px",
                height: "64px",
                borderRadius: "3px",
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.28), rgba(255,255,255,0.08))",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 0 16px rgba(255,255,255,0.06)",
              }}
            />

            {/* Edge light catch */}
            <div
              className="absolute right-0 top-0 h-full pointer-events-none"
              style={{
                width: "1px",
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.25) 70%, transparent)",
              }}
            />
          </div>
        </div>

        {/* ── Right door ── */}
        <div
          className="absolute top-0 right-0 h-full z-20"
          style={{
            width: "50.5%",
            transform: `translateX(${doorProgress * 105}%)`,
            willChange: "transform",
          }}
        >
          <div
            className="w-full h-full relative overflow-hidden flex items-center justify-center"
            style={{
              backdropFilter: "blur(28px) brightness(0.82) saturate(0.55)",
              WebkitBackdropFilter: "blur(28px) brightness(0.82) saturate(0.55)",
              background:
                "linear-gradient(250deg, rgba(25,43,69,0.38) 0%, rgba(20,36,60,0.28) 100%)",
              borderLeft: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            {/* Subtle inner frame */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "28px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            />

            {/* Glass engraving: "WORLD" */}
            <div
              className="absolute bottom-1/3 left-8 flex items-end"
              style={{ writingMode: "horizontal-tb" }}
            >
              <span style={engravingStyle}>WORLD</span>
            </div>

            {/* Door handle */}
            <div
              className="absolute left-4 top-1/2 -translate-y-1/2"
              style={{
                width: "5px",
                height: "64px",
                borderRadius: "3px",
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.28), rgba(255,255,255,0.08))",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 0 16px rgba(255,255,255,0.06)",
              }}
            />

            {/* Edge light catch */}
            <div
              className="absolute left-0 top-0 h-full pointer-events-none"
              style={{
                width: "1px",
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.25) 70%, transparent)",
              }}
            />
          </div>
        </div>

        {/* ── Center seam ── */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.18) 20%, rgba(255,255,255,0.18) 80%, transparent 100%)",
            opacity: 1 - doorProgress,
          }}
        />

        {/* ── Hero content ── */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
          style={{
            opacity: contentOpacity,
            transform: `scale(${0.97 + doorProgress * 0.03})`,
            transition: "opacity 0.1s linear",
          }}
        >
          <div className="text-center text-white px-6 max-w-5xl mx-auto pointer-events-auto">
            <p
              className="font-body text-white/50 uppercase block mb-6"
              style={{ fontSize: "10px", letterSpacing: "0.5em" }}
            >
              Orion World
            </p>
            <h1
              className="font-heading text-white leading-none mb-8"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)", letterSpacing: "0.05em" }}
            >
              Frame Your World
            </h1>
            <p
              className="font-body text-white/65 max-w-lg mx-auto mb-12 leading-loose"
              style={{ fontSize: "1.0625rem" }}
            >
              Engineered window and door systems designed to bring structure, clarity, and
              performance to modern spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/92 font-sans font-medium h-13 px-10 rounded-none tracking-widest uppercase text-xs"
                style={{ letterSpacing: "0.18em" }}
              >
                View Collection
                <ArrowRight className="ml-3 w-3.5 h-3.5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/8 hover:border-white/70 font-sans font-medium h-13 px-10 rounded-none tracking-widest uppercase text-xs bg-transparent"
                style={{ letterSpacing: "0.18em" }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* ── Floating consultation CTA ── */}
        <div
          className="absolute bottom-8 right-8 z-30"
          style={{ opacity: Math.min(contentOpacity * 2, 1) }}
        >
        </div>

        {/* ── Scroll hint ── */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
          style={{ opacity: scrollHintOpacity }}
        >
          <span
            className="font-body text-white/40 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.35em" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
            }}
          />
        </div>
      </div>
    </div>
  )
}
