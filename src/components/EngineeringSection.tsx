
"use client"

import { useState, useEffect, useRef } from "react"

function useInView(threshold = 0) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

/* ─────────────────────────────────────────
   ANIMATION 1 — Precision Cutting (loops)
───────────────────────────────────────── */
function CuttingAnim() {
  const bladeRef = useRef(null)
  const splitRef = useRef(null)
  const hlineRef = useRef(null)
  const vlineRef = useRef(null)
  const dimRef   = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    const runCycle = () => {
      const blade = bladeRef.current
      const split = splitRef.current
      const hl    = hlineRef.current
      const vl    = vlineRef.current
      const dim   = dimRef.current
      if (!blade) return

      blade.style.transition = "none"
      blade.style.transform  = "translateX(70px)"
      split.style.transition = "none"; split.style.opacity = "0"
      hl.style.transition    = "none"; hl.style.opacity    = "0"
      vl.style.transition    = "none"; vl.style.opacity    = "0"
      dim.style.transition   = "none"; dim.style.opacity   = "0"

      requestAnimationFrame(() => requestAnimationFrame(() => {
        hl.style.transition = "opacity 0.3s 0.1s"; hl.style.opacity = "0.35"
        vl.style.transition = "opacity 0.3s 0.2s"; vl.style.opacity = "0.35"
        blade.style.transition = "transform 0.7s cubic-bezier(0.22,1,0.36,1)"
        blade.style.transform  = "translateX(0)"
        timerRef.current = setTimeout(() => {
          split.style.transition = "opacity 0.1s"; split.style.opacity = "1"
          dim.style.transition   = "opacity 0.5s"; dim.style.opacity   = "1"
          timerRef.current = setTimeout(runCycle, 1800)
        }, 700)
      }))
    }

    timerRef.current = setTimeout(runCycle, 300)
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="blade-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#192b45" stopOpacity="0" />
          <stop offset="40%"  stopColor="#192b45" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2d6799" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="material-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#e8edf3" />
          <stop offset="100%" stopColor="#c8d2de" />
        </linearGradient>
      </defs>
      <rect x="10" y="28" width="100" height="28" rx="3" fill="url(#material-grad)" stroke="#b0bcc9" strokeWidth="0.5" />
      <line x1="10" y1="36" x2="110" y2="36" stroke="#b0bcc9" strokeWidth="0.4" />
      <line x1="10" y1="44" x2="110" y2="44" strokeDasharray="2 3" stroke="#b0bcc9" strokeWidth="0.3" />
      <rect ref={splitRef} x="58" y="26" width="3" height="32" rx="0.5" fill="#f0f3f7" stroke="#d0d8e2" strokeWidth="0.3" style={{ opacity: 0 }} />
      <g ref={bladeRef} style={{ transform: "translateX(70px)" }}>
        <rect x="55" y="8" width="52" height="6" rx="1" fill="url(#blade-grad)" />
        <polygon points="55,14 57,22 55,22" fill="#2d6799" opacity="0.8" />
        <circle cx="90" cy="11" r="1.5" fill="#192b45" opacity="0.4" />
        <circle cx="100" cy="11" r="1.5" fill="#192b45" opacity="0.4" />
        <line x1="55" y1="8.3" x2="107" y2="8.3" stroke="white" strokeWidth="0.5" opacity="0.4" />
      </g>
      <line ref={hlineRef} x1="0" y1="25" x2="120" y2="25" stroke="#2d6799" strokeWidth="0.4" strokeDasharray="2 2" style={{ opacity: 0 }} />
      <line ref={vlineRef} x1="59.5" y1="0" x2="59.5" y2="80" stroke="#2d6799" strokeWidth="0.4" strokeDasharray="1.5 2" style={{ opacity: 0 }} />
      <g ref={dimRef} style={{ opacity: 0 }}>
        <line x1="10" y1="72" x2="58" y2="72" stroke="#2d6799" strokeWidth="0.5" />
        <line x1="62" y1="72" x2="110" y2="72" stroke="#2d6799" strokeWidth="0.5" />
        <text x="59.5" y="75" textAnchor="middle" fontSize="4" fill="#2d6799" fontFamily="monospace">±0.1mm</text>
      </g>
    </svg>
  )
}

