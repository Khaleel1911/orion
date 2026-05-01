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

export default function Navbar() {
  const pathname = usePathname(); // e.g., "/about", "/products"
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomeHeroState = pathname === "/" && !scrolled;
  const navbarBg = isHomeHeroState ? "transparent" : "var(--primary)";
  const shouldBlur = isHomeHeroState;
  const logoFilter = "brightness(0) invert(1)";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isHomeHeroState ? "border-b border-transparent" : "border-b border-white/10"
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
                  filter: logoFilter,
                  opacity: scrolled ? 0.95 : 1,
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
            "hover:text-white", 
            isActive
              ? "text-white after:w-full after:bg-white"
              : "text-white/75 hover:text-white after:bg-white"
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
                "border px-6 py-2.5 transition-all duration-200",
                "text-white/85 hover:text-white",
                "border-white/30",
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
                  className={cn("md:hidden rounded-none text-white/80 hover:text-white hover:bg-white/10")}
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