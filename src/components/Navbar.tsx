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
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        scrolled ? "py-3" : "py-5"
      )}
    >
      {/* Glassmorphism container */}
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          "rounded-2xl transition-all duration-500",
          scrolled
            ? [
                "glass-scrolled",
                "shadow-[0_8px_32px_rgba(25,43,69,0.12)]",
                "dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
              ]
            : "glass-top"
        )}
      >
        <nav className="flex items-center justify-between h-14 sm:h-16">
          {/* ── LEFT: Logo ── */}
          <Link
                href="/"
                className="flex items-center gap-2.5 shrink-0 group"
                aria-label="Home"
                >
                {/* Logo Image */}
                <div className="relative w-20 sm:w-28 md:w-32 aspect-[4/3]">
  <Image
    src="/logo.png"
    alt="Acme Logo"
    fill
    className="object-contain"
    priority
  />
</div>

                </Link>

          {/* ── CENTER: Nav links (hidden on mobile) ── */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setActiveLink(href)}
                  className={cn(
                    "relative px-4 py-2 rounded-xl text-sm font-sans font-medium transition-all duration-200",
                    "hover:text-[#2d6799] dark:hover:text-white",
                    "after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2",
                    "after:h-0.5 after:w-0 after:rounded-full",
                    "after:bg-[#2d6799] dark:after:bg-white/70",
                    "after:transition-all after:duration-300 hover:after:w-4/5",
                    activeLink === href
                      ? [
                          "text-[#2d6799] dark:text-white",
                          "bg-[#2d6799]/10 dark:bg-white/10",
                          "after:w-4/5",
                        ]
                      : "text-foreground/75"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── RIGHT: Contact link + Mobile menu ── */}
          <div className="flex items-center gap-3">
            {/* Contact — text link, NOT a button */}
            <Link
              href="/contact"
              className={cn(
                "hidden md:inline-flex items-center gap-1.5",
                "text-sm font-sans font-semibold tracking-wide",
                "text-[#192b45] dark:text-white",
                "border border-[#192b45]/20 dark:border-white/20",
                "px-5 py-2 rounded-xl",
                "backdrop-blur-sm",
                "hover:border-[#2d6799] hover:text-[#2d6799]",
                "dark:hover:border-white/60 dark:hover:text-white",
                "transition-all duration-200"
              )}
            >
              Contact
            </Link>

            {/* Mobile hamburger via Sheet */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden rounded-xl text-foreground hover:bg-foreground/10"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className={cn(
                  "w-72 sm:w-80 p-0 border-l border-border/40",
                  "bg-white/80 dark:bg-[#192b45]/80 backdrop-blur-2xl"
                )}
              >
                {/* Mobile drawer header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-border/30">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5"
                  >
                    <div className="relative w-8 h-8">
                      <div className="absolute inset-0 rounded-xl rotate-12 bg-gradient-to-br from-[#2d6799] to-[#192b45] dark:from-[#2d6799] dark:to-white/90" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-heading font-bold text-sm">A</span>
                      </div>
                    </div>
                    <span className="font-heading font-bold text-lg text-foreground">
                      Acme
                    </span>
                  </Link>

                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-xl text-foreground hover:bg-foreground/10"
                      aria-label="Close menu"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Mobile nav links */}
                <ul className="flex flex-col gap-1 p-4">
                  {navLinks.map(({ label, href }) => (
                    <li key={href}>
                      <SheetClose asChild>
                        <Link
                          href={href}
                          onClick={() => setActiveLink(href)}
                          className={cn(
                            "flex items-center w-full px-4 py-3 rounded-xl",
                            "text-base font-sans font-medium transition-all duration-200",
                            activeLink === href
                              ? "bg-[#2d6799]/15 text-[#2d6799] dark:text-white dark:bg-white/15"
                              : "text-foreground/75 hover:bg-foreground/8 hover:text-foreground"
                          )}
                        >
                          {label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>

                {/* Mobile Contact */}
                <div className="px-4 pt-2">
                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className={cn(
                        "flex items-center justify-center w-full px-5 py-3 rounded-xl",
                        "text-sm font-sans font-semibold tracking-wide",
                        "border border-[#192b45]/25 dark:border-white/25",
                        "text-[#192b45] dark:text-white",
                        "hover:border-[#2d6799] hover:text-[#2d6799]",
                        "dark:hover:border-white/60",
                        "transition-all duration-200"
                      )}
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

      {/* Global glass styles scoped to this component */}
      <style jsx global>{`
        .glass-top {
          background: transparent;
        }

        .glass-scrolled {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.55);
        }

        .dark .glass-scrolled {
          background: rgba(25, 43, 69, 0.55);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Top state — subtle glass even at top */
        .glass-top {
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .dark .glass-top {
          background: rgba(25, 43, 69, 0.25);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
      `}</style>
    </header>
  );
}