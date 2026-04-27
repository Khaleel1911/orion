// "use client"

// import { useRef, useState, useEffect } from "react"

// const STEPS = [
//   {
//     number: "01",
//     title: "Consultation",
//     description:
//       "We listen first. Every site, brief, and vision is different — we understand yours before recommending anything.",
//   },
//   {
//     number: "02",
//     title: "System Design",
//     description:
//       "Technical detailing and profile selection tailored to your architecture, climate, and performance needs.",
//   },
//   {
//     number: "03",
//     title: "Fabrication",
//     description:
//       "Precision CNC manufacturing in-house. Every component cut, machined, and assembled to exact specification.",
//   },
//   {
//     number: "04",
//     title: "Installation",
//     description:
//       "Clean, accurate on-site execution — a finish that performs exactly as engineered.",
//   },
// ]

// const EASE   = "cubic-bezier(0.16,1,0.3,1)"
// const SPRING = "cubic-bezier(0.34,1.56,0.64,1)"

// const LINE_DELAY = 300
// const LINE_DUR   = 1800
// const nodeDelay  = (i: number) => LINE_DELAY + Math.round((LINE_DUR / (STEPS.length - 1)) * i)

// /* Node is a 44 px circle; half = 22 px. Stem = 16 px between node edge and content. */
// const HALF_NODE = 22
// const STEM      = 16

// export default function ProcessSection() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const [headIn,  setHeadIn]  = useState(false)
//   const [tlIn,    setTlIn]    = useState(false)
//   const [ringKey, setRingKey] = useState(0)

//   useEffect(() => {
//     const el = sectionRef.current
//     if (!el) return
//     const obs = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (e.isIntersecting) {
//             setHeadIn(true)
//             setTimeout(() => {
//               setTlIn(true)
//               setRingKey((k) => k + 1)
//             }, 200)
//             obs.disconnect()
//           }
//         })
//       },
//       { threshold: 0.05 }
//     )
//     obs.observe(el)
//     return () => obs.disconnect()
//   }, [])

//   return (
//     <section style={{ background: "#fafaf8" }} className="overflow-hidden">
//       <div
//         ref={sectionRef}
//         className="max-w-6xl mx-auto px-6 lg:px-12 py-12 md:py-16"
//       >

//         {/* ── Header ── */}
//         <div style={{ marginBottom: "2.5rem" }}>
//           <div style={{ overflow: "hidden", marginBottom: "0.9rem" }}>
//             <p
//               className="font-body text-accent uppercase"
//               style={{
//                 fontSize: "10px",
//                 letterSpacing: "0.5em",
//                 transform: headIn ? "translateY(0)" : "translateY(110%)",
//                 transition: `transform 0.7s ${EASE}`,
//               }}
//             >
//               Our Process
//             </p>
//           </div>
//           <div style={{ overflow: "hidden" }}>
//             <h2
//               className="font-heading text-primary leading-tight"
//               style={{
//                 fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
//                 transform: headIn ? "translateY(0)" : "translateY(110%)",
//                 transition: `transform 0.9s ${EASE} 80ms`,
//               }}
//             >
//               How We Work
//             </h2>
//           </div>
//         </div>

//         {/* ══════════════════════════════════════════════════════
//             DESKTOP — alternating above / below timeline
//         ══════════════════════════════════════════════════════ */}
//         <div className="hidden md:block">
//           {/*
//             Fixed-height canvas.
//             The horizontal line bisects it at 50 %.
//             Steps 01 & 03 → content above the line.
//             Steps 02 & 04 → content below the line.
//           */}
//           <div style={{ position: "relative", height: "300px" }}>

//             {/* Background track */}
//             <div style={{
//               position  : "absolute",
//               top       : "50%",
//               marginTop : "-0.5px",
//               left      : "12.5%",
//               right     : "12.5%",
//               height    : "1px",
//               background: "rgba(25,43,69,0.08)",
//             }} />

