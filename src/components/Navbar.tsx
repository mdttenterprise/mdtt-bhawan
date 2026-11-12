"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Menu } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Facilities", href: "/facilities" },
  { name: "Library", href: "/library" },
  { name: "Rooms", href: "/rooms" },
  { name: "Canteen", href: "/canteen" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0B192C]/95 backdrop-blur-md border-b border-slate-800/80 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/40 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-[#0B192C] transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block leading-none">
                  MDTT <span className="text-amber-400">Bhawan</span>
                </span>
                <span className="text-[11px] uppercase tracking-widest text-slate-400">
                  Study • Stay • Dine
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-white/10 text-amber-400 font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="bg-amber-500 hover:bg-amber-400 text-[#0B192C] font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all hover:scale-[1.02]"
              >
                Enquire Now
              </Link>
            </div>

            {/* Hamburger Trigger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNavbar
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}