/* ─────────────────────────────────────────
   ANIMATION 2 — CNC Machining (loops)
───────────────────────────────────────── */
function CNCMachineAnim() {
  const headRef = useRef(null)
  const slotRef = useRef(null)
  const xtxtRef = useRef(null)
  const bitRef  = useRef(null)
  const rafRef  = useRef(null)
  const loopRef = useRef(null)

  useEffect(() => {
    let angle = 0

    const runCycle = () => {
      const head = headRef.current
      const slot = slotRef.current
      const xtxt = xtxtRef.current
      const bit  = bitRef.current
      if (!head) return

      head.style.transition = "none"
      head.style.transform  = "translateX(0)"
      if (slot) slot.setAttribute("width", "0")
      if (xtxt) xtxt.textContent = "X: 00.00"

      let start = null
      const step = (ts) => {
        if (!start) start = ts
        const e = ts - start
        angle = (angle + 4) % 360
        if (bit) bit.style.transform = `rotate(${angle}deg)`
        if (e >= 400) {
          const p = Math.min(1, (e - 400) / 1400)
          if (head) head.style.transform = `translateX(${p * 60}px)`
          if (slot) slot.setAttribute("width", String(p * 60))
          if (xtxt) xtxt.textContent = `X: ${(p * 60).toFixed(2)}`
        }
        if (e < 2100) {
          rafRef.current = requestAnimationFrame(step)
        } else {
          loopRef.current = setTimeout(runCycle, 1000)
        }
      }
      rafRef.current = requestAnimationFrame(step)
    }

    loopRef.current = setTimeout(runCycle, 400)
    return () => { cancelAnimationFrame(rafRef.current); clearTimeout(loopRef.current) }
  }, [])

  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="workpiece-g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#dce4ed" />
          <stop offset="100%" stopColor="#b8c6d6" />
        </linearGradient>
        <linearGradient id="slot-g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#8fa5bb" />
          <stop offset="100%" stopColor="#6b8499" />
        </linearGradient>
      </defs>
      <rect x="5"  y="58" width="110" height="4"  rx="1" fill="#c0ccd8" stroke="#a0b0bf" strokeWidth="0.4" />
      <rect x="15" y="38" width="90"  height="20" rx="2" fill="url(#workpiece-g2)" stroke="#98afc4" strokeWidth="0.5" />
      <rect ref={slotRef} x="15" y="44" width="0" height="7" rx="1" fill="url(#slot-g2)" />
      <line x1="10"  y1="14" x2="110" y2="14" stroke="#8d9faf" strokeWidth="1.5" />
      <rect x="10"  y="10" width="4" height="8" rx="1" fill="#7a8e9e" />
      <rect x="106" y="10" width="4" height="8" rx="1" fill="#7a8e9e" />
      <g ref={headRef} style={{ transform: "translateX(0)" }}>
        <rect x="12" y="15" width="18" height="22" rx="2" fill="#5e7384" stroke="#4a5e6d" strokeWidth="0.5" />
        <rect x="16" y="15" width="10" height="3"  rx="1" fill="#3d5162" />
        <rect x="18" y="35" width="6"  height="5"  rx="1" fill="#3d5162" />
        <g ref={bitRef} style={{ transformOrigin: "21px 45px" }}>
          <rect x="20" y="38" width="2" height="10" rx="0.5" fill="#192b45" />
          <line x1="21"   y1="38" x2="21"   y2="48" stroke="#2d6799" strokeWidth="0.5" strokeDasharray="1 1" />
          <line x1="19.5" y1="38" x2="22.5" y2="48" stroke="#2d6799" strokeWidth="0.3" opacity="0.6" />
          <line x1="22.5" y1="38" x2="19.5" y2="48" stroke="#2d6799" strokeWidth="0.3" opacity="0.6" />
        </g>
      </g>
      <rect x="78" y="10" width="36" height="16" rx="2" fill="#0f1e2d" stroke="#1a3248" strokeWidth="0.5" />
      <text ref={xtxtRef} x="96" y="17" textAnchor="middle" fontSize="4" fill="#2d6799" fontFamily="monospace">X: 00.00</text>
      <text x="96" y="23" textAnchor="middle" fontSize="4" fill="#1a6e3a" fontFamily="monospace">Z: 44.00</text>
    </svg>
  )
}

