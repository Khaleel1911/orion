"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/useInView"

const EASE = "cubic-bezier(0.16,1,0.3,1)"

export default function PhilosophySection() {
  const { ref, inView } = useInView(0.2)

  return (
    <section
      className="overflow-hidden relative"
      style={{ background: "radial-gradient(ellipse at 50% 60%, #152034 0%, #0b1622 100%)" }}
    >
      <div
        className="max-w-4xl mx-auto px-6 lg:px-12 py-20 md:py-32 text-center"
        ref={ref}
      >

        {/* Eyebrow */}
        <div style={{ overflow: "hidden", marginBottom: "3.5rem" }}>
          <p
            className="font-body text-white/25 uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.5em",
              transform: inView ? "translateY(0)" : "translateY(110%)",
              transition: `transform 0.7s ${EASE}`,
            }}
          >
            Our Philosophy
          </p>
        </div>

        {/* Opening line */}
        <div style={{ overflow: "hidden", marginBottom: "1.25rem" }}>
          <p
            className="font-heading text-white leading-snug"
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.8rem)",
              transform: inView ? "translateY(0)" : "translateY(110%)",
              transition: `transform 0.9s ${EASE} 100ms`,
            }}
          >
            We don&apos;t approach windows and doors as products.
          </p>
        </div>

        {/* Second line */}
        <div style={{ overflow: "hidden", marginBottom: "4rem" }}>
          <p
            className="font-heading leading-snug"
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.8rem)",
              color: "rgba(255,255,255,0.28)",
              transform: inView ? "translateY(0)" : "translateY(110%)",
              transition: `transform 0.9s ${EASE} 220ms`,
            }}
          >
            We approach them as systems that define how a space performs.
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            width: inView ? "48px" : "0px",
            height: "1px",
            background: "rgba(45,103,153,0.5)",
            margin: "0 auto 3rem",
            transition: `width 0.8s ${EASE} 400ms`,
          }}
        />

        {/* CTA */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: `opacity 0.7s ease 550ms, transform 0.7s ${EASE} 550ms`,
          }}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-3 font-body text-white/50 hover:text-white/90 group"
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              transition: "color 0.3s ease",
            }}
          >
            About Orion World
            <span
              className="inline-flex items-center justify-center"
              style={{
                width: "32px",
                height: "32px",
                border: "1px solid rgba(255,255,255,0.18)",
                transition: "border-color 0.3s ease, transform 0.3s ease",
              }}
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
