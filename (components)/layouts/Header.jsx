
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "01723290809";
const WHATSAPP_NUMBER = "01723290809";

const navItems = [
  { label: "হোম", href: "/" },
  { label: "শর্তাবলী", href: "/pages/terms" },
  { label: "আমাদের সম্পর্কে", href: "/pages/about" },
  { label: "বালু-পাথর", href: "/pages/material" },
  { label: "গ্যালারি", href: "/pages/gallery" },
  { label: "যোগাযোগ", href: "/pages/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full">
      {/* Main Navigation Bar */}
      <div className="fixed left-0 top-0 z-50 w-full border-b-2 border-b-gray-600 bg-transparent shadow-lg backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-4 py-3 sm:px-5 md:px-8 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0"
            onClick={() => setMenuOpen(false)}
            aria-label="হোম পেজ"
          >
            <Image
              src="/logo.png"
              alt="টাইগার সাপ্লায়ার লোগো"
              width={150}
              height={65}
              priority
              className="h-auto w-[95px] object-contain sm:w-[125px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(item.href + "/"));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative whitespace-nowrap rounded-xl px-2.5 py-3 text-[16px] font-bold transition-all duration-200 xl:px-3 xl:text-[18px] ${
                    isActive
                      ? "bg-[#202c46] text-[#83aaff]"
                      : "text-[#e8ebf4] hover:bg-white/5 hover:text-[#83aaff]"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute bottom-[5px] left-3 right-3 h-[3px] rounded-full bg-[#83aaff]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side: WhatsApp, Call & Mobile Menu */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* WhatsApp Button: Hidden on mobile */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="হোয়াটসঅ্যাপে যোগাযোগ করুন"
              title="হোয়াটসঅ্যাপে যোগাযোগ করুন"
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#20c76a] text-white shadow-md transition hover:scale-105 hover:bg-[#18b85d] sm:flex sm:h-11 sm:w-11"
            >
              <FaWhatsapp size={23} />
            </a>

            {/* Call Button: Hidden on mobile */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="ফোন করুন"
              title="ফোন করুন"
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#719af4] text-white shadow-md transition hover:scale-105 hover:bg-blue-600 sm:flex sm:h-11 sm:w-11"
            >
              <Phone size={20} />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden sm:h-11 sm:w-11"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-white/10 bg-[#101624] px-4 py-4 shadow-xl sm:px-5 lg:hidden"
          >
            <div className="mx-auto flex max-w-[1320px] flex-col gap-2">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname.startsWith(item.href + "/"));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-base font-bold transition ${
                      isActive
                        ? "bg-[#202c46] text-[#83aaff]"
                        : "text-[#e8ebf4] hover:bg-white/5 hover:text-[#83aaff]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
