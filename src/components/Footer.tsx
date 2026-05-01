"use client"

import Link from "next/link"
import Image from "next/image"
import { useInView } from "@/hooks/useInView"
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhoneVolume, FaYoutube } from "react-icons/fa6"

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
]

const PRODUCT_LINKS = [
  { name: "Aluminium Windows & Doors", href: "/products" },
  { name: "uPVC Systems", href: "/products" },
  { name: "Slim Partitions", href: "/products" },
  { name: "Glass & Railings", href: "/products" },
]

const EASE = "cubic-bezier(0.16,1,0.3,1)"

export default function Footer() {
  const { ref, inView } = useInView(0.1)

  return (
    <footer className="bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10 pt-14 pb-8" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-10 pb-10 border-b border-white/10">
          <FooterCol delay={0} inView={inView}>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Orion World"
                width={48}
                height={48}
                className="h-16 w-16 object-contain"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.95 }}
              />
              <h3
                className="uppercase nowrap"
                style={{
                  fontFamily: "var(--font-cinzel), Cinzel, serif",
                  letterSpacing: "0.06em",
                  fontSize: "1.7rem",
                  lineHeight: 1,
                }}
              >
                Orion World
              </h3>
            </div>
            <p
              className="mt-5 text-primary-foreground/70"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.75,
              }}
            >
              Premium Italian-inspired system aluminium and uPVC windows, doors, partitions,
              louvers, and railings engineered in Raipur.
            </p>
          </FooterCol>

          <FooterCol delay={80} inView={inView}>
            <SectionTitle>Factory Address</SectionTitle>
            <div className="mt-4 flex gap-2.5">
              <FaLocationDot className="mt-1 text-secondary" />
              <p className="footer-text">
                Orion World,
                <br />
                Sakri,
                <br />
                Raipur, Chhattisgarh, India
              </p>
            </div>
          </FooterCol>

          <FooterCol delay={160} inView={inView}>
            <SectionTitle>Experience Center</SectionTitle>
            <div className="mt-4 flex gap-2.5">
              <FaLocationDot className="mt-1 text-secondary" />
              <p className="footer-text">
                Shop no. Y2, Rama World,
                <br />
                Vidhan Sabha Road,
                <br />
                Raipur (C.G.)
              </p>
            </div>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7435.630009514766!2d81.69200219357907!3d21.278789200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e994c8b4d5f1%3A0xac2b82f83cacb4c8!2sRama%20World%20Raipur!5e0!3m2!1sen!2sin!4v1777634040382!5m2!1sen!2sin"
                title="Rama World Raipur map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[118px] w-full"
                style={{ border: 0 }}
              />
            </div>
          </FooterCol>

          <FooterCol delay={240} inView={inView}>
            <SectionTitle>Contact Us</SectionTitle>
            <div className="mt-4 space-y-2.5">
              <div className="flex gap-2.5">
                <FaPhoneVolume className="mt-1 text-secondary" />
                <p className="footer-text">
                  +91 91488 58910
                  <br />
                  +91 95835 00026
                </p>
              </div>
              <div className="flex gap-2.5">
                <FaEnvelope className="mt-1 text-secondary" />
                <p className="footer-text">orionworld@gmail.com</p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <Social href="#" label="Instagram">
                <FaInstagram />
              </Social>
              <Social href="#" label="LinkedIn">
                <FaLinkedinIn />
              </Social>
              <Social href="#" label="YouTube">
                <FaYoutube />
              </Social>
            </div>
          </FooterCol>

          <FooterCol delay={320} inView={inView}>
            <SectionTitle>Quick Links</SectionTitle>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="footer-link">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-2.5">
              {PRODUCT_LINKS.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="footer-link">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>
        </div>

        <div
          className="pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
          style={{
            opacity: inView ? 1 : 0,
            transition: `opacity 0.8s ease 420ms`,
          }}
        >
          <p
            className="text-primary-foreground/55"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "0.76rem",
            }}
          >
            © {new Date().getFullYear()} Orion World. All rights reserved.
          </p>
          <div
            className="flex items-center gap-5 text-primary-foreground/45"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "0.74rem",
            }}
          >
            <Link href="/products" className="hover:text-primary-foreground/80 transition-colors">
              Products
            </Link>
            <Link href="/projects" className="hover:text-primary-foreground/80 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-primary-foreground/80 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-text {
          font-family: var(--font-poppins), Poppins, sans-serif;
          font-size: 0.9rem;
          line-height: 1.65;
          color: rgb(255 255 255 / 0.78);
        }
        .footer-link {
          font-family: var(--font-poppins), Poppins, sans-serif;
          font-size: 0.9rem;
          color: rgb(255 255 255 / 0.76);
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: rgb(255 255 255 / 0.98);
        }
      `}</style>
    </footer>
  )
}

function FooterCol({
  children,
  inView,
  delay,
}: {
  children: React.ReactNode
  inView: boolean
  delay: number
}) {
  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ${EASE} ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="uppercase text-primary-foreground/65"
      style={{
        fontFamily: "var(--font-poppins), Poppins, sans-serif",
        fontSize: "0.73rem",
        fontWeight: 600,
        letterSpacing: "0.12em",
      }}
    >
      {children}
    </p>
  )
}

function Social({
  href,
  children,
  label,
}: {
  href: string
  children: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-primary-foreground/75 transition-colors hover:bg-white/10 hover:text-primary-foreground"
    >
      {children}
    </a>
  )
}
