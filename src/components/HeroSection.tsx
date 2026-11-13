import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, BookOpen, Utensils } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0B192C] text-white overflow-hidden">
      {/* Decorative Ambient Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
              <span>  Rooms • Library • Canteen</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]">
              Welcome to <span className="text-amber-400">MDTT Bhawan</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-amber-100/90">
              Learn, Live &amp; Experience Comfort Under One Roof.
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Discover a peaceful library, comfortable accommodation and convenient
              dining facilities at MDTT Bhawan.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/facilities"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0B192C] font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
              >
                <span>Explore Facilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">Silent Study Library</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">Single &amp; Double Rooms</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Utensils className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">Hygienic Canteen</span>
              </div>
            </div>
          </div>

          {/* Right Large Building Photograph */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
              <img
                src="images/parking.png"
                alt="MDTT Bhawan Modern Multi-Facility Building"
                className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-[#0B192C]/85 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">MDTT Bhawan Campus</p>
                  <p className="text-xs text-slate-300">
                    Integrated Study, Residency &amp; Dining Infrastructure
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500 text-[#0B192C] text-xs font-bold">
                  Open for Enquiries
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}