"use client"

import { useState, useEffect, useRef } from "react"

function useInView(threshold = 0) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, inView }
}

/* ───────────── CuttingAnim ───────────── */
function CuttingAnim() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const bladeRef = useRef<SVGGElement | null>(null)
  const splitRef = useRef<SVGRectElement | null>(null)
  const hlineRef = useRef<SVGLineElement | null>(null)
  const vlineRef = useRef<SVGLineElement | null>(null)
  const dimRef   = useRef<SVGGElement | null>(null)

  useEffect(() => {
    const runCycle = () => {
      const blade = bladeRef.current
      const split = splitRef.current
      const hl = hlineRef.current
      const vl = vlineRef.current
      const dim = dimRef.current

      if (!blade || !split || !hl || !vl || !dim) return

      blade.style.transition = "none"
      blade.style.transform = "translateX(70px)"
      split.style.transition = "none"; split.style.opacity = "0"
      hl.style.transition = "none"; hl.style.opacity = "0"
      vl.style.transition = "none"; vl.style.opacity = "0"
      dim.style.transition = "none"; dim.style.opacity = "0"

      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          hl.style.transition = "opacity 0.3s 0.1s"; hl.style.opacity = "0.35"
          vl.style.transition = "opacity 0.3s 0.2s"; vl.style.opacity = "0.35"
          blade.style.transition = "transform 0.7s cubic-bezier(0.22,1,0.36,1)"
          blade.style.transform = "translateX(0)"

          timerRef.current = setTimeout(() => {
            split.style.transition = "opacity 0.1s"; split.style.opacity = "1"
            dim.style.transition = "opacity 0.5s"; dim.style.opacity = "1"
            timerRef.current = setTimeout(runCycle, 1800)
          }, 700)
        })
      )
    }

    timerRef.current = setTimeout(runCycle, 300)

    return () => {
      if (timerRef.current !== null) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <svg viewBox="0 0 120 80" className="w-full h-full">
      {/* Background plate */}
      <rect x="10" y="30" width="100" height="12" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" rx="2" />
      
      {/* Cut line (horizontal) */}
      <line ref={hlineRef} x1="10" y1="36" x2="110" y2="36" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" opacity="0" />
      
      {/* Cut line (vertical) */}
      <line ref={vlineRef} x1="60" y1="30" x2="60" y2="42" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" opacity="0" />
      
      {/* Split gap */}
      <rect ref={splitRef} x="58" y="29" width="4" height="14" fill="#0f172a" opacity="0" />
      
      {/* Dimensions group */}
      <g ref={dimRef} opacity="0">
        <line x1="10" y1="24" x2="110" y2="24" stroke="#64748b" strokeWidth="0.8" strokeDasharray="2 2" />
        <polygon points="10,22 10,26" fill="#64748b" />
        <polygon points="110,22 110,26" fill="#64748b" />
        <text x="60" y="22" fontSize="6" fill="#64748b" textAnchor="middle" dominantBaseline="middle">100mm</text>
      </g>
      
      {/* Blade group */}
      <g ref={bladeRef} transform="translateX(70)">
        <polygon points="0,28 12,28 12,44 0,44 4,36" fill="#475569" stroke="#1e293b" strokeWidth="0.8" />
        <circle cx="6" cy="36" r="2" fill="#f59e0b" />
      </g>
    </svg>
  )
}

/* ───────────── CNC ───────────── */
function CNCMachineAnim() {
  const headRef = useRef<SVGGElement | null>(null)
  const slotRef = useRef<SVGRectElement | null>(null)
  const xtxtRef = useRef<SVGTextElement | null>(null)
  const bitRef  = useRef<SVGGElement | null>(null)

  const rafRef  = useRef<number | null>(null)
  const loopRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let angle = 0

    const runCycle = () => {
      const head = headRef.current
      const slot = slotRef.current
      const xtxt = xtxtRef.current
      const bit = bitRef.current

      if (!head || !slot || !xtxt || !bit) return

      head.style.transition = "none"
      head.style.transform = "translateX(0)"
      slot.setAttribute("width", "0")
      xtxt.textContent = "X: 00.00"

      let start: number | null = null

      const step = (ts: number) => {
        if (!start) start = ts
        const e = ts - start

        angle = (angle + 4) % 360
        bit.style.transform = `rotate(${angle}deg)`

        if (e >= 400) {
          const p = Math.min(1, (e - 400) / 1400)
          head.style.transform = `translateX(${p * 60}px)`
          slot.setAttribute("width", String(p * 60))
          xtxt.textContent = `X: ${(p * 60).toFixed(2)}`
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

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      if (loopRef.current !== null) clearTimeout(loopRef.current)
    }
  }, [])

  return (
    <svg viewBox="0 0 120 80" className="w-full h-full">
      {/* Machine bed */}
      <rect x="10" y="45" width="100" height="25" fill="#1e293b" stroke="#0f172a" strokeWidth="1" rx="2" />
      <rect x="15" y="50" width="90" height="15" fill="#334155" rx="1" />
      
      {/* Slot being cut */}
      <rect ref={slotRef} x="15" y="53" width="0" height="9" fill="#0f172a" />
      
      {/* Rails */}
      <line x1="10" y1="43" x2="110" y2="43" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="10" y1="72" x2="110" y2="72" stroke="#94a3b8" strokeWidth="1.5" />
      
      {/* Spindle head group */}
      <g ref={headRef}>
        <rect x="20" y="20" width="24" height="24" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" rx="2" />
        <text x="32" y="36" fontSize="6" fill="#0f172a" textAnchor="middle">CNC</text>
        
        {/* Rotating bit group */}
        <g ref={bitRef} transform="translate(32, 44)">
          <polygon points="-3,-8 3,-8 1,8 -1,8" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
          <polygon points="-2,-4 2,-4 1,8 -1,8" fill="#475569" />
        </g>
      </g>
      
      {/* X position display */}
      <rect x="70" y="8" width="40" height="14" fill="#0f172a" rx="2" />
      <text ref={xtxtRef} x="90" y="18" fontSize="6" fill="#10b981" textAnchor="middle" fontFamily="monospace">X: 00.00</text>
    </svg>
  )
}

