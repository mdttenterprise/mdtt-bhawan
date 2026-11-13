import Link from "next/link";
import { Building2, Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_INFO } from "@/data/mdttData";

export default function Footer() {
  return (
    <footer className="bg-[#0B192C] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/40 flex items-center justify-center text-amber-400">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white">
                MDTT <span className="text-amber-400">Bhawan</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              A dedicated multi-facility building offering a peaceful study library,
              single and double occupancy rooms, and hygienic dining facilities under one roof.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-amber-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-400">About Us</Link></li>
              <li><Link href="/facilities" className="hover:text-amber-400">All Facilities</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-400">Photo Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400">Contact &amp; Enquiry</Link></li>
            </ul>
          </div>

          {/* Core Facilities */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Facilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/library" className="hover:text-amber-400">Peaceful Study Library</Link></li>
              <li><Link href="/rooms" className="hover:text-amber-400">Single Occupancy Rooms</Link></li>
              <li><Link href="/rooms" className="hover:text-amber-400">Double Occupancy Rooms</Link></li>
              <li><Link href="/canteen" className="hover:text-amber-400">Hygienic Canteen &amp; Dining</Link></li>
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact Information
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>{SITE_INFO.addressPlaceholder}</span>
              </li>
             <li className="flex items-start gap-2.5">
  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
  <div className="flex flex-wrap gap-1">
    {SITE_INFO.phoneNumbers.slice(0, 4).map((item, idx) => (
      <a
        key={idx}
        href={`tel:${item.number.replace(/\s+/g, "")}`}
        className="hover:text-amber-400 transition-colors"
      >
        {item.number}
      </a>
    ))}
  </div>
</li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SITE_INFO.emailPlaceholder}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>{SITE_INFO.visitingHoursPlaceholder}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} MDTT Bhawan. All rights reserved.</p>
          <p>Education • Accommodation • Dining</p>
        </div>
      </div>
    </footer>
  );
}