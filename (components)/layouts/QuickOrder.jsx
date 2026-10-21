"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, Phone } from "lucide-react";
import Container from "../common/Container";

const steps = ["Select product", "Project details", "Delivery", "Contact"];

export default function QuickOrder() {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("CFT");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function sendOrder(e) {
    e.preventDefault();

    const message = [
      "Balupathor Order Enquiry",
      `Product: ${category}`,
      `Quantity: ${quantity} ${unit}`,
      `Delivery address: ${address}`,
      `Delivery date: ${date || "Not specified"}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
    ].join("\n");

    window.open(
      `https://wa.me/8801712301424?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section
      id="order"
      className="grid gap-8 rounded-[28px] bg-[#0d1525] p-5 md:grid-cols-2 md:items-center md:p-7 lg:gap-14"
    >
      <Container>
        <div>
          <p className="mb-3 text-sm font-extrabold tracking-[0.15em] text-blue-200">
            QUICK ORDER EXPERIENCE
          </p>

          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Ready to order your construction materials?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base">
            Share your requirements and our team will help you plan the best
            delivery and pricing for your project.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#order-form"
              onClick={() => setStep(0)}
              className="rounded-xl bg-blue-500 px-4 py-3 text-sm font-bold shadow-lg transition hover:bg-blue-400"
            >
              এখনই অর্ডার করুন
            </a>

            <a
              href="tel:01712301424"
              className="flex items-center gap-2 rounded-xl border border-white/40 px-4 py-3 text-sm font-bold hover:bg-white/10"
            >
              <Phone size={16} />
              কল করুন
            </a>
          </div>
        </div>

        <form
          id="order-form"
          onSubmit={sendOrder}
          className="rounded-[24px] bg-[#252c3b] p-5 shadow-xl md:p-6"
        >
          <div className="mb-6 grid grid-cols-4 gap-2">
            {steps.map((label, i) => (
              <div
                key={label}
                className={`h-1.5 rounded-full ${
                  i <= step ? "bg-blue-400" : "bg-white/20"
                }`}
              />
            ))}
          </div>

          <h3 className="text-2xl font-bold">
            {step + 1}. {steps[step]}
          </h3>

          <p className="mb-6 mt-2 text-sm leading-6 text-slate-300">
            {
              [
                "Tell us which material category you need for the project.",
                "Add the quantity required for your project.",
                "Where and when should we deliver the materials?",
                "Share your contact details to finish the enquiry.",
              ][step]
            }
          </p>

          {step === 0 && (
            <div className="flex flex-wrap gap-2">
              {["Sand", "Stone", "Construction materials"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-xl border px-4 py-3 text-sm transition ${
                    category === item
                      ? "border-blue-300 bg-blue-500/25"
                      : "border-white/20 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="grid gap-3 sm:grid-cols-[1fr_110px]">
              <label className="text-sm text-slate-300">
                Quantity
                <input
                  type="number"
                  min="1"
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 500"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#171e2c] px-3 py-3 text-white outline-none focus:border-blue-400"
                />
              </label>

              <label className="text-sm text-slate-300">
                Unit
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#171e2c] px-3 py-3 text-white outline-none"
                >
                  <option>CFT</option>
                  <option>Truck</option>
                  <option>Ton</option>
                  <option>Bag</option>
                </select>
              </label>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-3">
              <label className="text-sm text-slate-300">
                Delivery address
                <input
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Area, road, city"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#171e2c] px-3 py-3 text-white outline-none focus:border-blue-400"
                />
              </label>

              <label className="text-sm text-slate-300">
                Preferred delivery date
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#171e2c] px-3 py-3 text-white outline-none focus:border-blue-400"
                />
              </label>
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-3">
              <label className="text-sm text-slate-300">
                Your name
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#171e2c] px-3 py-3 text-white outline-none focus:border-blue-400"
                />
              </label>

              <label className="text-sm text-slate-300">
                Phone number
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="01XXXXXXXXX"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#171e2c] px-3 py-3 text-white outline-none focus:border-blue-400"
                />
              </label>
            </div>
          )}

          <div className="mt-6 flex gap-2">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-1 rounded-xl border border-white/20 px-4 py-3 text-sm font-bold hover:bg-white/10"
              >
                <ChevronLeft size={16} />
                Back
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                disabled={
                  (step === 0 && !category) ||
                  (step === 1 && !quantity) ||
                  (step === 2 && !address.trim())
                }
                onClick={() => setStep(step + 1)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-400 px-4 py-3 text-sm font-bold text-white hover:bg-blue-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                পরের <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="submit"
                className="flex flex-1 items-center justify-center rounded-xl bg-blue-400 px-4 py-3 text-sm font-bold hover:bg-blue-300"
              >
                Send enquiry on WhatsApp
              </button>
            )}
          </div>
        </form>
      </Container>
    </section>
  );
}
