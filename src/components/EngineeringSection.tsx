"use client"

import { useInView } from "@/hooks/useInView"

const FACTORS = [
  {
    index: "01",
    label: "Precision Cutting",
    headline: "Every dimension held to specification",
    description:
      "CNC-guided cuts across aluminium and uPVC profiles deliver clean edges and exact tolerances — ensuring every frame fits as designed, every time.",
  },
  {
    index: "02",
    label: "CNC Machining",
    headline: "Computer-controlled. Consistently accurate.",
    description:
      "All profiles are machined using computer-controlled equipment. The same accuracy, the same geometry, across every unit in every batch.",
  },
  {
    index: "03",
    label: "Seamless Assembly",
    headline: "Joints with no visible compromise",
    description:
      "Corner welds, sealant application, and hardware fitting are executed in sequence to maintain structural integrity and a clean, finished appearance.",
  },
]

const EASE = "cubic-bezier(0.16,1,0.3,1)"

export default function EngineeringSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2)
  const { ref: factorsRef, inView: factorsIn } = useInView(0.08)

  return (
    <section className="bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 md:py-24">

        {/* ── Header ── */}
        <div className="mb-24" ref={headRef}>
          <div style={{ overflow: "hidden" }}>
            <p
              className="font-body text-accent uppercase"
              style={{
                fontSize: "10px",
                letterSpacing: "0.45em",
                marginBottom: "1.5rem",
                transform: headIn ? "translateY(0)" : "translateY(110%)",
                transition: `transform 0.8s ${EASE}`,
              }}
            >
              Three Key Factors
            </p>
          </div>
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between md:gap-20"
            style={{ overflow: "visible" }}
          >
            <div style={{ overflow: "hidden" }}>
              <h2
                className="font-heading text-primary leading-tight mb-6 md:mb-0"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.25rem)",
                  transform: headIn ? "translateY(0)" : "translateY(110%)",
                  transition: `transform 0.9s ${EASE} 80ms`,
                }}
              >
                Engineered<br />with Control
              </h2>
            </div>
            <p
              className="font-body text-foreground/50 leading-relaxed md:max-w-sm"
              style={{
                fontSize: "1rem",
                opacity: headIn ? 1 : 0,
                transition: `opacity 0.8s ease 300ms`,
              }}
            >
              Every system is built through controlled processes to ensure structural accuracy,
              smooth operation, and long-term reliability.
            </p>
          </div>
        </div>

        {/* ── Factor bands ── */}
        <div
          ref={factorsRef}
          style={{
            borderTop: "1px solid rgba(25,43,69,0.1)",
          }}
        >
          {FACTORS.map(({ index, label, headline, description }, i) => (
            <div
              key={index}
              className="relative"
              style={{
                borderBottom: "1px solid rgba(25,43,69,0.1)",
                opacity: factorsIn ? 1 : 0,
                transform: factorsIn ? "translateY(0)" : "translateY(36px)",
                transition: `opacity 0.75s ease ${i * 150}ms, transform 0.75s ${EASE} ${i * 150}ms`,
              }}
            >
              {/* Large background index */}
              <span
                className="font-heading select-none pointer-events-none absolute"
                style={{
                  right: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "clamp(6rem, 12vw, 10rem)",
                  lineHeight: 1,
                  color: "#192b45",
                  opacity: 0.04,
                  fontWeight: 700,
                  userSelect: "none",
                }}
              >
                {index}
              </span>

              <div className="flex flex-col md:flex-row md:items-start py-8 md:py-10 gap-6 md:gap-16 relative z-10">
                {/* Label + accent */}
                <div style={{ flexShrink: 0, minWidth: "200px" }}>
                  <div
                    style={{
                      width: factorsIn ? "28px" : "0px",
                      height: "1.5px",
                      background: "#2d6799",
                      transition: `width 0.6s ${EASE} ${i * 150 + 200}ms`,
                      marginBottom: "1.25rem",
                    }}
                  />
                  <p
                    className="font-body text-accent uppercase"
                    style={{ fontSize: "10px", letterSpacing: "0.35em" }}
                  >
                    {label}
                  </p>
                </div>

                {/* Headline + description */}
                <div className="flex-1">
                  <div style={{ overflow: "hidden", marginBottom: "1rem" }}>
                    <h3
                      className="font-heading text-primary"
                      style={{
                        fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)",
                        transform: factorsIn ? "translateY(0)" : "translateY(110%)",
                        transition: `transform 0.8s ${EASE} ${i * 150 + 180}ms`,
                      }}
                    >
                      {headline}
                    </h3>
                  </div>
                  <p
                    className="font-body text-foreground/45 leading-relaxed"
                    style={{
                      fontSize: "0.9375rem",
                      maxWidth: "480px",
                      opacity: factorsIn ? 1 : 0,
                      transition: `opacity 0.7s ease ${i * 150 + 320}ms`,
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