//             {/* Animated fill line */}
//             <div style={{
//               position       : "absolute",
//               top            : "50%",
//               marginTop      : "-0.5px",
//               left           : "12.5%",
//               right          : "12.5%",
//               height         : "1px",
//               background     : "linear-gradient(to right, #192b45 0%, #2d6799 100%)",
//               transformOrigin: "left center",
//               transform      : tlIn ? "scaleX(1)" : "scaleX(0)",
//               transition     : `transform ${LINE_DUR}ms ${EASE} ${LINE_DELAY}ms`,
//             }} />

//             {/* Step columns */}
//             <div style={{ position: "absolute", inset: 0, display: "flex" }}>
//               {STEPS.map(({ number, title, description }, i) => {
//                 const nd    = nodeDelay(i)
//                 const above = i % 2 === 0   // 01 & 03 above; 02 & 04 below

//                 return (
//                   <div
//                     key={number}
//                     className="proc-col"
//                     style={{ flex: "1 1 0", position: "relative" }}
//                   >

//                     {/* ── Content block (text) ── */}
//                     <div
//                       className="proc-content"
//                       style={{
//                         position : "absolute",
//                         left     : "8px",
//                         right    : "8px",
//                         ...(above
//                           ? { bottom: `calc(50% + ${HALF_NODE + STEM}px)` }
//                           : { top:    `calc(50% + ${HALF_NODE + STEM}px)` }),
//                         textAlign: "center",
//                         opacity  : tlIn ? 1 : 0,
//                         transform: tlIn
//                           ? "translateY(0)"
//                           : above ? "translateY(-18px)" : "translateY(18px)",
//                         transition: `opacity 0.7s ease ${nd + 260}ms, transform 0.7s ${EASE} ${nd + 260}ms`,
//                       }}
//                     >
//                       <h3
//                         className="proc-title font-heading text-primary"
//                         style={{ fontSize: "clamp(0.9rem, 1.35vw, 1rem)", marginBottom: "0.4rem" }}
//                       >
//                         {title}
//                       </h3>

//                       <div style={{
//                         width     : tlIn ? "22px" : "0px",
//                         height    : "1.5px",
//                         background: "#2d6799",
//                         margin    : "0 auto 0.55rem",
//                         transition: `width 0.5s ${EASE} ${nd + 400}ms`,
//                       }} />

//                       <p
//                         className="proc-desc font-body text-foreground/40 leading-relaxed"
//                         style={{ fontSize: "0.8rem" }}
//                       >
//                         {description}
//                       </p>
//                     </div>

//                     {/* ── Stem line — connects content to node ── */}
//                     <div style={{
//                       position  : "absolute",
//                       left      : "50%",
//                       marginLeft: "-0.5px",
//                       width     : "1px",
//                       height    : `${STEM}px`,
//                       ...(above
//                         ? { bottom: `calc(50% + ${HALF_NODE}px)` }
//                         : { top:    `calc(50% + ${HALF_NODE}px)` }),
//                       background: tlIn ? "rgba(25,43,69,0.18)" : "rgba(25,43,69,0)",
//                       transition: `background 0.45s ease ${nd + 100}ms`,
//                     }} />

//                     {/* ── Node circle — sits centred ON the line ── */}
//                     <div
//                       className="proc-node"
//                       style={{
//                         position : "absolute",
//                         top      : "50%",
//                         left     : "50%",
//                         width    : `${HALF_NODE * 2}px`,
//                         height   : `${HALF_NODE * 2}px`,
//                         transform: tlIn
//                           ? "translate(-50%, -50%) scale(1)"
//                           : "translate(-50%, -50%) scale(0)",
//                         transition: `transform 0.6s ${SPRING} ${nd}ms`,
//                         zIndex   : 4,
//                       }}
//                     >
//                       {/* Outer border */}
//                       <div style={{
//                         position   : "absolute",
//                         inset      : 0,
//                         borderRadius: "50%",
//                         border     : "1.5px solid",
//                         borderColor: tlIn ? "#192b45" : "rgba(25,43,69,0.1)",
//                         background : "#fafaf8",
//                         transition : `border-color 0.4s ease ${nd}ms`,
//                       }} />

