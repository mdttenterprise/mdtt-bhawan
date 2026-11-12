import "./globals.css"; 
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "MDTT Bhawan | Library, Rooms & Canteen Under One Roof",
    template: "%s | MDTT Bhawan",
  },
  description:
    "Discover a peaceful study library, single and double occupancy rooms, and hygienic dining facilities at MDTT Bhawan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  );
}