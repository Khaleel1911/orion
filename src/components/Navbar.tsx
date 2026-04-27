"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 👈 detect current route
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

// Define page-specific navbar styles
type PageStyle = {
  background: string;           // background color (light/dark/transparent)
  textColor: string;            // text color for links
  activeTextColor: string;      // active link color
  borderColor: string;          // border bottom when scrolled
  logoFilter: string;           // CSS filter for logo (e.g., invert for dark bg)
  useBlur: boolean;             // apply backdrop blur on scroll?
  buttonBorder: string;         // contact button border
  buttonText: string;           // contact button text color
};

const pageStyleMap: Record<string, PageStyle> = {
  // Default (fallback)
  default: {
    background: "transparent",
    textColor: "text-white/60",
    activeTextColor: "text-white",
    borderColor: "border-white/10",
    logoFilter: "brightness(0) invert(1)", // white logo
    useBlur: true,
    buttonBorder: "border-white/25",
    buttonText: "text-white/80 hover:text-white",
  },
  // Home page
  "/": {
    background: "transparent",
    textColor: "text-white/60",
    activeTextColor: "text-white",
    borderColor: "border-white/10",
    logoFilter: "brightness(0) invert(1)",
    useBlur: true,
    buttonBorder: "border-white/25",
    buttonText: "text-white/80 hover:text-white",
  },
  // About page – light background, dark text
  "/about": {
    background: "#ffffff",
    textColor: "text-gray-600",
    activeTextColor: "text-primary", // primary color from your theme
    borderColor: "border-gray-200",
    logoFilter: "none", // original dark logo
    useBlur: false,
    buttonBorder: "border-primary/30",
    buttonText: "text-primary hover:text-primary/80",
  },
  // Products page – dark solid background
  "/products": {
    background: "#192b45", // your primary dark
    textColor: "text-white/60",
    activeTextColor: "text-white",
    borderColor: "border-white/10",
    logoFilter: "brightness(0) invert(1)",
    useBlur: false,
    buttonBorder: "border-white/25",
    buttonText: "text-white/80 hover:text-white",
  },
  // Projects page – another example with accent color
  "/projects": {
    background: "#2d6799",
    textColor: "text-white/70",
    activeTextColor: "text-white",
    borderColor: "border-white/15",
    logoFilter: "brightness(0) invert(1)",
    useBlur: false,
    buttonBorder: "border-white/30",
    buttonText: "text-white/90 hover:text-white",
  },
  // Contact page – similar to home
  "/contact": {
    background: "transparent",
    textColor: "text-white/60",
    activeTextColor: "text-white",
    borderColor: "border-white/10",
    logoFilter: "brightness(0) invert(1)",
    useBlur: true,
    buttonBorder: "border-white/25",
    buttonText: "text-white/80 hover:text-white",
  },
};

export default function Navbar() {
  const pathname = usePathname(); // e.g., "/about", "/products"
  const [scrolled, setScrolled] = useState(false);

  // Get style for current route (fallback to default)
  const currentStyle = pageStyleMap[pathname] || pageStyleMap.default;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Decide final background: if page uses blur and scrolled, apply blur with semi-transparent,
  // otherwise use solid background from style.
  const navbarBg = currentStyle.useBlur && scrolled
    ? `rgba(var(--background-rgb, 0,0,0), 0.7)` // fallback – you might want dynamic
    : currentStyle.background;

  const shouldBlur = currentStyle.useBlur && scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? currentStyle.borderColor : "border-b border-transparent"
      )}
      style={{
        background: navbarBg,
        backdropFilter: shouldBlur ? "blur(20px)" : "none",
        WebkitBackdropFilter: shouldBlur ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-16 md:h-20">

          {/* Logo with page‑specific filter */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Orion World">
            <div className="relative" style={{ width: "110px", height: "44px" }}>
              <Image
                src="/logo.png"
                alt="Orion World"
                fill
                className="object-contain"
                priority
                style={{
                  filter: currentStyle.logoFilter,
                  opacity: scrolled && !currentStyle.useBlur ? 0.9 : 1,
                }}
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
  {navLinks.map(({ label, href }) => {
    const isActive = pathname === href;
    return (
      <li key={href}>
        <Link
          href={href}
          className={cn(
            "relative font-sans text-sm tracking-wide transition-all duration-200",
            "after:absolute after:-bottom-0.5 after:left-0",
            "after:h-px after:w-0 after:bg-primary",
            "after:transition-all after:duration-300",
            "hover:text-primary",                           // 👈 hover = primary
            isActive
              ? "text-primary after:w-full"                 // 👈 active = primary + underline
              : currentStyle.textColor + " hover:text-primary"
          )}
        >
          {label}
        </Link>
      </li>
    );
  })}
</ul>

          {/* Desktop Contact button + mobile menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                "hidden md:inline-flex items-center",
                "font-sans text-sm tracking-widest uppercase",
                currentStyle.buttonText,
                "border px-6 py-2.5 transition-all duration-200",
                currentStyle.buttonBorder,
                "hover:border-current"
              )}
              style={{ letterSpacing: "0.12em" }}
            >
              Contact
            </Link>

            {/* Mobile hamburger (preserves color based on currentStyle.textColor) */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("md:hidden rounded-none", currentStyle.textColor, "hover:bg-white/10")}
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-72 p-0 border-l border-white/10 rounded-none"
                style={{ background: "#192b45" }} // keep drawer dark for consistency, or make dynamic
              >
                {/* Drawer header same as before but you can also adapt if needed */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
                  <Link href="/" onClick={() => {}}>
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
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </SheetClose>
                </div>

                <ul className="flex flex-col px-8 py-6 gap-1">
                  {navLinks.map(({ label, href }) => (
                    <li key={href}>
                      <SheetClose asChild>
                        <Link
                          href={href}
                          className={cn(
                            "block py-4 font-sans text-sm tracking-widest uppercase transition-colors duration-200",
                            "border-b border-white/8",
                            pathname === href
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