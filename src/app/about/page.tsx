import type { Metadata } from "next";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { FACILITIES } from "@/data/mdttData";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about MDTT Bhawan, our vision, mission, and integrated facilities.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Editorial Page Banner */}
      <section className="bg-[#0B192C] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Our Story &amp; Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold">About MDTT Bhawan</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            An integrated destination crafted for students and residents who value peace,
            comfort, and everyday convenience.
          </p>
        </div>
      </section>

      {/* Editorial Narrative + Building Photos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Who We Are
            </span>
            <h2 className="text-3xl font-bold text-[#0B192C]">
              Harmonizing Education, Accommodation &amp; Dining
            </h2>
            <p className="text-slate-600 leading-relaxed">
              MDTT Bhawan was envisioned as a complete residential and academic support building.
              Instead of managing separate study libraries, distant PG rooms, and unhygienic
              outside food, residents experience all essential facilities under one roof.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From disciplined reading halls to ventilated single and double occupancy rooms
              and a clean in-house canteen, every detail reflects reliability, order, and warmth.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
              alt="MDTT Bhawan Building Exterior"
              className="rounded-2xl h-72 w-full object-cover shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
              alt="MDTT Bhawan Library Interior"
              className="rounded-2xl h-72 w-full object-cover shadow-md mt-6"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0B192C] text-amber-400 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B192C]">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To set a benchmark in student and resident living by offering a serene,
              well-maintained, and inspiring environment where learning and comfortable living
              coexist seamlessly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-[#0B192C] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B192C]">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide distraction-free library facilities, clean and well-ventilated single
              and double occupancy rooms, and nutritious daily meals with transparent and
              attentive building management.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities & Why Choose Us Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="What We Offer"
            title="Integrated Building Amenities"
            subtitle="Every facility at MDTT Bhawan is designed to support daily focus and comfort."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FACILITIES.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-[#0B192C]">{item.title}</h4>
                  <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}