
"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "01723290809";
const WHATSAPP_NUMBER = "01723290809";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-4 z-[100] flex flex-col items-center gap-3 sm:bottom-7 sm:right-6">

      {/* Back to Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="পাতার উপরে ফিরে যান"
        title="উপরে ফিরে যান"
        className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#101624] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#719af4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
          showTop
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-90 opacity-0"
        }`}
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp size={23} />
      </button>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="হোয়াটসঅ্যাপে যোগাযোগ করুন"
        title="হোয়াটসঅ্যাপে যোগাযোগ করুন"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#20c76a] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#18b85d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
      >
        <FaWhatsapp size={29} />
      </a>

      {/* Call */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="ফোন করুন"
        title="ফোন করুন"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#719af4] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
      >
        <Phone size={25} />
      </a>
    </div>
  );
}
