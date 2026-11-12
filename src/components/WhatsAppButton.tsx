import { MessageCircle } from "lucide-react";
import { SITE_INFO } from "@/data/mdttData";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: "primary" | "outline" | "floating";
  className?: string;
}

export default function WhatsAppButton({
  message = "Hello MDTT Bhawan, I would like to enquire about your facilities (Library / Rooms / Canteen).",
  label = "Enquire on WhatsApp",
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const encodedMsg = encodeURIComponent(message);
  const href = `https://wa.me/${SITE_INFO.whatsappNumberPlaceholder}?text=${encodedMsg}`;

  if (variant === "floating") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3.5 rounded-full shadow-xl transition-transform duration-200 hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-semibold">WhatsApp Enquiry</span>
      </a>
    );
  }

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-5 py-3 text-sm transition-all duration-200";
  const variantStyles =
    variant === "outline"
      ? "border border-emerald-600 text-emerald-700 hover:bg-emerald-50"
      : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      <span>{label}</span>
    </a>
  );
}