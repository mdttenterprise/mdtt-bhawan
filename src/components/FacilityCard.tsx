import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FacilityItem } from "@/data/mdttData";

interface FacilityCardProps {
  facility: FacilityItem;
  detailed?: boolean;
}

export default function FacilityCard({
  facility,
  detailed = false,
}: FacilityCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={facility.image}
          alt={facility.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#0B192C]/90 backdrop-blur-sm text-amber-300 text-xs font-semibold px-3 py-1 rounded-full">
          {facility.tagline}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#0B192C] group-hover:text-amber-700 transition-colors">
            {facility.title}
          </h3>
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
            {facility.description}
          </p>

          {detailed && (
            <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
              {facility.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <Link
            href={facility.slug}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B192C] hover:text-amber-700 transition-colors"
          >
            <span>Explore More</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}