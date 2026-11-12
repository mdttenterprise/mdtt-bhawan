import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "Experience Focused Study & Comfortable Living at MDTT Bhawan",
  description = "Schedule a campus visit or enquire about library seats, single/double occupancy rooms, and daily canteen facilities.",
}: CTASectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0B192C] to-[#152A47] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl border border-white/10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Plan Your Visit
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">{title}</h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0B192C] font-bold px-6 py-3.5 rounded-xl transition-transform hover:scale-[1.02]"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
}