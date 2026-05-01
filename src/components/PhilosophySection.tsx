
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/useInView"

const EASE = "cubic-bezier(0.16,1,0.3,1)"

export default function PhilosophySection() {
  const { ref, inView } = useInView(0.15)

  return (
    <section
      ref={ref}
      className="phi-section relative overflow-hidden bg-white"
      style={{ minHeight: "clamp(420px, 65vh, 620px)" }}
    >

      {/* ── FULL-BLEED BACKGROUND IMAGE ── */}
      <div
        aria-hidden
        className="phi-bg-image"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero/pexels-clubhouseconvos-13620065.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "60% center",
          opacity: inView ? 1 : 0,
          transition: `opacity 1.6s ease 80ms`,
        }}
      />

      {/* White gradient wash — solid left, dissolves into image right */}
      <div
        aria-hidden
        className="phi-gradient-wash"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, #ffffff 0%, #ffffff 34%, rgba(255,255,255,0.88) 48%, rgba(255,255,255,0.18) 68%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle dark vignette on image portion for depth */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to left, rgba(25,43,69,0.28) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0, height: "120px",
          background: "linear-gradient(to top, rgba(255,255,255,0.5), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* ── MAIN LAYOUT ── */}
      <div
        className="phi-inner relative max-w-7xl mx-auto px-6 lg:px-16 mt-10"
        style={{
          minHeight: "clamp(420px, 65vh, 620px)",
          display: "flex",
          alignItems: "center",
        }}
      >

        {/* ── LEFT TEXT PANEL ── */}
        <div
          className="phi-text-panel"
          style={{
            width: "100%",
            maxWidth: "min(560px, 50%)",
          }}
        >

          {/* Eyebrow badge */}
          <div
            style={{
              marginBottom: "2rem",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-16px)",
              transition: `opacity 0.7s ease, transform 0.7s ${EASE}`,
            }}
          >
            <span
              className="font-body uppercase"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "10px",
                letterSpacing: "0.4em",
                color: "#2d6799",
                background: "rgba(45,103,153,0.08)",
                border: "1px solid rgba(45,103,153,0.25)",
                padding: "7px 16px 7px 12px",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{
                width: "18px",
                height: "1px",
                background: "#2d6799",
                display: "inline-block",
                flexShrink: 0,
              }}/>
              Our Philosophy
            </span>
          </div>

          {/* Headline — split into two contrasting lines */}
          <div style={{ marginBottom: "1.75rem" }}>
            <div style={{ overflow: "hidden", marginBottom: "0.3rem" }}>
              <h2
                className="font-heading text-primary phi-headline"
                style={{
                  fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.025em",
                  transform: inView ? "translateY(0)" : "translateY(108%)",
                  transition: `transform 1.05s ${EASE} 100ms`,
                }}
              >
                Not products.
              </h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h2
                className="font-heading phi-headline"
                style={{
                  fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.025em",
                  color: "#2d6799",
                  transform: inView ? "translateY(0)" : "translateY(108%)",
                  transition: `transform 1.05s ${EASE} 210ms`,
                }}
              >
                Systems.
              </h2>
            </div>
          </div>

          {/* Accent rule */}
          <div
            style={{
              height: "1.5px",
              background: "rgba(45,103,153,0.35)",
              marginBottom: "1.75rem",
              width: inView ? "44px" : "0px",
              transition: `width 1s ${EASE} 380ms`,
            }}
          />

          {/* Body copy — two tones */}
          <div
            style={{
              maxWidth: "420px",
              marginBottom: "2.25rem",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(14px)",
              transition: `opacity 0.85s ease 460ms, transform 0.85s ${EASE} 460ms`,
            }}
          >
            <p
              className="font-body"
              style={{
                fontSize: "clamp(0.92rem, 1.5vw, 1.04rem)",
                lineHeight: 1.85,
                color: "rgba(25,43,69,0.72)",
                marginBottom: "1.25rem",
              }}
            >
              We don&apos;t approach windows and doors as products. We approach them as
              systems that define how a space performs  thermally, structurally, visually.
            </p>
            <p
              className="font-body"
              style={{
                fontSize: "clamp(0.92rem, 1.5vw, 1.04rem)",
                lineHeight: 1.85,
                color: "rgba(25,43,69,0.42)",
              }}
            >
              Every detail from thermal bridging to sightline geometry is considered as
              part of a whole. Because the spaces we shape outlast every trend, and precision
              is the only standard worth keeping.
            </p>
          </div>

          {/* CTA button */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 0.7s ease 620ms, transform 0.7s ${EASE} 620ms`,
            }}
          >
            <Link
              href="/about"
              className="phi-cta group inline-flex items-center gap-3 font-body"
              style={{
                fontSize: "10.5px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#ffffff",
                background: "#192b45",
                border: "1px solid #192b45",
                padding: "13px 24px",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
                transition: "color 0.35s ease, background 0.35s ease",
              }}
            >
              <span style={{ position: "relative", zIndex: 1 }}>About Orion World</span>
              <span
                className="phi-arrow"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <ArrowRight
                  style={{ width: "13px", height: "13px" }}
                />
              </span>
            </Link>
          </div>

          {/* ── MOBILE STAT TILES (inline, below CTA) ── */}
          <div
            className="phi-stat-mobile"
            style={{
              display: "none", // shown via media query
              flexDirection: "row",
              gap: "10px",
              marginTop: "2rem",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 1s ease 900ms, transform 1s ${EASE} 900ms`,
            }}
          >
            {[
              { value: "25+", label: "Years of Precision" },
              { value: "10k+", label: "Installations" },
              { value: "100%", label: "In-House" },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                style={{
                  background: "rgba(245,248,252,0.95)",
                  border: "1px solid rgba(45,103,153,0.15)",
                  padding: "12px 14px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <span
                  className="font-heading text-primary"
                  style={{
                    fontSize: "1.4rem",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {value}
                </span>
                <span
                  className="font-body"
                  style={{
                    fontSize: "7.5px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#2d6799",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── FLOATING STAT TILES — desktop only, anchored bottom-right ── */}
        <div
          className="phi-stat-desktop"
          style={{
            position: "absolute",
            right: "clamp(20px, 5vw, 72px)",
            bottom: "clamp(24px, 4vh, 44px)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 1s ease 900ms, transform 1s ${EASE} 900ms`,
          }}
        >
          {[
            { value: "25+", label: "Years of Precision" },
            { value: "10k+", label: "Installations" },
            { value: "100%", label: "In-House Execution" },
          ].map(({ value, label }, i) => (
            <div
              key={label}
              className="phi-stat"
              style={{
                background: "rgba(255,255,255,0.82)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.55)",
                padding: "14px 20px",
                minWidth: "158px",
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                transition: "background 0.3s ease, transform 0.3s ease",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <span
                className="font-heading text-primary"
                style={{
                  fontSize: "1.7rem",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {value}
              </span>
              <span
                className="font-body"
                style={{
                  fontSize: "8.5px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#2d6799",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* ── Styles ── */}
      <style>{`
        .phi-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #2d6799;
          transform: translateX(-100%);
          transition: transform 0.38s cubic-bezier(0.16,1,0.3,1);
          z-index: 0;
        }
        .phi-cta:hover::before {
          transform: translateX(0);
        }
        .phi-cta:hover {
          border-color: #2d6799 !important;
        }
        .phi-stat:hover {
          background: rgba(255,255,255,0.96) !important;
          transform: translateX(-4px);
        }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          /* Section: let height grow naturally for content */
          .phi-section {
            min-height: unset !important;
          }

          /* Background image: shift so it's visible through bottom of section */
          .phi-bg-image {
            background-position: 72% bottom !important;
            opacity: 0.18 !important; /* subtle tint behind text */
          }

          /* Gradient: solid white on mobile so text is always readable */
          .phi-gradient-wash {
            background: rgba(255,255,255,0.92) !important;
          }

          /* Inner container: vertical stack, natural height, padded */
          .phi-inner {
            min-height: unset !important;
            align-items: flex-start !important;
            padding-top: 3rem !important;
            padding-bottom: 2.5rem !important;
            margin-top: 0 !important;
          }

          /* Text panel: full width */
          .phi-text-panel {
            max-width: 100% !important;
          }

          /* Hide desktop floating tiles */
          .phi-stat-desktop {
            display: none !important;
          }

          /* Show inline mobile tiles */
          .phi-stat-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  )
}