//                       {/* Inner filled circle */}
//                       <div style={{
//                         position    : "absolute",
//                         inset       : "6px",
//                         borderRadius: "50%",
//                         background  : tlIn ? "#192b45" : "transparent",
//                         transition  : `background 0.45s ease ${nd + 200}ms`,
//                         display     : "flex",
//                         alignItems  : "center",
//                         justifyContent: "center",
//                       }}>
//                         <span
//                           className="font-heading"
//                           style={{
//                             fontSize    : "0.58rem",
//                             letterSpacing: "0.1em",
//                             color       : tlIn ? "#fafaf8" : "transparent",
//                             transition  : `color 0.3s ease ${nd + 330}ms`,
//                           }}
//                         >
//                           {number}
//                         </span>
//                       </div>

//                       {/* One-shot pulse ring */}
//                       {tlIn && (
//                         <div
//                           key={`ring-${ringKey}-${i}`}
//                           style={{
//                             position    : "absolute",
//                             inset       : "-12px",
//                             borderRadius: "50%",
//                             border      : "1px solid rgba(45,103,153,0.45)",
//                             animation   : `procRing 1s ease-out ${nd + 80}ms both`,
//                             pointerEvents: "none",
//                           }}
//                         />
//                       )}
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>

//         {/* ══════════════════════════════════════════════════════
//             MOBILE — vertical timeline
//         ══════════════════════════════════════════════════════ */}
//         <div className="md:hidden" style={{ position: "relative", paddingLeft: "56px" }}>

//           {/* Vertical connector */}
//           <div style={{
//             position  : "absolute",
//             left      : "20px",
//             top       : "21px",
//             width     : "1px",
//             background: "rgba(25,43,69,0.12)",
//             height    : tlIn ? "calc(100% - 21px)" : "0%",
//             transition: `height 1.8s ${EASE} ${LINE_DELAY}ms`,
//           }} />

//           {STEPS.map(({ number, title, description }, i) => {
//             const nd = LINE_DELAY + i * 280
//             return (
//               <div
//                 key={number}
//                 style={{
//                   position     : "relative",
//                   paddingBottom: i < STEPS.length - 1 ? "2.25rem" : 0,
//                   opacity      : tlIn ? 1 : 0,
//                   transform    : tlIn ? "translateX(0)" : "translateX(20px)",
//                   transition   : `opacity 0.6s ease ${nd}ms, transform 0.6s ${EASE} ${nd}ms`,
//                 }}
//               >
//                 {/* Mobile circular node */}
//                 <div style={{
//                   position      : "absolute",
//                   left          : "-46px",
//                   top           : "0",
//                   width         : "42px",
//                   height        : "42px",
//                   borderRadius  : "50%",
//                   border        : "1.5px solid",
//                   borderColor   : tlIn ? "#192b45" : "rgba(25,43,69,0.12)",
//                   background    : "#fafaf8",
//                   display       : "flex",
//                   alignItems    : "center",
//                   justifyContent: "center",
//                   zIndex        : 2,
//                   transform     : tlIn ? "scale(1)" : "scale(0)",
//                   transition    : `transform 0.55s ${SPRING} ${nd}ms, border-color 0.4s ease ${nd}ms`,
//                 }}>
//                   <span
//                     className="font-heading"
//                     style={{ fontSize: "10px", letterSpacing: "0.06em", color: "#192b45", opacity: 0.7 }}
//                   >
//                     {number}
//                   </span>
//                 </div>

//                 <h3
//                   className="font-heading text-primary"
//                   style={{ fontSize: "1.05rem", marginBottom: "0.45rem" }}
//                 >
//                   {title}
//                 </h3>
//                 <p
//                   className="font-body text-foreground/45 leading-relaxed"
//                   style={{ fontSize: "0.875rem" }}
//                 >
//                   {description}
//                 </p>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       {/* ── Keyframes + hover CSS ── */}
//       <style>{`
//         @keyframes procRing {
//           0%   { transform: scale(1);   opacity: 0.55; }
//           100% { transform: scale(2.6); opacity: 0;    }
//         }

//         .proc-col { cursor: default; }

//         /* Node outer border hover */
//         .proc-node > div:first-child {
//           transition: border-color 0.3s ease, box-shadow 0.35s ease !important;
//         }
//         .proc-col:hover .proc-node > div:first-child {
//           border-color: #2d6799 !important;
//           box-shadow: 0 0 0 7px rgba(45,103,153,0.06), 0 0 28px rgba(45,103,153,0.14);
//         }

