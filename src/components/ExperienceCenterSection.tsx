"use client"

import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useInView } from "@/hooks/useInView"

const EASE = "cubic-bezier(0.16,1,0.3,1)"

export default function ExperienceCenterSection() {
  const { ref, inView } = useInView(0.12)

  return (
    <section style={{ background: "#f6f5f2" }} className="overflow-hidden">
      <div
        className="max-w-6xl mx-auto px-6 lg:px-12 py-16 md:py-24"
        ref={ref}
      >
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-16 lg:gap-24">

          {/* ── Left: text ── */}
          <div className="flex-1 flex flex-col justify-center">
            <div style={{ overflow: "hidden", marginBottom: "1.5rem" }}>
              <p
                className="font-body text-accent uppercase"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.45em",
                  transform: inView ? "translateY(0)" : "translateY(110%)",
                  transition: `transform 0.8s ${EASE}`,
                }}
              >
                Visit Us
              </p>
            </div>

            <div style={{ overflow: "hidden", marginBottom: "1.75rem" }}>
              <h2
                className="font-heading text-primary leading-tight"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                  transform: inView ? "translateY(0)" : "translateY(110%)",
                  transition: `transform 0.9s ${EASE} 80ms`,
                }}
              >
                Our Experience<br />Center
              </h2>
            </div>

            <p
              className="font-body text-foreground/55 leading-loose mb-10"
              style={{
                fontSize: "1rem",
                maxWidth: "400px",
                opacity: inView ? 1 : 0,
                transition: `opacity 0.8s ease 260ms`,
              }}
            >
              See materials, finishes, and system performance in a physical environment built to help
              you make informed decisions before a single measurement is taken.
            </p>

            {/* Location */}
            <div
              className="flex items-center gap-3 mb-10"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity 0.7s ease 340ms, transform 0.7s ${EASE} 340ms`,
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  border: "1px solid rgba(25,43,69,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin className="w-4 h-4 text-primary" style={{ opacity: 0.6 }} />
              </div>
              <div>
                <p className="font-heading text-primary" style={{ fontSize: "1rem" }}>
                  Raipur, Chhattisgarh
                </p>
                <p className="font-body text-foreground/40" style={{ fontSize: "12px", letterSpacing: "0.05em" }}>
                  Open Monday – Saturday, 10am – 6pm
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              style={{
                opacity: inView ? 1 : 0,
                transition: `opacity 0.7s ease 440ms`,
              }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-3 font-body text-primary hover:text-accent group"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  transition: "color 0.25s ease",
                }}
              >
                Get Directions
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(25,43,69,0.2)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>

          {/* ── Right: architectural frame visual ── */}
          <div
            className="lg:w-[420px] flex-shrink-0"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(40px)",
              transition: `opacity 0.9s ease 200ms, transform 0.9s ${EASE} 200ms`,
            }}
          >
            <div
              className="w-full h-[380px] lg:h-full relative"
              style={{
                background: "#192b45",
                minHeight: "380px",
              }}
            >
              {/* Outer frame */}
              <div
                className="absolute"
                style={{
                  inset: "20px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
              {/* Inner frame */}
              <div
                className="absolute"
                style={{
                  inset: "40px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              />

              {/* Center content */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ gap: "0.75rem" }}
              >
                <p
                  className="font-heading text-white"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    letterSpacing: "0.25em",
                    opacity: 0.9,
                  }}
                >
                  RAIPUR
                </p>
                <div
                  style={{
                    width: "32px",
                    height: "1px",
                    background: "rgba(45,103,153,0.6)",
                  }}
                />
                <p
                  className="font-body text-white/30 uppercase"
                  style={{ fontSize: "9px", letterSpacing: "0.45em" }}
                >
                  Experience Center
                </p>
              </div>

              {/* Corner accents — no grid, just 4 corner marks */}
              {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos) => (
                <div
                  key={pos}
                  className={`absolute ${pos}`}
                  style={{
                    width: "12px",
                    height: "12px",
                    border: "1px solid rgba(45,103,153,0.3)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
