"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdCameraAlt, MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/pages/about" },
    { name: "Gallery", href: "/pages/gallery" },
    { name: "Albums", href: "/pages/album" },
    { name: "Packages", href: "/pages/package" },
    { name: "Contact", href: "/pages/contact" },
  ];

  const services = [
    "Wedding Photography",
    "Birthday Photography",
    "Studio Portrait",
    "Family Photoshoot",
    "Outdoor Photoshoot",
    "Newborn Photography",
  ];

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="mb-5 inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white">
                <MdCameraAlt size={28} />
              </span>

              <span>
                <span className="block text-2xl font-bold tracking-wide text-white">
                  JH Photography
                </span>
                <span className="text-xs tracking-[0.2em] text-amber-400">
                  YOUR STORY THROUGH MY LENS
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Capturing your beautiful moments and turning them into
              timeless memories. Every photograph tells a story worth
              remembering.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-amber-500 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-amber-500 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/8801318424303"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-amber-500 hover:text-white"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:pl-1 hover:text-amber-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/pages/service"
                  className="text-sm transition hover:pl-1 hover:text-amber-400"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/vedio"
                  className="text-sm transition hover:pl-1 hover:text-amber-400"
                >
                  Videos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-gray-400 transition hover:text-amber-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Get In Touch
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MdLocationOn
                  size={22}
                  className="mt-1 shrink-0 text-amber-400"
                />
                <span className="text-sm leading-6">
                  Bangladesh
                  <br />
                  Available for bookings
                </span>
              </li>

              <li className="flex items-start gap-3">
                <MdPhone
                  size={20}
                  className="mt-1 shrink-0 text-amber-400"
                />
                <a
                  href="tel:+8801318424303"
                  className="text-sm transition hover:text-amber-400"
                >
                  +880 1318-424303
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MdEmail
                  size={20}
                  className="mt-1 shrink-0 text-amber-400"
                />
                <a
                  href="mailto:your-email@example.com"
                  className="break-all text-sm transition hover:text-amber-400"
                >
                  your-email@example.com
                </a>
              </li>
            </ul>

            <Link
              href="/pages/contact"
              className="mt-6 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 px-4 py-6 text-center text-sm text-gray-500 sm:px-6 md:flex-row lg:px-8">
          <p>
            © {year} JH Photography. All rights reserved.
          </p>

          <p>
            Crafted with <span className="text-red-500">♥</span> for
            beautiful memories.
          </p>
        </div>
      </div>
    </footer>
  );
}