/* ───────────── Weld ───────────── */
function WeldAnim() {
  const clipRef  = useRef<SVGRectElement | null>(null)
  const torchRef = useRef<SVGGElement | null>(null)
  const checkRef = useRef<SVGGElement | null>(null)

  const rafRef   = useRef<number | null>(null)
  const loopRef  = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const runCycle = () => {
      const clipR = clipRef.current
      const torch = torchRef.current
      const check = checkRef.current

      if (!clipR || !torch || !check) return

      clipR.setAttribute("width", "0")
      torch.style.opacity = "0"
      check.style.opacity = "0"

      let start: number | null = null

      const step = (ts: number) => {
        if (!start) start = ts
        const e = ts - start

        if (e < 400) {
          rafRef.current = requestAnimationFrame(step)
          return
        }

        const p = Math.min(1, (e - 400) / 1200)
        clipR.setAttribute("width", String(p * 80))

        if (p < 1) {
          torch.style.opacity = "1"
        } else {
          check.style.opacity = "1"
          loopRef.current = setTimeout(runCycle, 1500)
          return
        }

        rafRef.current = requestAnimationFrame(step)
      }

      rafRef.current = requestAnimationFrame(step)
    }

    loopRef.current = setTimeout(runCycle, 500)

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      if (loopRef.current !== null) clearTimeout(loopRef.current)
    }
  }, [])

  return (
    <svg viewBox="0 0 120 80" className="w-full h-full">
      {/* Base metal plates */}
      <rect x="10" y="35" width="45" height="10" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
      <rect x="65" y="35" width="45" height="10" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
      
      {/* Weld seam (animated fill) */}
      <rect ref={clipRef} x="55" y="38" width="0" height="4" fill="#f59e0b" />
      
      {/* Weld torch group */}
      <g ref={torchRef} opacity="0">
        <rect x="54" y="22" width="12" height="8" fill="#475569" rx="1" />
        <polygon points="56,30 64,30 60,38" fill="#f59e0b" />
        <line x1="55" y1="26" x2="65" y2="26" stroke="#10b981" strokeWidth="1" />
        <circle cx="60" cy="36" r="3" fill="#ef4444" opacity="0.6" />
      </g>
      
      {/* Checkmark done */}
      <g ref={checkRef} opacity="0">
        <circle cx="60" cy="50" r="8" fill="#10b981" />
        <polyline points="56,50 58,53 65,46" fill="none" stroke="white" strokeWidth="1.5" />
      </g>
      
      {/* Labels */}
      <text x="32" y="52" fontSize="5" fill="#0f172a" textAnchor="middle">PLATE A</text>
      <text x="88" y="52" fontSize="5" fill="#0f172a" textAnchor="middle">PLATE B</text>
    </svg>
  )
}

/* ───────────── MAIN ───────────── */
export default function EngineeringSection() {
  const { ref, inView } = useInView(0.08)

  return (
    <section ref={ref} className="p-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Engineering Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
            <div className="h-32 mb-4">
              <CuttingAnim />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800">Precision Cutting</h3>
            <p className="text-gray-600 text-center mt-2">Laser-accurate cuts with zero tolerance</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
            <div className="h-32 mb-4">
              <CNCMachineAnim />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800">CNC Machining</h3>
            <p className="text-gray-600 text-center mt-2">Computer-controlled precision down to 0.01mm</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
            <div className="h-32 mb-4">
              <WeldAnim />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800">Robotic Welding</h3>
            <p className="text-gray-600 text-center mt-2">Automated seamless joints for maximum strength</p>
          </div>
        </div>
      </div>
    </section>
  )
}