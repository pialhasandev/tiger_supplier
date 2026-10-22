"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Package,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "প্রচ্ছদ", href: "/" },
    { name: "আমাদের সম্পর্কে", href: "/pages/about" },
    { name: "পণ্যের তালিকা", href: "/pages/products" },
    { name: "সরবরাহ সেবা", href: "/pages/service" },
    { name: "প্রজেক্ট গ্যালারি", href: "/pages/gallery" },
    { name: "যোগাযোগ", href: "/pages/contact" },
  ];

  const phoneNumber = "01723290809";
  const whatsappNumber = "01723290809";
  const email = "labonrashed@gmail.com";

  return (
    <footer className="bg-[#0b1220] text-slate-300">
      {/* মূল ফুটার */}
      <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.75fr_1.2fr] lg:gap-16">
          {/* ব্র্যান্ড ও পরিচিতি */}
          <div>
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-3"
              aria-label="টাইগার সাপ্লায়ার - প্রচ্ছদ"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-sky-500 text-white shadow-lg shadow-blue-500/20">
                <Package size={28} />
              </span>

              <span>
                <span className="block text-2xl font-extrabold tracking-wide text-white">
                  Tiger Supplier
                </span>
                <span className="text-xs tracking-[0.12em] text-blue-400">
                  নির্মাণসামগ্রীর নির্ভরযোগ্য ঠিকানা
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
              টাইগার সাপ্লায়ার সরবরাহ করে মানসম্মত বালু, পাথর, বোল্ডার ও
              নির্মাণকাজের বিভিন্ন উপকরণ। বাড়ি, সড়ক, বাণিজ্যিক ভবন এবং
              অবকাঠামো নির্মাণ প্রকল্পে নির্ভরযোগ্য সরবরাহ সেবা দিতে আমরা
              প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>

          {/* গুরুত্বপূর্ণ লিংক */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm transition hover:translate-x-1 hover:text-blue-400"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* যোগাযোগের তথ্য */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">যোগাযোগ করুন</h3>

            <ul className="space-y-5">
              {/* ইমেইল */}
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-sky-500 text-white shadow-lg shadow-blue-500/10">
                  <Mail size={21} />
                </span>

                <div className="min-w-0 pt-1">
                  <p className="mb-1 text-xs text-slate-400">ইমেইল ঠিকানা</p>
                  <a
                    href={`mailto:${email}`}
                    className="break-all text-sm text-slate-200 transition hover:text-blue-400"
                  >
                    {email}
                  </a>
                </div>
              </li>

              {/* ফোন */}
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-sky-500 text-white shadow-lg shadow-blue-500/10">
                  <Phone size={21} />
                </span>

                <div className="min-w-0 pt-1">
                  <p className="mb-1 text-xs text-slate-400">ফোন নম্বর</p>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-sm text-slate-200 transition hover:text-blue-400"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </li>

              {/* ঠিকানা */}
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-sky-500 text-white shadow-lg shadow-blue-500/10">
                  <MapPin size={21} />
                </span>

                <div className="min-w-0 pt-1">
                  <p className="mb-1 text-xs text-slate-400">আমাদের ঠিকানা</p>
                  <p className="text-sm leading-6 text-slate-200">
                    Rahima Plaza(2nd Floor),Tomaltola,Jamalpur Sadar,Jamalpur.
                  </p>
                </div>
              </li>
            </ul>

            {/* WhatsApp ও ফোন বাটন */}
            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="হোয়াটসঅ্যাপে যোগাযোগ করুন"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:border-emerald-400 hover:bg-emerald-500 hover:text-white"
              >
                <MessageCircle size={21} />
              </a>

              <a
                href={`tel:${phoneNumber}`}
                aria-label="ফোন করুন"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:border-blue-400 hover:bg-blue-500 hover:text-white"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* নিচের কপিরাইট অংশ */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 px-4 py-6 text-center text-sm text-slate-400 sm:px-6 md:flex-row lg:px-8">
          <p>© {year} Tiger Supplier। All Rights Reserved.</p>

          <p>
            Develop By{" "}
            <Link
              href="https://my-portfolio-ten-livid-88.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-400 transition hover:text-blue-300"
            >
              pialhasandev
            </Link>
            ।
          </p>
        </div>
      </div>
    </footer>
  );
}
