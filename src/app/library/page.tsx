import type { Metadata } from "next";
import Link from "next/link";
import { VolumeX, Armchair, LampDesk, PlugZap, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Study Library",
  description:
    "Peaceful, comfortable, and study-friendly library environment at MDTT Bhawan.",
};

const LIBRARY_FEATURES = [
  {
    icon: VolumeX,
    title: "Peaceful Study Environment",
    desc: "Strict pin-drop silence policy maintained across reading zones for deep focus.",
  },
  {
    icon: Armchair,
    title: "Comfortable Seating",
    desc: "Ergonomic cushioned chairs designed to prevent fatigue during long study hours.",
  },
  {
    icon: LampDesk,
    title: "Dedicated Reading Space",
    desc: "Spacious individual desk partitions with soothing, eye-friendly illumination.",
  },
  {
    icon: PlugZap,
    title: "Study-Friendly Atmosphere",
    desc: "Convenient charging points, clean air circulation, and disciplined ambience.",
  },
];

const LIBRARY_PHOTOS = [
  "images/library2.jpeg",
  "images/library.jpeg",
  "images/discussion.jpeg",
];

export default function LibraryPage() {
  return (
    <div>
      {/* Large Library Hero */}
      <section className="relative bg-[#0B192C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              MDTT Bhawan Library
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              A Peaceful Sanctuary for Serious Study &amp; Reading
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our library provides a calm, distraction-free atmosphere tailored for students,
              researchers, and competitive exam aspirants seeking uninterrupted concentration.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0B192C] font-bold px-6 py-3.5 rounded-xl text-sm"
              >
                <span>Enquire for Library Seat</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <WhatsAppButton
                label="WhatsApp Library Desk"
                message="Hello MDTT Bhawan, I would like to enquire about Library seat availability and timings."
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src="images/library2.jpeg"
              alt="MDTT Bhawan Silent Reading Library"
              className="rounded-3xl shadow-2xl w-full h-[400px] object-cover border border-white/15"
            />
          </div>
        </div>
      </section>

      {/* Library Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Study Comfort"
          title="Built for Long, Productive Study Hours"
          subtitle="Every detail in the MDTT Bhawan Library minimizes distractions and maximizes comfort."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LIBRARY_FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B192C]">{feat.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Library Photo Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Reading Spaces"
            title="Library Photo Gallery"
            subtitle="Clean desks, quiet aisles, and warm lighting designed for daily study."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LIBRARY_PHOTOS.map((src, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                <img
                  src={src}
                  alt={`MDTT Bhawan Library View ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}