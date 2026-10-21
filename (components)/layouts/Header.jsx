
"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Search, MessageCircle } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "হোম", href: "/" },
   { label: "শর্তাবলী", href: "/pages/terms" },  
  { label: "আমাদের সম্পর্কে", href: "/pages/about" },
  { label: "বালু-পাথর", href: "/pages/material" }, 
  { label: "গ্যালারি", href: "/pages/gallery" },
  { label: "যোগাযোগ", href: "/pages/contact" },
];

export default function Header() {
  const [active, setActive] = useState("/terms");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-[#101624] max-w-[1320px]  text-white  ">
      {/* Top contact bar */}
      {/* <div className="border-b border-white/10 bg-[#0c1220]">
        <div className="mx-auto flex min-h-[36px] max-w-[1640px] items-center justify-between px-5 md:px-10">
          <a
            href="https://wa.me/8801712301424"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#c6d9ff] transition hover:text-white"
          >
            <MessageCircle size={17} className="text-[#58a0ff]" />
            WhatsApp
          </a>

          <div className="flex items-center gap-4 text-xs text-[#c6d9ff] sm:gap-6 sm:text-sm">
            <a
              href="mailto:info@balupathor.com"
              className="flex items-center gap-1.5 hover:text-white"
            >
              <Mail size={16} className="text-[#58a0ff]" />
              <span>info@balupathor.com</span>
            </a>

            <a
              href="tel:01712301424"
              className="flex items-center gap-1.5 hover:text-white"
            >
              <Phone size={16} className="text-[#58a0ff]" />
              <span>01712301424</span>
            </a>
          </div>
        </div>
      </div> */}

      {/* Main navigation bar */}
      <div className="mx-auto fixed border-b-2 border-b-gray-600 top-0 z-50 left-0 w-full bg-transparent backdrop-blur-2xl flex py-3 items-center justify-between gap-4 px-5 md:px-10">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="BaluPathor logo"
            width={150}
            height={65}
            priority
            className="h-auto w-[105px] object-contain sm:w-[125px]"
          />
        </Link>

        {/* Navigation links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={`relative whitespace-nowrap rounded-xl px-3.5 py-3 text-[19px] font-bold transition-all duration-200 ${
                active === item.href
                  ? "bg-[#202c46] text-[#83aaff]"
                  : "text-[#e8ebf4] hover:bg-white/5 hover:text-[#83aaff]"
              }`}
            >
              {item.label}

              {active === item.href && (
                <span className="absolute bottom-[5px] left-3.5 right-3.5 h-[3px] rounded-full bg-[#83aaff]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Search button */}
        <button
          type="button"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Toggle search"
          className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-white/15 text-[#cbd5e8] transition hover:border-[#83aaff] hover:text-[#83aaff]"
        >
          <Search size={23} />
        </button>
      </div>

      {/* Search field */}
      {searchOpen && (
        <form
          action="/search"
          className="mx-auto flex max-w-[1640px] gap-2 px-5 pb-2 md:px-10"
        >
          <input
            type="search"
            name="q"
            placeholder="খুঁজুন..."
            className="w-full rounded-lg border border-white/15 bg-[#171f30] px-4 py-3 text-white outline-none focus:border-[#83aaff]"
          />
          <button
            type="submit"
            className="rounded-lg bg-[#202c46] px-5 font-semibold text-white hover:bg-[#2b3b5d]"
          >
            Search
          </button>
        </form>
      )}
    </header>
  );
}
