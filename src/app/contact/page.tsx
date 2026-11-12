import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_INFO } from "@/data/mdttData";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact MDTT Bhawan for enquiries regarding Library, Single Rooms, Double Rooms, and Canteen.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-[#0B192C] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold">Contact MDTT Bhawan</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have questions about library memberships, single or double occupancy rooms, or
            visiting hours? Reach out to us below.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-5">
              <h2 className="text-2xl font-bold text-[#0B192C]">Reach Us Directly</h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B192C]">Phone Number</p>
                    <p className="text-slate-600">{SITE_INFO.phonePlaceholder}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B192C]">Email Address</p>
                    <p className="text-slate-600">{SITE_INFO.emailPlaceholder}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B192C]">Building Address</p>
                    <p className="text-slate-600">{SITE_INFO.addressPlaceholder}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B192C]">Visiting Hours</p>
                    <p className="text-slate-600">{SITE_INFO.visitingHoursPlaceholder}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <WhatsAppButton className="w-full" />
              </div>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="bg-slate-200 rounded-3xl overflow-hidden border border-slate-300 h-64 flex flex-col items-center justify-center text-center p-6">
              <MapPin className="w-10 h-10 text-[#0B192C] mb-2" />
              <p className="font-bold text-[#0B192C]">Google Maps Location Placeholder</p>
              <p className="text-xs text-slate-600 max-w-xs mt-1">
                Replace this container with your official Google Maps &lt;iframe&gt; embed
                once the exact building coordinates are finalized.
              </p>
            </div>
          </div>

          {/* Frontend Validated Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}