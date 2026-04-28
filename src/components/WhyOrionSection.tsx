"use client"

import { Crosshair, Building2, Layers, ShieldCheck } from "lucide-react"
import { useInView } from "@/hooks/useInView"

const POINTS = [
  {
    number: "01",
    Icon: Crosshair,
    title: "Precision Manufacturing",
    description:
      "Controlled processes, repeatable quality. Every unit leaves our facility meeting the same exacting standard — no variance, no compromise.",
  },
  {
    number: "02",
    Icon: Building2,
    title: "In-House Capability",
    description:
      "Design, fabrication, and installation under one roof. Full ownership of every stage means nothing is lost in translation.",
  },
  {
    number: "03",
    Icon: Layers,
    title: "Material Performance",
    description:
      "Aluminium and uPVC selected and engineered for thermal efficiency, structural integrity, and decade-long durability.",
  },
  {
    number: "04",
    Icon: ShieldCheck,
    title: "Reliable Execution",
    description:
      "On-site teams trained to deliver precision alignment, clean sealing, and a finish that holds its standard long after installation day.",
  },
]

const EASE   = "cubic-bezier(0.16,1,0.3,1)"
const SPRING = "cubic-bezier(0.34,1.56,0.64,1)"

/* Decorative SVG blobs per card — gives each card a unique isometric-style illustration feel */
const CardIllustration = ({ index }: { index: number }) => {
  const illustrations = [
    /* 01 — Precision: concentric target rings */
    <svg key="01" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <circle cx="90" cy="90" r="80" stroke="rgba(45,103,153,0.12)" strokeWidth="1"/>
      <circle cx="90" cy="90" r="60" stroke="rgba(45,103,153,0.16)" strokeWidth="1"/>
      <circle cx="90" cy="90" r="40" stroke="rgba(45,103,153,0.22)" strokeWidth="1.5"/>
      <circle cx="90" cy="90" r="20" stroke="rgba(45,103,153,0.35)" strokeWidth="2"/>
      <circle cx="90" cy="90" r="6" fill="rgba(45,103,153,0.5)"/>
      <line x1="90" y1="0" x2="90" y2="180" stroke="rgba(45,103,153,0.07)" strokeWidth="1"/>
      <line x1="0" y1="90" x2="180" y2="90" stroke="rgba(45,103,153,0.07)" strokeWidth="1"/>
      <circle cx="90" cy="90" r="88" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="4 6"/>
    </svg>,

    /* 02 — In-House: isometric box lines */
    <svg key="02" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <polygon points="80,20 140,55 140,110 80,145 20,110 20,55" stroke="rgba(45,103,153,0.2)" strokeWidth="1" fill="rgba(45,103,153,0.04)"/>
      <polygon points="80,20 140,55 80,90 20,55" stroke="rgba(45,103,153,0.18)" strokeWidth="1" fill="rgba(45,103,153,0.06)"/>
      <polygon points="20,55 80,90 80,145 20,110" stroke="rgba(45,103,153,0.14)" strokeWidth="1" fill="rgba(45,103,153,0.03)"/>
      <polygon points="140,55 80,90 80,145 140,110" stroke="rgba(45,103,153,0.14)" strokeWidth="1" fill="rgba(45,103,153,0.05)"/>
      <line x1="80" y1="20" x2="80" y2="90" stroke="rgba(45,103,153,0.25)" strokeWidth="1.5"/>
      <line x1="20" y1="55" x2="80" y2="90" stroke="rgba(45,103,153,0.2)" strokeWidth="1"/>
      <line x1="140" y1="55" x2="80" y2="90" stroke="rgba(45,103,153,0.2)" strokeWidth="1"/>
    </svg>,

    /* 03 — Material: stacked layer bars */
    <svg key="03" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {[0,1,2,3,4].map((i) => (
        <g key={i} transform={`translate(0, ${i * 26})`}>
          <rect x="20" y="30" width="120" height="14" rx="2"
            fill={`rgba(45,103,153,${0.06 + i * 0.04})`}
            stroke={`rgba(45,103,153,${0.15 + i * 0.06})`} strokeWidth="0.8"/>
        </g>
      ))}
      <rect x="20" y="30" width="80" height="14" rx="2" fill="rgba(45,103,153,0.25)" stroke="rgba(45,103,153,0.5)" strokeWidth="1"/>
    </svg>,

    /* 04 — Reliable: grid dots */
    <svg key="04" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {[...Array(6)].map((_, row) =>
        [...Array(10)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={18 + col * 16}
            cy={15 + row * 18}
            r={col === 2 && row === 2 ? 4 : col === 5 && row === 4 ? 3.5 : 1.5}
            fill={col === 2 && row === 2 ? "rgba(45,103,153,0.7)" : col === 5 && row === 4 ? "rgba(45,103,153,0.5)" : "rgba(255,255,255,0.1)"}
          />
        ))
      )}
    </svg>,
  ]
  return illustrations[index] ?? null
}

