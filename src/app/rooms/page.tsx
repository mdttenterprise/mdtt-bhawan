import type { Metadata } from "next";
import RoomCard from "@/components/RoomCard";
import CTASection from "@/components/CTASection";
import { ROOMS_DATA } from "@/data/mdttData";

export const metadata: Metadata = {
  title: "Single & Double Occupancy Rooms",
  description:
    "Explore comfortable Single Occupancy and Double Occupancy rooms at MDTT Bhawan.",
};

export default function RoomsPage() {
  return (
    <div>
      <section className="bg-[#0B192C] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Residential Accommodation
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold">Rooms &amp; Accommodation</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Choose between private Single Occupancy Rooms and well-planned Double Occupancy
            Rooms equipped with study furniture, storage, and natural ventilation.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {ROOMS_DATA.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 mt-8">
          * Note: Displayed room tariffs (₹X,XXX) and dimensions are placeholders. Please
          contact MDTT Bhawan management for current availability and exact monthly charges.
        </p>
      </section>

      <CTASection
        title="Want to Inspect Our Single or Double Rooms?"
        description="Get in touch with our team to check current room availability or book a walkthrough."
      />
    </div>
  );
}