//         /* Inner dot colour shift */
//         .proc-col:hover .proc-node > div:nth-child(2) {
//           background: #2d6799 !important;
//           transition: background 0.25s ease !important;
//         }

//         /* Title + description colour shift */
//         .proc-title { transition: color 0.25s ease; }
//         .proc-col:hover .proc-title { color: #2d6799 !important; }

//         .proc-desc { transition: color 0.25s ease; }
//         .proc-col:hover .proc-desc { color: rgba(25,43,69,0.65) !important; }
//       `}</style>
//     </section>
//   )
// }
"use client"

import { useRef, useState, useEffect } from "react"

const STEPS = [
  { n: "01", title: "Consultation",  desc: "We listen first. Every site and vision is different — we understand yours before recommending anything." },
  { n: "02", title: "System Design", desc: "Technical detailing tailored to your architecture, climate, and performance needs." },
  { n: "03", title: "Fabrication",   desc: "Precision CNC manufacturing in-house. Every component cut and assembled to exact spec." },
  { n: "04", title: "Installation",  desc: "Clean, accurate on-site execution — a finish that performs exactly as engineered." },
]

const SP = "cubic-bezier(0.16,1,0.3,1)"

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [go, setGo] = useState(false)
  const [hov, setHov] = useState<number | null>(null)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setGo(true); obs.disconnect() }
    }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section style={{ background: "#fafaf8" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-12 py-10 md:py-14">

        {/* Top row */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem", marginBottom: "2.75rem" }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.55em", textTransform: "uppercase", color: "primary", marginBottom: "0.55rem" }}>
              Our Process
            </p>
            <h2 style={{
              fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 500, color: "primary", lineHeight: 1,
              opacity: go ? 1 : 0, transform: go ? "none" : "translateY(24px)",
              transition: `opacity .8s, transform .9s ${SP}`,
            }}>
              How We<br />Work
            </h2>
          </div>
          <p style={{
            fontSize: "0.75rem", lineHeight: 1.6, color: "primary",
            maxWidth: 200, textAlign: "right", flexShrink: 0,
            opacity: go ? 1 : 0, transition: "opacity .8s 250ms",
          }}>
            Four deliberate steps — from first conversation to finished installation.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 0 }}>
          {STEPS.map(({ n, title, desc }, i) => {
            const isHov = hov === i
            const nd = 280 + i * 120
            return (
              <div
                key={n}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{
                  position: "relative", paddingTop: "1.25rem", cursor: "default",
                  marginRight: i < 3 ? "1.5rem" : 0,
                  borderTop: `1px solid rgba(17,18,16,${isHov ? 0 : 0.07})`,
                  transition: "border-color .3s",
                }}
              >
                {/* Animated top border */}
                <div style={{
                  position: "absolute", top: -1, left: 0, height: 1,
                  background: "#111210",
                  width: isHov ? "100%" : "0%",
                  transition: `width .4s ${SP}`,
                }} />

                {/* Big number */}
                <div style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 500, lineHeight: 1,
                  letterSpacing: "-0.02em", marginBottom: "1.5rem",
                  color: isHov ? "primary" : "primary",
                  opacity: go ? 1 : 0, transform: go ? "none" : "translateY(16px)",
                  transition: `color .35s ${SP}, opacity .5s ${SP} ${nd}ms, transform .55s ${SP} ${nd}ms`,
                }}>
                  {n}
                </div>

                <h3 style={{
                  fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.2, marginBottom: "0.5rem",
                  color: isHov ? "primary" : "primary",
                  opacity: go ? 1 : 0, transform: go ? "none" : "translateY(8px)",
                  transition: `color .25s, opacity .5s ${SP} ${nd + 80}ms, transform .55s ${SP} ${nd + 80}ms`,
                }}>
                  {title}
                </h3>

                <p style={{
                  fontSize: "0.73rem", lineHeight: 1.65, color: "rgba(17,18,16,0.4)",
                  opacity: go ? 1 : 0,
                  transition: `opacity .5s ${SP} ${nd + 160}ms`,
                }}>
                  {desc}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}