/* ─────────────────────────────────────────
   ANIMATION 3 — Weld / Assembly (loops)
───────────────────────────────────────── */
function WeldAnim() {
  const clipRef  = useRef(null)
  const torchRef = useRef(null)
  const checkRef = useRef(null)
  const rafRef   = useRef(null)
  const loopRef  = useRef(null)

  useEffect(() => {
    const runCycle = () => {
      const clipR = clipRef.current
      const torch = torchRef.current
      const check = checkRef.current
      if (!clipR) return

      clipR.setAttribute("width", "0")
      if (torch) { torch.style.transition = "none"; torch.style.opacity = "0" }
      if (check) { check.style.transition = "none"; check.style.opacity = "0"; check.style.transform = "translate(60px,14px) scale(0)" }

      let start = null
      const step = (ts) => {
        if (!start) start = ts
        const e = ts - start
        if (e < 400) { rafRef.current = requestAnimationFrame(step); return }
        const p = Math.min(1, (e - 400) / 1200)
        if (clipR) clipR.setAttribute("width", String(p * 80))
        if (p > 0 && p < 1) {
          if (torch) { torch.style.opacity = "1"; torch.style.transform = `translate(${20 + p * 80}px, 34px)` }
        } else {
          if (torch) torch.style.opacity = "0"
        }
        if (p >= 1) {
          if (check) {
            check.style.transition = "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s"
            check.style.opacity    = "1"
            check.style.transform  = "translate(60px,14px) scale(1)"
          }
          loopRef.current = setTimeout(runCycle, 1500)
          return
        }
        rafRef.current = requestAnimationFrame(step)
      }
      rafRef.current = requestAnimationFrame(step)
    }

    loopRef.current = setTimeout(runCycle, 500)
    return () => { cancelAnimationFrame(rafRef.current); clearTimeout(loopRef.current) }
  }, [])

  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="frame-a-g2" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%"   stopColor="#dce4ed" />
          <stop offset="100%" stopColor="#c4cfd9" />
        </linearGradient>
        <linearGradient id="frame-b-g2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#dce4ed" />
          <stop offset="100%" stopColor="#c4cfd9" />
        </linearGradient>
        <linearGradient id="weld-bead2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#192b45" />
          <stop offset="100%" stopColor="#2d6799" />
        </linearGradient>
        <clipPath id="weld-clip2">
          <rect ref={clipRef} x="20" y="34" width="0" height="12" />
        </clipPath>
      </defs>
      <rect x="5"  y="25" width="55" height="30" rx="2" fill="url(#frame-a-g2)" stroke="#98afc4" strokeWidth="0.5" />
      <rect x="10" y="32" width="45" height="16" rx="1" fill="#b0c0d0" />
      <rect x="12" y="35" width="41" height="10" rx="1" fill="#d5dee8" />
      <rect x="60" y="25" width="55" height="30" rx="2" fill="url(#frame-b-g2)" stroke="#98afc4" strokeWidth="0.5" />
      <rect x="65" y="32" width="45" height="16" rx="1" fill="#b0c0d0" />
      <rect x="67" y="35" width="41" height="10" rx="1" fill="#d5dee8" />
      <rect x="20" y="38" width="80" height="4" rx="2" fill="url(#weld-bead2)" clipPath="url(#weld-clip2)" opacity="0.85" />
      <g ref={torchRef} style={{ opacity: 0 }}>
        <line x1="0" y1="0" x2="0" y2="18" stroke="#192b45" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="0" cy="19" r="3"   fill="#6fafd8" opacity="0.5" />
        <circle cx="0" cy="19" r="1.5" fill="#ffffff"  opacity="0.8" />
      </g>
      <g ref={checkRef} style={{ opacity: 0, transform: "translate(60px,14px) scale(0)" }}>
        <circle cx="0" cy="0" r="7" fill="#1a4a6e" opacity="0.9" />
        <path d="M-3.5 0l2.5 2.5 5.5-5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  )
}

