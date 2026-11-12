import Link from "next/link";
import { Users, Maximize2, CheckCircle2, ArrowRight } from "lucide-react";
import { RoomItem } from "@/data/mdttData";
import WhatsAppButton from "./WhatsAppButton";

interface RoomCardProps {
  room: RoomItem;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Room Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-[#0B192C] text-amber-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow">
          {room.type}
        </span>
      </div>

      {/* Room Details */}
      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-slate-100">
            <h3 className="text-2xl font-bold text-[#0B192C]">{room.title}</h3>
            <div className="text-right">
              <span className="text-2xl font-extrabold text-amber-700">
                {room.pricePlaceholder}
              </span>
              <span className="block text-xs text-slate-500">{room.billingCycle}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 my-4 text-xs font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
              <Users className="w-4 h-4 text-[#0B192C]" />
              {room.occupancy}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
              <Maximize2 className="w-4 h-4 text-[#0B192C]" />
              {room.areaPlaceholder}
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">{room.description}</p>

          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Included Room Facilities
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-7 pt-5 border-t border-slate-100 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 bg-[#0B192C] hover:bg-slate-800 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <WhatsAppButton
            label="WhatsApp"
            variant="outline"
            message={`Hello MDTT Bhawan, I am interested in the ${room.title}. Please share availability and tariff details.`}
          />
        </div>
      </div>
    </div>
  );
}