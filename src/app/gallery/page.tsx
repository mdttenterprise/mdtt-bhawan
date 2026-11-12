import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse photos of MDTT Bhawan building, library, single rooms, double rooms, canteen, and common areas.",
};

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-[#0B192C] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Visual Walkthrough
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold">MDTT Bhawan Gallery</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Filter by category or click any photograph to inspect our spaces in full screen.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <GalleryGrid />
      </section>

      <CTASection />
    </div>
  );
}