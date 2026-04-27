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

const EASE    = "cubic-bezier(0.16,1,0.3,1)"
const SPRING  = "cubic-bezier(0.34,1.56,0.64,1)"   /* springy overshoot for icon */

export default function WhyOrionSection() {
  const { ref, inView } = useInView(0.08)

  return (
    <section style={{ background: "#192b45" }} className="overflow-hidden relative">

      {/* Subtle ambient glow — top centre, NO grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0, left: "50%",
          transform: "translateX(-50%)",
          width: "900px", height: "500px",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(45,103,153,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 md:py-24 relative" ref={ref}>

        {/* ── Header ── */}
        <div className="mb-20">

          {/* Eyebrow */}
          <div style={{ overflow: "hidden", marginBottom: "1.25rem" }}>
            <p
              className="font-body text-white/30 uppercase"
              style={{
                fontSize: "10px", letterSpacing: "0.5em",
                transform: inView ? "translateY(0)" : "translateY(110%)",
                transition: `transform 0.7s ${EASE}`,
              }}
            >
              The Orion Difference
            </p>
          </div>

          {/* Main heading */}
          <div style={{ overflow: "hidden", marginBottom: "1.5rem" }}>
            <h2
              className="font-heading text-white leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.25rem)",
                transform: inView ? "translateY(0)" : "translateY(110%)",
                transition: `transform 0.9s ${EASE} 80ms`,
              }}
            >
              Why Orion World
            </h2>
          </div>

          {/* Unique tagline — the classy line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-20px)",
              transition: `opacity 0.8s ease 280ms, transform 0.8s ${EASE} 280ms`,
            }}
          >
            <div style={{ width: "36px", height: "1px", background: "rgba(45,103,153,0.6)", flexShrink: 0 }} />
            <p
              className="font-heading text-white/35"
              style={{
                fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
                fontStyle: "italic",
                letterSpacing: "0.04em",
              }}
            >
              Built where standards begin — and compromise ends.
            </p>
          </div>
        </div>

        {/* ── Cards: 3 top row + 1 wide bottom ── */}
        <div className="flex flex-col gap-4">

          {/* Row 1: 3 portrait cards */}
          <div className="flex flex-col md:flex-row gap-4">
            {POINTS.slice(0, 3).map(({ number, Icon, title, description }, i) => (
              <PortraitCard
                key={number}
                number={number}
                Icon={Icon}
                title={title}
                description={description}
                delay={i * 110}
                inView={inView}
              />
            ))}
          </div>

          {/* Row 2: 4th card — full-width landscape */}
          <LandscapeCard
            number={POINTS[3].number}
            Icon={POINTS[3].Icon}
            title={POINTS[3].title}
            description={POINTS[3].description}
            delay={360}
            inView={inView}
          />
        </div>
      </div>

      {/* ── All card CSS ── */}
      <style>{`

        /* ── shared card base ── */
        .wc-card {
          position: relative;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          overflow: hidden;
          cursor: default;
          transition:
            transform   0.5s ${EASE},
            background  0.5s ease,
            border-color 0.5s ease,
            box-shadow  0.5s ease;
        }

        /* diagonal gradient wash — hidden by default */
        .wc-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(45,103,153,0.1) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        /* glowing top-edge highlight */
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
          transform: translateY(-10px);
          background: rgba(255,255,255,0.06);
          border-color: rgba(45,103,153,0.3);
          box-shadow:
            0 28px 80px rgba(0,0,0,0.5),
            0 0 0 1px rgba(45,103,153,0.08);
        }
        .wc-card:hover::before { opacity: 1; }
        .wc-card:hover::after  { opacity: 1; }

        /* ── icon wrapper ── */
        .wc-icon {
          position: relative;
          width: 60px; height: 60px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          transition:
            transform     0.55s ${SPRING},
            background    0.45s ease,
            border-color  0.45s ease,
            box-shadow    0.5s ease;
          flex-shrink: 0;
          z-index: 1;
        }

        /* outer ring — expands on hover */
        .wc-icon::before {
          content: '';
          position: absolute;
          inset: -6px;
          border: 1px solid rgba(45,103,153,0);
          transition: border-color 0.4s ease, inset 0.5s ${SPRING};
        }

        .wc-card:hover .wc-icon {
          transform: scale(1.38);
          background: rgba(45,103,153,0.18);
          border-color: rgba(45,103,153,0.55);
          box-shadow:
            0 0 0 8px rgba(45,103,153,0.07),
            0 0 48px rgba(45,103,153,0.3);
        }
        .wc-card:hover .wc-icon::before {
          border-color: rgba(45,103,153,0.25);
          inset: -10px;
        }

        /* ── icon svg ── */
        .wc-icon svg {
          width: 24px; height: 24px;
          color: rgba(255,255,255,0.5);
          transition:
            color 0.4s ease,
            transform 0.55s ${SPRING};
        }
        .wc-card:hover .wc-icon svg {
          color: rgba(255,255,255,0.95);
          transform: scale(1.12);
        }

        /* ── accent line ── */
        .wc-accent {
          height: 1.5px;
          background: #2d6799;
          width: 22px;
          transition: width 0.45s ${EASE};
          flex-shrink: 0;
        }
        .wc-card:hover .wc-accent { width: 52px; }

        /* ── title colour shift ── */
        .wc-title {
          color: rgba(255,255,255,0.88);
          transition: color 0.3s ease;
        }
        .wc-card:hover .wc-title { color: #ffffff; }

        /* ── description opacity shift ── */
        .wc-desc {
          color: rgba(255,255,255,0.36);
          transition: color 0.4s ease;
        }
        .wc-card:hover .wc-desc { color: rgba(255,255,255,0.58); }

        /* ── ghost number ── */
        .wc-ghost {
          position: absolute;
          font-family: var(--font-cinzel);
          font-weight: 700;
          color: rgba(255,255,255,0.025);
          line-height: 1;
          user-select: none;
          pointer-events: none;
          transition: color 0.5s ease, transform 0.5s ${EASE};
        }
        .wc-card:hover .wc-ghost {
          color: rgba(255,255,255,0.05);
          transform: scale(1.08);
        }
      `}</style>
    </section>
  )
}

