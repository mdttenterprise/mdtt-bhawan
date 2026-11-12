"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, PhoneCall } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MobileNavbar({
  isOpen,
  onClose,
  links,
}: MobileNavbarProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden bg-[#0B192C]/60 backdrop-blur-sm">
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0B192C] text-white p-6 shadow-2xl flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div>
              <span className="text-xl font-bold tracking-tight text-white">
                MDTT <span className="text-amber-400">Bhawan</span>
              </span>
              <p className="text-[11px] text-slate-400">Study • Stay • Dine</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-1.5">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amber-500 text-[#0B192C] font-semibold"
                      : "text-slate-200 hover:bg-slate-800/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0B192C] font-bold py-3 px-4 rounded-xl text-sm transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}