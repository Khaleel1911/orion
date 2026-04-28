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

  return <svg viewBox="0 0 120 80" className="w-full h-full" />
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

  return <svg viewBox="0 0 120 80" className="w-full h-full" />
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

  return <svg viewBox="0 0 120 80" className="w-full h-full" />
}

/* ───────────── MAIN ───────────── */
export default function EngineeringSection() {
  const { ref, inView } = useInView(0.08)

  return (
    <section ref={ref} className="p-10">
      <CuttingAnim />
      <CNCMachineAnim />
      <WeldAnim />
    </section>
  )
}