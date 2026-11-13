import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_INFO } from "@/data/mdttData";

export const metadata: Metadata = {
  title: "Contact Us | MDTT Bhawan",
  description:
    "Contact MDTT Bhawan for enquiries regarding Library, Single Rooms, Double Rooms, and Canteen.",
};

export default function ContactPage() {
  // Set these to true when you want to un-comment/enable Map or Form later
  const showMap = false;
  const showForm = false;
  const isCenteredSingleColumn = !showForm;

  return (
    <div className="min-h-screen bg-slate-50/60">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B192C] text-white py-20 px-4 sm:px-6 lg:px-8">
        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_50%)] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact MDTT Bhawan
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about library memberships, single or double occupancy rooms, or
            visiting hours? Reach out to our team directly below.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className={
            isCenteredSingleColumn
              ? "max-w-2xl mx-auto"
              : "grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          }
        >
          {/* Contact Details Column */}
          <div className={isCenteredSingleColumn ? "space-y-6" : "lg:col-span-5 space-y-6"}>
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xl shadow-slate-200/40 space-y-7">
              <div className="space-y-1.5 border-b border-slate-100 pb-5">
                <h2 className="text-2xl font-bold text-[#0B192C]">Reach Us Directly</h2>
                <p className="text-sm text-slate-500">
                  We are available during visiting hours to assist you with bookings and queries.
                </p>
              </div>

              <div className="space-y-5 text-sm">
                {/* Phone */}
                <a
                  href={`tel:${SITE_INFO.phonePlaceholder}`}
                  className="group flex items-start gap-4 p-3 -mx-3 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-[#0B192C]">Phone Number</p>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-slate-600 mt-0.5 font-medium">
                      {SITE_INFO.phonePlaceholder}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_INFO.emailPlaceholder}`}
                  className="group flex items-start gap-4 p-3 -mx-3 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-[#0B192C]">Email Address</p>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-slate-600 mt-0.5 font-medium break-all">
                      {SITE_INFO.emailPlaceholder}
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-3 -mx-3 rounded-2xl">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B192C]">Building Address</p>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {SITE_INFO.addressPlaceholder}
                    </p>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div className="flex items-start gap-4 p-3 -mx-3 rounded-2xl">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B192C]">Visiting Hours</p>
                    <p className="text-slate-600 mt-0.5">{SITE_INFO.visitingHoursPlaceholder}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-3 border-t border-slate-100">
                <WhatsAppButton className="w-full justify-center py-3.5 text-base shadow-sm" />
              </div>
            </div>

            {/* Google Maps Embed Placeholder (Toggle showMap = true to enable) */}
            {/* {showMap && (
              <div className="bg-slate-200/70 rounded-3xl overflow-hidden border border-slate-300/80 h-64 flex flex-col items-center justify-center text-center p-6">
                <MapPin className="w-10 h-10 text-[#0B192C] mb-2" />
                <p className="font-bold text-[#0B192C]">Google Maps Location Placeholder</p>
                <p className="text-xs text-slate-600 max-w-xs mt-1">
                  Replace this container with your official Google Maps &lt;iframe&gt; embed
                  once the exact building coordinates are finalized.
                </p>
              </div>
            )} */}
          </div>

          {/* Frontend Validated Form (Toggle showForm = true to enable) */}
          {/* {showForm && (
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          )} */}
        </div>
      </section>
    </div>
  );
}