
"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Map,
  ExternalLink,
  Send,
} from "lucide-react";
import Container from "@/(components)/common/Container";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  // Bangladesh WhatsApp number: country code + number, without leading 0.
  const whatsappNumber = "8801723290809";

  const address =
    "Rahima plaza(2nd floor),tomaltola,jamalpur sadar,Jamalpur.";

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&z=15&output=embed`;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!/^\d{10,15}$/.test(whatsappNumber)) {
      setError(
        "Please configure a valid WhatsApp number with the country code."
      );
      return;
    }

    const message = [
      "Hello Tiger Supplier!",
      "",
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Subject: ${form.subject.trim()}`,
      "",
      "Message:",
      form.message.trim(),
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "mt-2 w-full min-w-0 rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

  return (
    <section
      id="contact"
      className="min-h-screen overflow-hidden bg-[#0b1120] px-4 py-12 text-white sm:px-6 md:py-16"
    >
      <Container>
        {/* Page heading */}
        <div className="mb-8">
          <h1 className="text-4xl pt-17 font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            যোগাযোগ
          </h1>

          <p className="mt-4 text-sm text-gray-400 sm:text-base">
            হোম / যোগাযোগ
          </p>
        </div>

        {/* Contact layout */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.85fr_1.3fr]">
          {/* Company information */}
          <div className="min-w-0 rounded-2xl border border-white/10 bg-[#111827] p-5 sm:p-7 md:p-8">
            <h2 className="mb-5 text-2xl font-extrabold sm:text-3xl">
              Tiger Supplier
            </h2>

            <div className="space-y-5 text-sm leading-6 text-gray-300">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-1 shrink-0 text-blue-400"
                  size={19}
                />
                <p>{address}</p>
              </div>

              {/* Phone */}
              <a
                href="tel:+8801723290809"
                className="flex items-center gap-3 transition hover:text-blue-400"
              >
                <Phone size={18} className="shrink-0 text-blue-400" />
                <span>01723290809</span>
              </a>

              {/* Email */}
              <a
                href="mailto:labonrashed@gmail.com"
                className="flex items-center gap-3 break-all transition hover:text-blue-400"
              >
                <Mail size={18} className="shrink-0 text-blue-400" />
                <span>labonrashed@gmail.com</span>
              </a>

              {/* Open map */}
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-400 px-4 py-3 font-semibold text-blue-400 transition hover:bg-blue-500 hover:text-white"
              >
                <Map size={19} />
                ম্যাপ খুলুন
                <ExternalLink size={15} />
              </a>
            </div>

            {/* Responsive Google Maps */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Tiger Supplier location on Google Maps"
                src={embedUrl}
                className="block aspect-[4/3] w-full sm:aspect-video lg:aspect-[4/3] xl:aspect-video"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* WhatsApp contact form */}
          <div className="min-w-0 rounded-2xl border border-white/10 bg-[#111827] p-5 sm:p-7 md:p-8">
            <div className="mb-6 rounded-xl bg-[#0b1120] p-4 text-sm leading-6 text-gray-300">
              আপনার পণ্য, মূল্য অথবা সরবরাহ সম্পর্কে জানতে নিচের ফর্মটি পূরণ করুন।
              সাবমিট করলে WhatsApp-এ আপনার মেসেজ প্রস্তুত হবে।
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}
                <div className="min-w-0">
                  <label htmlFor="name" className="font-semibold">
                    নাম
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="আপনার নাম"
                    className={inputClass}
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </div>

                {/* Email */}
                <div className="min-w-0">
                  <label htmlFor="email" className="font-semibold">
                    ইমেইল
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="আপনার ইমেইল"
                    className={inputClass}
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="min-w-0">
                  <label htmlFor="phone" className="font-semibold">
                    ফোন
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="আপনার ফোন নম্বর"
                    className={inputClass}
                    autoComplete="tel"
                    maxLength={25}
                    required
                  />
                </div>

                {/* Subject */}
                <div className="min-w-0">
                  <label htmlFor="subject" className="font-semibold">
                    বিষয়
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="যোগাযোগের বিষয়"
                    className={inputClass}
                    maxLength={150}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="font-semibold">
                  বার্তা
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="আপনার বার্তা লিখুন..."
                  className={`${inputClass} min-h-36 resize-y`}
                  maxLength={3000}
                  required
                />
              </div>

              {/* Error message */}
              {error && (
                <p role="alert" className="text-sm text-red-400">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:w-auto"
              >
                <Send size={18} />
                WhatsApp-এ বার্তা পাঠান
              </button>

              <p className="text-xs leading-5 text-gray-500">
                সাবমিট করলে WhatsApp খুলবে। সেখানে মেসেজটি দেখে নিজে Send
                করতে হবে।
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