/* ─────────────────────────────────────────
   CARD WRAPPER
───────────────────────────────────────── */
function BentoCard({ children, animDelay = 0, inView, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border transition-colors duration-300 group ${className}`}
      style={{
        background: "#0f1825",
        borderColor: "rgba(45,103,153,0.18)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.7s ease ${animDelay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${animDelay}ms, border-color 0.3s ease, background 0.3s ease`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(111,175,216,0.35)"
        e.currentTarget.style.background  = "#0f1e30"
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(45,103,153,0.18)"
        e.currentTarget.style.background  = "#0f1825"
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: "linear-gradient(90deg, #192b45, #2d6799)", transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      />
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────
   CARD TAG
───────────────────────────────────────── */
function CardTag({ num, spec }) {
  return (
    <div
      className="inline-flex items-center gap-1.5 rounded px-2 py-0.5 mb-2"
      style={{ background: "rgba(45,103,153,0.2)", border: "1px solid rgba(45,103,153,0.25)" }}
    >
      <span className="font-mono text-[9px] tracking-[0.15em]" style={{ color: "#6fafd8" }}>{num}</span>
      <span className="font-mono text-[9px] tracking-[0.14em] pl-1.5" style={{ color: "#6fafd8", borderLeft: "1px solid rgba(45,103,153,0.3)" }}>{spec}</span>
    </div>
  )
}

/* ─────────────────────────────────────────
   ANIM BOX
───────────────────────────────────────── */
function AnimBox({ children, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden p-2 ${className}`}
      style={{ border: "1px solid rgba(45,103,153,0.15)", background: "rgba(10,15,26,0.6)" }}
    >
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────── */
export default function EngineeringSection() {
  const { ref: secRef, inView } = useInView(0.08)
  const EASE = "cubic-bezier(0.16,1,0.3,1)"

  return (
    <section ref={secRef} className="relative overflow-hidden" style={{ background: "#0a0f1a" }}>

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(45,103,153,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(45,103,153,0.04) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 py-16 md:py-20">

        {/* ── HEADER ── */}
        <div className="mb-8">
          <p
            className="font-mono text-[10px] tracking-[0.4em] uppercase mb-2"
            style={{
              color: "#6fafd8",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(14px)",
              transition: `opacity 0.6s ease 100ms, transform 0.6s ${EASE} 100ms`,
            }}
          >
            Three Key Factors
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold uppercase mb-5"
            style={{
              fontFamily: "var(--font-heading, Georgia, serif)",
              color: "#e8edf3",
              lineHeight: 1.05,
              letterSpacing: "0.06em",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(14px)",
              transition: `opacity 0.7s ease 200ms, transform 0.7s ${EASE} 200ms`,
            }}
          >
            Engineered with <span style={{ color: "#6fafd8" }}>Control</span>
          </h2>

          <div
            className="flex flex-wrap gap-8 pb-7 border-b"
            style={{
              borderColor: "rgba(45,103,153,0.18)",
              opacity: inView ? 1 : 0,
              transition: `opacity 0.7s ease 350ms`,
            }}
          >
            {[["±0.1mm", "Tolerance"], ["6-Axis", "Control"], ["100%", "Inspected"]].map(([val, lbl]) => (
              <div key={lbl}>
                <div className="font-mono font-bold text-xl tracking-wide" style={{ color: "#6fafd8", lineHeight: 1 }}>{val}</div>
                <div className="font-mono text-[9px] tracking-[0.18em] uppercase mt-1" style={{ color: "rgba(232,237,243,0.4)" }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BENTO GRID ──
            Mobile  (default) : 1 col — all 3 cards stack vertically
            Desktop (sm+)     : 2 col — card 1 spans full width, cards 2+3 side by side, equal height
        ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">

          {/* CARD 1 — full width on desktop, stacked anim+text on mobile */}
          <BentoCard animDelay={420} inView={inView} className="sm:col-span-2">
            {/* Desktop: row — anim left, text right | Mobile: col — anim top, text bottom */}
            <div className="flex flex-col sm:flex-row h-full">
              <AnimBox className="w-full sm:w-[300px] h-[160px] sm:h-auto shrink-0 rounded-xl sm:rounded-none sm:rounded-l-2xl border-b sm:border-b-0 sm:border-r" style={{ borderColor: "rgba(45,103,153,0.15)" }}>
                <CuttingAnim />
              </AnimBox>
              <div className="flex flex-col justify-center flex-1 p-6 sm:pl-8">
                <CardTag num="01" spec="±0.1mm" />
                <h3
                  className="font-bold uppercase mb-2 transition-colors duration-300 group-hover:text-[#6fafd8]"
                  style={{ fontFamily: "var(--font-heading, Georgia, serif)", fontSize: "clamp(1rem,2vw,1.25rem)", letterSpacing: "0.07em", color: "#e8edf3" }}
                >
                  Precision Cutting
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(232,237,243,0.45)" }}>
                  Exact tolerances on every aluminium and uPVC profile cut.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* CARD 2 — left col on desktop */}
          <BentoCard animDelay={540} inView={inView} className="flex flex-col">
            <AnimBox className="w-full h-[180px] rounded-xl sm:rounded-none sm:rounded-t-2xl">
              <CNCMachineAnim />
            </AnimBox>
            <div className="flex flex-col justify-center flex-1 p-5">
              <CardTag num="02" spec="6-Axis" />
              <h3
                className="font-bold uppercase mb-2 transition-colors duration-300 group-hover:text-[#6fafd8]"
                style={{ fontFamily: "var(--font-heading, Georgia, serif)", fontSize: "clamp(0.95rem,1.8vw,1.15rem)", letterSpacing: "0.07em", color: "#e8edf3" }}
              >
                CNC Machining
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(232,237,243,0.45)" }}>
                Computer-controlled accuracy across every unit in every batch.
              </p>
            </div>
          </BentoCard>

          {/* CARD 3 — right col on desktop */}
          <BentoCard animDelay={660} inView={inView} className="flex flex-col">
            <AnimBox className="w-full h-[180px] rounded-xl sm:rounded-none sm:rounded-t-2xl">
              <WeldAnim />
            </AnimBox>
            <div className="flex flex-col justify-center flex-1 p-5">
              <CardTag num="03" spec="Structural Grade" />
              <h3
                className="font-bold uppercase mb-2 transition-colors duration-300 group-hover:text-[#6fafd8]"
                style={{ fontFamily: "var(--font-heading, Georgia, serif)", fontSize: "clamp(0.95rem,1.8vw,1.15rem)", letterSpacing: "0.07em", color: "#e8edf3" }}
              >
                Seamless Assembly
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(232,237,243,0.45)" }}>
                Corner welds and fittings executed for lasting structural integrity.
              </p>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  )
}