import type { Metadata } from "next";
import FacilityCard from "@/components/FacilityCard";
import CTASection from "@/components/CTASection";
import { FACILITIES } from "@/data/mdttData";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Explore MDTT Bhawan facilities: Study Library, Single Occupancy Rooms, Double Occupancy Rooms, and Canteen.",
};

export default function FacilitiesPage() {
  return (
    <div>
      <section className="bg-[#0B192C] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Complete Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold">Our Facilities</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Four thoughtfully integrated spaces crafted for focused study, restful living,
            and wholesome dining.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACILITIES.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} detailed />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}