/* ─────────────────────────────────────── */
/*  Portrait card (top row — 3 up)         */
/* ─────────────────────────────────────── */
function PortraitCard({
  number, Icon, title, description, delay, inView,
}: CardProps) {
  return (
    <div
      className="wc-card flex-1"
      style={{
        padding: "2.5rem 2rem 2.25rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ${EASE} ${delay}ms`,
        minHeight: "320px",
      }}
    >
      {/* Ghost number — top right */}
      <span
        className="wc-ghost"
        style={{ fontSize: "7rem", bottom: "0.75rem", right: "1.25rem" }}
      >
        {number}
      </span>

      {/* Top row: icon + number label */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "2rem" }}>
        <div className="wc-icon">
          <Icon />
        </div>
        <span
          className="font-heading"
          style={{ fontSize: "11px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.16)" }}
        >
          {number}
        </span>
      </div>

      {/* Accent line */}
      <div className="wc-accent" style={{ marginBottom: "1.5rem" }} />

      {/* Title */}
      <h3
        className="wc-title font-heading leading-snug"
        style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", marginBottom: "1rem" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="wc-desc font-body leading-relaxed" style={{ fontSize: "0.9rem" }}>
        {description}
      </p>
    </div>
  )
}

/* ─────────────────────────────────────── */
/*  Landscape card (4th — full-width)      */
/* ─────────────────────────────────────── */
function LandscapeCard({
  number, Icon, title, description, delay, inView,
}: CardProps) {
  return (
    <div
      className="wc-card w-full"
      style={{
        padding: "2.25rem 2.5rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ${EASE} ${delay}ms`,
      }}
    >
      {/* Ghost number */}
      <span
        className="wc-ghost"
        style={{ fontSize: "9rem", right: "2rem", top: "50%", transform: "translateY(-50%)" }}
      >
        {number}
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem", position: "relative", zIndex: 1 }}>

        {/* Icon */}
        <div className="wc-icon" style={{ flexShrink: 0 }}>
          <Icon />
        </div>

        {/* Vertical divider */}
        <div style={{ width: "1px", height: "60px", background: "rgba(255,255,255,0.08)", flexShrink: 0 }} />

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
            <div className="wc-accent" />
            <span
              className="font-heading"
              style={{ fontSize: "11px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.16)" }}
            >
              {number}
            </span>
          </div>
          <h3
            className="wc-title font-heading leading-snug"
            style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)", marginBottom: "0.6rem" }}
          >
            {title}
          </h3>
          <p
            className="wc-desc font-body leading-relaxed"
            style={{ fontSize: "0.9rem", maxWidth: "540px" }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── shared prop type ── */
interface CardProps {
  number: string
  Icon: React.ElementType
  title: string
  description: string
  delay: number
  inView: boolean
}