export default function WhyOrionSection() {
  const { ref, inView } = useInView(0.08)

  return (
    <section style={{ background: "#111b2b" }} className="overflow-hidden relative">

      {/* Ambient glow */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: "50%",
        transform: "translateX(-50%)",
        width: "900px", height: "600px",
        background: "radial-gradient(ellipse at 50% 0%, rgba(45,103,153,0.14) 0%, transparent 65%)",
        pointerEvents: "none",
      }}/>

      <div className="max-w-7xl mx-auto px-7 lg:px-12 py-16 md:py-24 relative" ref={ref}>

        {/* ── Header ── */}
        <div className="mb-14 md:mb-14">
          <div style={{ overflow: "hidden", marginBottom: "1.25rem" }}>
            <p className="font-body text-white/30 uppercase" style={{
              fontSize: "12px", letterSpacing: "0.5em",
              transform: inView ? "translateY(0)" : "translateY(110%)",
              transition: `transform 0.7s ${EASE}`,
            }}>
              The Orion Difference
            </p>
          </div>
          <div style={{ overflow: "hidden", marginBottom: "1.5rem" }}>
            <h2 className="font-heading text-white leading-tight" style={{
              fontSize: "clamp(1.5rem, 6vw, 4.5rem)",
              transform: inView ? "translateY(0)" : "translateY(110%)",
              transition: `transform 0.9s ${EASE} 80ms`,
            }}>
              Why Orion World
            </h2>
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: "1.25rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-20px)",
            transition: `opacity 0.8s ease 280ms, transform 0.8s ${EASE} 280ms`,
          }}>
            <div style={{ width: "36px", height: "1px", background: "rgba(45,103,153,0.6)", flexShrink: 0 }}/>
            <p className="font-heading text-white/35" style={{
              fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
              fontStyle: "italic", letterSpacing: "0.04em",
            }}>
              Built where standards begin — and compromise ends.
            </p>
          </div>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="bento-grid">

          {/* CARD 1 — Large, top-left */}
          <BentoCard
            point={POINTS[0]}
            index={0}
            inView={inView}
            delay={0}
            className="bento-large-left"
          />

          {/* CARD 2 — Small, top-right */}
          <BentoCard
            point={POINTS[1]}
            index={1}
            inView={inView}
            delay={110}
            className="bento-small-top-right"
          />

          {/* CARD 3 — Small, bottom-right (stacked under card 2) */}
          <BentoCard
            point={POINTS[2]}
            index={2}
            inView={inView}
            delay={220}
            className="bento-small-bottom-right"
          />

          {/* CARD 4 — Large, bottom-left */}
          <BentoCard
            point={POINTS[3]}
            index={3}
            inView={inView}
            delay={330}
            className="bento-large-bottom"
          />

        </div>
      </div>

      <style>{`
        /* ── BENTO GRID LAYOUT ── */
        .bento-grid {
          display: grid;
          gap: 14px;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
        }

        /* Desktop: 3-col grid mimicking screenshot */
        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: 1.15fr 0.85fr;
            grid-template-rows: 340px 300px;
          }
          .bento-large-left       { grid-column: 1; grid-row: 1; }
          .bento-small-top-right  { grid-column: 2; grid-row: 1; }
          .bento-large-bottom     { grid-column: 1; grid-row: 2; }
          .bento-small-bottom-right { grid-column: 2; grid-row: 2; }
        }

        /* Mobile: single column stack */
        @media (max-width: 767px) {
          .bento-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .bento-large-left,
          .bento-small-top-right,
          .bento-large-bottom,
          .bento-small-bottom-right {
            grid-column: 1 !important;
            grid-row: auto !important;
          }
        }

        /* ── CARD BASE ── */
        .wc-card {
          position: relative;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          border-radius: 18px;
          overflow: hidden;
          cursor: default;
          transition:
            transform   0.5s ${EASE},
            background  0.5s ease,
            border-color 0.5s ease,
            box-shadow  0.5s ease;
        }

        .wc-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(45,103,153,0.1) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          border-radius: inherit;
        }

        .wc-card::after {
          content: '';
          position: absolute;
          top: 0; left: 15%; right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(45,103,153,0.9) 50%, transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .wc-card:hover {
          transform: translateY(-6px) scale(1.01);
          background: rgba(255,255,255,0.055);
          border-color: rgba(45,103,153,0.35);
          box-shadow:
            0 24px 70px rgba(0,0,0,0.55),
            0 0 0 1px rgba(45,103,153,0.1),
            0 0 60px rgba(45,103,153,0.07) inset;
        }
        .wc-card:hover::before { opacity: 1; }
        .wc-card:hover::after  { opacity: 1; }

        /* Illustration area */
        .wc-illustration {
          position: absolute;
          opacity: 0.7;
          transition: opacity 0.5s ease, transform 0.6s ${EASE};
          pointer-events: none;
        }
        .wc-card:hover .wc-illustration {
          opacity: 1;
          transform: scale(1.06) translateY(-4px);
        }

        /* ── ICON ── */
        .wc-icon {
          position: relative;
          width: 52px; height: 52px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          transition:
            transform     0.55s ${SPRING},
            background    0.45s ease,
            border-color  0.45s ease,
            box-shadow    0.5s ease;
          flex-shrink: 0;
          z-index: 1;
        }
        .wc-card:hover .wc-icon {
          transform: scale(1.18);
          background: rgba(45,103,153,0.2);
          border-color: rgba(45,103,153,0.5);
          box-shadow: 0 0 0 6px rgba(45,103,153,0.08), 0 0 40px rgba(45,103,153,0.28);
        }
        .wc-icon svg {
          width: 22px; height: 22px;
          color: rgba(255,255,255,0.5);
          transition: color 0.4s ease, transform 0.55s ${SPRING};
        }
        .wc-card:hover .wc-icon svg {
          color: rgba(255,255,255,0.95);
          transform: scale(1.12);
        }

        /* ── ACCENT LINE ── */
        .wc-accent {
          height: 1.5px;
          background: #2d6799;
          width: 22px;
          transition: width 0.45s ${EASE};
        }
        .wc-card:hover .wc-accent { width: 48px; }

        /* ── TEXT ── */
        .wc-number {
          font-size: 10px;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.18);
        }
        .wc-title {
          color: rgba(255,255,255,0.88);
          transition: color 0.3s ease;
        }
        .wc-card:hover .wc-title { color: #ffffff; }
        .wc-desc {
          color: rgba(255,255,255,0.35);
          transition: color 0.4s ease;
          font-size: 0.875rem;
          line-height: 1.65;
        }
        .wc-card:hover .wc-desc { color: rgba(255,255,255,0.56); }

        /* ── GHOST NUMBER ── */
        .wc-ghost {
          position: absolute;
          font-weight: 700;
          color: rgba(255,255,255,0.03);
          line-height: 1;
          user-select: none;
          pointer-events: none;
          transition: color 0.5s ease, transform 0.5s ${EASE};
        }
        .wc-card:hover .wc-ghost {
          color: rgba(255,255,255,0.06);
        }

        /* Date badge — mimics screenshot's top-left "MAY 2026" */
        .wc-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          font-size: 9px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
        }
        .wc-badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(45,103,153,0.8);
        }
      `}</style>
    </section>
  )
}

