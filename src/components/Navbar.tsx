"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10"
          : "border-b border-transparent"
      )}
      style={{
        background:  "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Orion World">
            <div className="relative" style={{ width: "110px", height: "44px" }}>
              <Image
                src="/logo.png"
                alt="Orion World"
                fill
                className="object-contain"
                priority
                style={{
                  filter: "brightness(0) invert(1)",
                  opacity: scrolled ? 1 : 0.92,
                }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setActiveLink(href)}
                  className={cn(
                    "relative font-sans text-sm tracking-wide transition-all duration-200",
                    "after:absolute after:-bottom-0.5 after:left-0",
                    "after:h-px after:w-0 after:bg-white/60",
                    "after:transition-all after:duration-300 hover:after:w-full",
                    activeLink === href
                      ? "text-white after:w-full"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Contact + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                "hidden md:inline-flex items-center",
                "font-sans text-sm tracking-widest uppercase",
                "text-white/80 hover:text-white",
                "border border-white/25 hover:border-white/50",
                "px-6 py-2.5 transition-all duration-200"
              )}
              style={{ letterSpacing: "0.12em" }}
            >
              Contact
            </Link>

            {/* Mobile hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:bg-white/10 rounded-none"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-72 p-0 border-l border-white/10 rounded-none"
                style={{ background: "#192b45" }}
              >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
                  <Link href="/" onClick={() => setMobileOpen(false)}>
                    <div className="relative" style={{ width: "90px", height: "36px" }}>
                      <Image
                        src="/logo.png"
                        alt="Orion World"
                        fill
                        className="object-contain"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    </div>
                  </Link>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white/60 hover:text-white hover:bg-white/10 rounded-none"
                      aria-label="Close menu"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Mobile links */}
                <ul className="flex flex-col px-8 py-6 gap-1">
                  {navLinks.map(({ label, href }) => (
                    <li key={href}>
                      <SheetClose asChild>
                        <Link
                          href={href}
                          onClick={() => setActiveLink(href)}
                          className={cn(
                            "block py-4 font-sans text-sm tracking-widest uppercase transition-colors duration-200",
                            "border-b border-white/8",
                            activeLink === href
                              ? "text-white"
                              : "text-white/45 hover:text-white/80"
                          )}
                          style={{ letterSpacing: "0.15em" }}
                        >
                          {label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>

                <div className="px-8 pt-4">
                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className="block w-full text-center font-sans text-sm tracking-widest uppercase py-3 text-white/80 hover:text-white border border-white/25 hover:border-white/50 transition-all duration-200"
                      style={{ letterSpacing: "0.15em" }}
                    >
                      Contact
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
