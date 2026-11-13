import Link from "next/link";
import { Shield, Sparkles, Clock, MapPin, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FacilityCard from "@/components/FacilityCard";
import CTASection from "@/components/CTASection";
import { FACILITIES, GALLERY_ITEMS } from "@/data/mdttData";

const WHY_CHOOSE = [
  {
    icon: Shield,
    title: "Safe & Disciplined Campus",
    desc: "Structured building management ensuring peace, cleanliness, and resident security.",
  },
  {
    icon: Sparkles,
    title: "Everything Under One Roof",
    desc: "Save daily commute time with your study library, bedroom, and canteen in one building.",
  },
  {
    icon: Clock,
    title: "Study-Focused Environment",
    desc: "Quiet reading zones and well-ventilated rooms built around academic productivity.",
  },
  {
    icon: MapPin,
    title: "Hygienic Daily Dining",
    desc: "Fresh homestyle meals and refreshments served in a clean in-house canteen.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* About MDTT Bhawan Intro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <img
              src="images/building.png"
              alt="MDTT Bhawan Interior"
              className="rounded-3xl shadow-xl w-full h-[380px] object-cover"
            />
          </div>
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              About MDTT Bhawan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] leading-tight">
              A Purpose-Built Destination for Focused Learning &amp; Comfortable Living
            </h2>
            <p className="text-slate-600 leading-relaxed">
              MDTT Bhawan brings together four essential pillars of student and resident life—a
              quiet study library, private single occupancy rooms, spacious double occupancy
              rooms, and a hygienic in-house canteen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Every floor is thoughtfully designed with natural ventilation, clean interiors,
              and calm surroundings so you can focus on your goals without daily logistical
              hassles.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0B192C] hover:text-amber-700"
              >
                <span>Read Our Story &amp; Vision</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Four Facility Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/80 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Core Facilities"
            title="Four Pillars of Comfort at MDTT Bhawan"
            subtitle="Explore our dedicated library, private and twin-sharing accommodation, and hygienic dining space."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MDTT Bhawan */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Designed Around Your Routine & Well-Being"
          subtitle="Thoughtful infrastructure and disciplined upkeep make everyday life effortless."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B192C] text-amber-400 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B192C]">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B192C] text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            light
            eyebrow="Campus Glimpse"
            title="Inside MDTT Bhawan"
            subtitle="Take a visual tour of our study hall, rooms, and dining area."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-bold uppercase text-amber-400">
                    {item.category}
                  </span>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0B192C] font-bold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              <span>View Full Photo Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <CTASection />
    </div>
  );
}