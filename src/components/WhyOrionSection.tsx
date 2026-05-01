"use client"

import {
  FaBalanceScale,
  FaClipboardCheck,
  FaHandshake,
  FaRulerCombined,
  FaTools,
  FaMapMarkerAlt,
} from "react-icons/fa"
import { useInView } from "@/hooks/useInView"

const POINTS = [
  {
    Icon: FaBalanceScale,
    title: "We Have No Material Bias",
    description:
      "We work across UPVC, Aluminium, Skylights, and Mesh, so recommendations are based on your opening needs, not profit bias.",
  },
  {
    Icon: FaClipboardCheck,
    title: "Every Specification Is Written",
    description:
      "No verbal estimates. Material, profile, glass, and hardware choices are documented before manufacturing, so approvals are always clear.",
  },
  {
    Icon: FaHandshake,
    title: "One Company. One Warranty.",
    description:
      "We design, manufacture, and install under one roof, so accountability is clear with one number, one team, and one warranty.",
  },
  {
    Icon: FaRulerCombined,
    title: "Post-Plaster Precision Measurements",
    description:
      "We measure after plaster completion, not from drawings, eliminating one of the most common causes of on-site fitting issues.",
  },
  {
    Icon: FaTools,
    title: "AMC That Actually Means Something",
    description:
      "Our AMC is scheduled service, not paper warranty. We return, calibrate, and fix to keep performance consistent year after year.",
  },
  {
    Icon: FaMapMarkerAlt,
    title: "Local Presence. Long-Term Commitment.",
    description:
      "As a Raipur based company serving Chhattisgarh, every project is a long term reference and your satisfaction directly drives our growth.",
  },
]

export default function WhyOrionSection() {
  const { ref, inView } = useInView(0.08)

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-primary py-14 md:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(45,103,153,0.2) 0%, rgba(25,43,69,0) 52%)",
        }}
      />

      <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col px-5 sm:px-8 md:px-10">
        <div
          className="mb-10 md:mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <p
            className="uppercase text-white/55"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.36em",
            }}
          >
            Why Choose Us
          </p>
          <h2
            className="mt-3 text-white"
            style={{
              fontFamily: "var(--font-cinzel), Cinzel, serif",
              fontSize: "clamp(1.9rem, 4.1vw, 3.1rem)",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
            }}
          >
            The difference is
            <br />
            in every detail.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {POINTS.map((point, index) => (
            <SimpleCard key={point.title} point={point} inView={inView} delay={index * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface SimpleCardProps {
  point: typeof POINTS[0]
  inView: boolean
  delay: number
}

function SimpleCard({ point, inView, delay }: SimpleCardProps) {
  const { Icon, title, description } = point

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-white/12 bg-white/[0.04] p-4 sm:p-5"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, border-color 0.35s ease`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/10 transition-colors duration-300 group-hover:border-white/35" />
      <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100" />

      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2d6799]/45 bg-[#2d6799]/15 transition-colors duration-300 group-hover:bg-[#2d6799]/25">
          <Icon className="h-4.5 w-4.5 text-[#6fafd8]" />
        </div>
      </div>

      <h3
        className="mb-2 text-white"
        style={{
          fontFamily: "var(--font-cinzel), Cinzel, serif",
          fontSize: "clamp(0.98rem, 1.2vw, 1.1rem)",
          letterSpacing: "0.04em",
          lineHeight: 1.32,
        }}>
        {title}
      </h3>

      <div className="border-l border-white/25 pl-3">
        <p
          className="text-white/70"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "0.84rem",
            lineHeight: 1.68,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}