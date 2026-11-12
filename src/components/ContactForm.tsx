"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  facility: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    facility: "Library",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please enter a message (at least 10 characters).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const whatsappSummary = `Hello MDTT Bhawan, my name is ${
    formData.fullName || "a visitor"
  }. I am interested in: ${formData.facility}. Phone: ${
    formData.phone || "N/A"
  }. Message: ${formData.message}`;

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-lg text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-[#0B192C]">
          Enquiry Recorded (Frontend Demo)
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>.
          Your enquiry for <span className="font-semibold text-amber-700">{formData.facility}</span>{" "}
          has been validated. Since this is a static frontend website, you can also send your
          details directly via WhatsApp below.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <WhatsAppButton
            label="Continue on WhatsApp"
            message={whatsappSummary}
          />
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                phone: "",
                email: "",
                facility: "Library",
                message: "",
              });
            }}
            className="px-5 py-3 rounded-xl border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-5"
    >
      <div>
        <h3 className="text-2xl font-bold text-[#0B192C]">Send Us an Enquiry</h3>
        <p className="text-sm text-slate-500 mt-1">
          Fill out the form below or connect directly on WhatsApp.
        </p>
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Full Name *
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0B192C]"
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
          </p>
        )}
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0B192C]"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0B192C]"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Interested Facility */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Interested Facility *
        </label>
        <select
          value={formData.facility}
          onChange={(e) => setFormData({ ...formData, facility: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#0B192C]"
        >
          <option value="Library">Library (Reading &amp; Study Hall)</option>
          <option value="Single Occupancy Room">Single Occupancy Room</option>
          <option value="Double Occupancy Room">Double Occupancy Room</option>
          <option value="Canteen & Dining">Canteen &amp; Dining Facilities</option>
          <option value="General Building Visit">General Building Visit</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Message *
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your preferred move-in date, library shift, or questions..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0B192C]"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 bg-[#0B192C] hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-colors"
        >
          <Send className="w-4 h-4" />
          <span>Submit Enquiry</span>
        </button>

        <WhatsAppButton label="Quick WhatsApp" variant="outline" message={whatsappSummary} />
      </div>
    </form>
  );
}