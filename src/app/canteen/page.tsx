"use client";

import { useState } from "react";
import { Sparkles, ShieldCheck, UtensilsCrossed } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { CANTEEN_MENU } from "@/data/mdttData";

const MENU_CATEGORIES = [
  "All",
  "Breakfast",
  "Lunch & Thali",
  "Snacks & Beverages",
  "Dinner",
] as const;

export default function CanteenPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredMenu =
    activeCategory === "All"
      ? CANTEEN_MENU
      : CANTEEN_MENU.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Canteen Banner */}
      <section className="relative bg-[#0B192C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              In-House Dining
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Wholesome Food &amp; Hygienic Canteen
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Enjoy freshly prepared homestyle meals, evening snacks, and hot beverages right
              inside MDTT Bhawan without stepping out or compromising on hygiene.
            </p>
          </div>

          <div className="lg:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1300&q=85"
              alt="MDTT Bhawan Canteen and Dining Hall"
              className="rounded-3xl shadow-2xl w-full h-[380px] object-cover border border-white/15"
            />
          </div>
        </div>
      </section>

      {/* Hygiene & Dining Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-amber-600 mb-3" />
            <h3 className="text-lg font-bold text-[#0B192C]">Strict Kitchen Hygiene</h3>
            <p className="text-sm text-slate-600 mt-2">
              Daily sanitized prep counters, clean utensils, and purified RO drinking water.
            </p>
          </div>
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
            <UtensilsCrossed className="w-8 h-8 text-amber-600 mb-3" />
            <h3 className="text-lg font-bold text-[#0B192C]">Freshly Cooked Daily</h3>
            <p className="text-sm text-slate-600 mt-2">
              Balanced, homestyle recipes prepared fresh for breakfast, lunch, snacks, and dinner.
            </p>
          </div>
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
            <Sparkles className="w-8 h-8 text-amber-600 mb-3" />
            <h3 className="text-lg font-bold text-[#0B192C]">Clean Dining Seating</h3>
            <p className="text-sm text-slate-600 mt-2">
              Bright, spacious, and orderly dining tables welcoming both residents and library members.
            </p>
          </div>
        </div>
      </section>

      {/* Static Food Menu */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Canteen Menu"
            title="Daily Meals & Refreshments"
            subtitle="Filter by meal category to preview our sample canteen offerings."
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-[#0B192C] text-amber-400 shadow"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-[#0B192C]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredMenu.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm border border-emerald-600 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B192C] mt-1">{item.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                </div>

                <div className="shrink-0 bg-slate-100 px-3.5 py-1.5 rounded-xl font-extrabold text-[#0B192C] text-sm">
                  {item.pricePlaceholder}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-6">
            * Item prices (₹XX / ₹XXX) are static placeholders. Actual daily menu and meal
            plans are displayed at the MDTT Bhawan Canteen counter.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}