"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MousePointer2 } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import HeroEnquiryModal from "@/components/HeroEnquiryModal"

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
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

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

  useEffect(() => {
    setIsClient(true)
  }, [])

  const doorProgress = Math.min(progress / 0.75, 1)
  const contentOpacity = Math.max((progress - 0.2) / 0.55, 0)
  const scrollHintOpacity = Math.max(1 - progress * 8, 0)
  const quickWhatsappMessage = encodeURIComponent(
    "Hello! I would like to know more about Orion World windows and doors."
  )

  const floatingCtas = (
    <>
      {/* ── Enquire badge (right center) ── */}
      <button
        type="button"
        onClick={() => setIsEnquiryOpen(true)}
        className="fixed right-0 top-1/2 z-[2147483000] -translate-y-1/2 hidden sm:flex items-center rounded-l-xl border border-r-0 border-[#2d6799]/55 bg-[#0c1624]/95 px-2 py-2 text-white/90 transition-colors hover:bg-[#12243a]"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          letterSpacing: "0.18em",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
        }}
      >
        <span className="text-[10px] font-medium uppercase">Enquire Now</span>
      </button>

      {/* ── WhatsApp quick contact ── */}
      <a
        href={`https://wa.me/917024999199?text=${quickWhatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-6 z-[2147483000] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-[22px] w-[22px]" />
      </a>

      {/* ── Mobile Enquire button ── */}
      <button
        type="button"
        onClick={() => setIsEnquiryOpen(true)}
        className="fixed right-0 top-1/2 z-[2147483000] -translate-y-1/2 sm:hidden flex items-center rounded-l-lg border border-r-0 border-[#2d6799]/55 bg-[#0c1624]/95 px-2 py-3 text-[9px] uppercase tracking-[0.18em] text-white/90"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
        }}
      >
        Enquire
      </button>
    </>
  )

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
              className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
              style={{
                opacity: i === activeImage ? 1 : 0,
                zIndex: i === activeImage ? 1 : 0,
                background: `
                  radial-gradient(circle at center, rgba(10,18,32,0.12) 18%, rgba(4,8,16,0.72) 72%, rgba(3,6,12,0.86) 100%),
                  linear-gradient(to bottom, rgba(6,12,22,0.62), rgba(4,8,16,0.9))
                `,
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                style={{ filter: "brightness(0.5)" }}
                priority={i === 0}
                sizes="100vw"
              />
            </div>
          ))}
          {/* Global vignette + dark wash for text readability */}
          <div
            className="absolute inset-0"
            style={{
              zIndex: 2,
              background: `
                linear-gradient(rgba(4,8,16,0.56), rgba(4,8,16,0.56)),
                radial-gradient(circle at center, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.24) 74%, rgba(0,0,0,0.36) 100%)
              `,
            }}
          />
        </div>

        {/* ── Single sliding door ── */}
        <div
          className="absolute inset-0 z-20"
          style={{
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
                "linear-gradient(110deg, rgba(25,43,69,0.38) 0%, rgba(20,36,60,0.28) 100%)",
              borderRight: "1px solid rgba(255,255,255,0.16)",
            }}
          >
            {/* Subtle inner frame */}
           

            {/* Centered brand lockup */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="flex items-center justify-center gap-3 sm:gap-4 whitespace-nowrap">
                <Image
                  src="/logo.png"
                  alt="Orion World"
                  width={86}
                  height={34}
                  className="w-14 sm:w-[72px] lg:w-[86px] h-auto opacity-75"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <span
                  style={{
                    ...engravingStyle,
                    fontSize: "clamp(1.15rem, 3.9vw, 2.9rem)",
                    letterSpacing: "0.24em",
                  }}
                >
                  ORION WORLD
                </span>
              </div>
            </div>

            {/* Door handle */}
            <div
              className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2"
              style={{
                width: "5px",
                height: "clamp(48px, 9vw, 64px)",
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
              className="font-bold text-white leading-none mb-8"
              style={{
                fontSize: "clamp(2.2rem, 6.4vw, 5.2rem)",
                letterSpacing: "0.04em",
                lineHeight: 1.04,
              }}
            >
              <span className="whitespace-nowrap">Every Opening</span>
              <br />
              <span className="whitespace-nowrap">Engineered Exactly</span>
            </h1>
            <p
              className="text-white/80 max-w-3xl mx-auto mb-12"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                lineHeight: 1.8,
              }}
            >
              Precision window and door systems for luxury homes and commercial projects in Raipur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/92 font-sans font-medium h-13 px-10 rounded-none tracking-widest uppercase text-xs">
                <Link href="/contact" style={{ letterSpacing: "0.18em" }}>
                  Book a Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/8 hover:border-white/70 font-sans font-medium h-13 px-10 rounded-none tracking-widest uppercase text-xs bg-transparent">
                <Link href="/products" style={{ letterSpacing: "0.18em" }}>
                  View Our Systems
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
          style={{ opacity: scrollHintOpacity }}
        >
          <MousePointer2
            className="text-white/45 animate-bounce"
            style={{ width: "18px", height: "18px", animationDuration: "1.4s" }}
            aria-hidden="true"
          />
          <span
            className="text-white/55 uppercase whitespace-nowrap"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "9px",
              letterSpacing: "0.22em",
            }}
          >
            Scroll to Explore
          </span>
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
            }}
          />
        </div>
      </div>

      {isClient ? createPortal(floatingCtas, document.body) : null}
      <HeroEnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </div>
  )
}