/* ────────────────────────── */
/*  Universal Bento Card      */
/* ────────────────────────── */
interface BentoCardProps {
  point: typeof POINTS[0]
  index: number
  inView: boolean
  delay: number
  className: string
}

function BentoCard({ point, index, inView, delay, className }: BentoCardProps) {
  const { number, Icon, title, description } = point
  const isLarge = className.includes("large")

  return (
    <div
      className={`wc-card ${className}`}
      style={{
        padding: isLarge ? "2rem 2rem 2.25rem" : "1.75rem 1.75rem 2rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: isLarge ? "260px" : "200px",
      }}
    >
      {/* Ghost number */}
      <span className="wc-ghost" style={{
        fontSize: isLarge ? "8rem" : "6rem",
        bottom: "0.5rem",
        right: "1rem",
      }}>
        {number}
      </span>

      {/* Illustration — top area for large cards */}
      {isLarge && (
        <div className="wc-illustration" style={{
          top: "1rem", right: "1rem",
          width: "140px", height: "140px",
        }}>
          <CardIllustration index={index} />
        </div>
      )}

      {/* Top row: date badge + number */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "auto" }}>
        <div className="wc-badge">
          <div className="wc-badge-dot"/>
          MAY 2026
        </div>
        <span className="wc-number font-heading">{number}</span>
      </div>

      {/* Bottom content */}
      <div style={{ marginTop: isLarge ? "3.5rem" : "2rem" }}>
        {/* Icon + accent */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <div className="wc-icon">
            <Icon />
          </div>
          <div className="wc-accent"/>
        </div>

        {/* Title */}
        <h3 className="wc-title font-heading leading-snug" style={{
          fontSize: isLarge ? "clamp(1.1rem, 2vw, 1.3rem)" : "clamp(1rem, 1.8vw, 1.1rem)",
          marginBottom: "0.6rem",
        }}>
          {title}
        </h3>

        {/* Description */}
        <p className="wc-desc font-body">
          {description}
        </p>
      </div>
    </div>
  )
}