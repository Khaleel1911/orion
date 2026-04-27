"use client"

import Link from "next/link"
import Image from "next/image"
import { useInView } from "@/hooks/useInView"

const NAV = [
  {
    label: "Products",
    links: [
      { name: "Sliding Systems", href: "/products#sliding" },
      { name: "Casement Windows", href: "/products#casement" },
      { name: "Skylights", href: "/products#skylights" },
      { name: "Slim Partitions", href: "/products#partitions" },
      { name: "Railings", href: "/products#railings" },
    ],
  },
  {
    label: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Experience Center", href: "#experience" },
      { name: "Contact", href: "/contact" },
    ],
  },
]

const EASE = "cubic-bezier(0.16,1,0.3,1)"

export default function Footer() {
  const { ref, inView } = useInView(0.1)

  return (
    <footer style={{ background: "#0a1520" }} className="overflow-hidden">

      {/* ── Main content ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-14 pb-8" ref={ref}>
        <div
          className="flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-20"
          style={{ paddingBottom: "4rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >

          {/* Brand column */}
          <div
            className="lg:max-w-xs"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.8s ease, transform 0.8s ${EASE}`,
            }}
          >
            <div className="relative mb-8" style={{ width: "110px", height: "44px" }}>
              <Image
                src="/logo.png"
                alt="Orion World"
                fill
                className="object-contain"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
              />
            </div>
            <p
              className="font-body text-white/35 leading-relaxed mb-8"
              style={{ fontSize: "0.9rem" }}
            >
              Engineered window and door systems for residential and commercial spaces — built for
              performance, designed to last.
            </p>
            <p
              className="font-body text-white/20 uppercase"
              style={{ fontSize: "9px", letterSpacing: "0.4em" }}
            >
              Raipur, Chhattisgarh, India
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-16 lg:gap-24">
            {NAV.map(({ label, links }, colIdx) => (
              <div
                key={label}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.8s ease ${colIdx * 100 + 100}ms, transform 0.8s ${EASE} ${colIdx * 100 + 100}ms`,
                }}
              >
                <p
                  className="font-body text-white/25 uppercase mb-6"
                  style={{ fontSize: "9px", letterSpacing: "0.45em" }}
                >
                  {label}
                </p>
                <ul className="flex flex-col gap-3.5">
                  {links.map(({ name, href }) => (
                    <li key={name}>
                      <Link
                        href={href}
                        className="font-body text-white/45 hover:text-white/80 transition-colors duration-200"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8"
          style={{
            opacity: inView ? 1 : 0,
            transition: `opacity 0.8s ease 400ms`,
          }}
        >
          <p
            className="font-body text-white/20"
            style={{ fontSize: "11px", letterSpacing: "0.05em" }}
          >
            © {new Date().getFullYear()} Orion World. All rights reserved.
          </p>
          <p
            className="font-body text-white/15 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.35em" }}
          >
            Engineered for performance
          </p>
        </div>
      </div>
    </footer>
  )
}
