"use client";

import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/mdttData";

const CATEGORIES = [
  "All",
  "Building",
  "Library",
  "Single Rooms",
  "Double Rooms",
  "Canteen",
  "Common Areas",
] as const;

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {CATEGORIES.map((category) => {
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active
                  ? "bg-[#0B192C] text-amber-400 shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-[#0B192C]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setLightboxItem(item)}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl cursor-pointer aspect-[4/3]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-block text-[11px] uppercase tracking-wider font-bold text-amber-400 mb-1">
                {item.category}
              </span>
              <h3 className="text-base font-bold leading-snug">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#0B192C] rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
          >
            <button
              onClick={() => setLightboxItem(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-[#0B192C] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={lightboxItem.image}
              alt={lightboxItem.title}
              className="w-full max-h-[75vh] object-contain bg-black"
            />

            <div className="p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {lightboxItem.category}
                </span>
                <h4 className="text-lg font-bold">{lightboxItem.title}</h4>
                <p className="text-sm text-slate-300 mt-0.5">{lightboxItem.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}