
"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  Phone,
  Package,
  Truck,
  MapPin,
  UserRound,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const steps = [
  { label: "পণ্য", icon: Package },
  { label: "পরিমাণ", icon: Truck },
  { label: "ডেলিভারি", icon: MapPin },
  { label: "যোগাযোগ", icon: UserRound },
];

const products = [
  {
    name: "বালু",
    description: "নির্মাণকাজের মানসম্মত বালু",
  },
  {
    name: "পাথর",
    description: "পাথর ও স্টোন চিপস",
  },
  {
    name: "নির্মাণসামগ্রী",
    description: "আপনার প্রকল্পের প্রয়োজনীয় সামগ্রী",
  },
];

const inputClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10";

const labelClass = "block text-sm font-semibold text-slate-200";

export default function QuickOrder() {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("CFT");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function validateStep() {
    if (step === 0 && !category) {
      setError("অনুগ্রহ করে একটি পণ্য নির্বাচন করুন।");
      return false;
    }

    if (
      step === 1 &&
      (!quantity.trim() ||
        !Number.isFinite(Number(quantity)) ||
        Number(quantity) <= 0)
    ) {
      setError("অনুগ্রহ করে শূন্যের চেয়ে বেশি পরিমাণ লিখুন।");
      return false;
    }

    if (step === 2 && !address.trim()) {
      setError("অনুগ্রহ করে ডেলিভারির ঠিকানা লিখুন।");
      return false;
    }

    setError("");
    return true;
  }

  function nextStep() {
    if (validateStep()) {
      setStep((current) => Math.min(current + 1, 3));
    }
  }

  function previousStep() {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
  }

  function sendOrder(e) {
    e.preventDefault();

    if (!validateStep()) return;

    if (!name.trim()) {
      setError("অনুগ্রহ করে আপনার নাম লিখুন।");
      return;
    }

    if (!/^[+()\d\s-]{7,20}$/.test(phone.trim())) {
      setError("অনুগ্রহ করে সঠিক ফোন নম্বর লিখুন।");
      return;
    }

    const message = [
      "টাইগার সাপ্লায়ার - অর্ডার সংক্রান্ত জিজ্ঞাসা",
      `পণ্য: ${category}`,
      `পরিমাণ: ${quantity} ${unit}`,
      `ডেলিভারির ঠিকানা: ${address}`,
      `ডেলিভারির তারিখ: ${date || "উল্লেখ করা হয়নি"}`,
      `নাম: ${name.trim()}`,
      `ফোন নম্বর: ${phone.trim()}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/8801723290809?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  const StepIcon = steps[step].icon;

  return (
    <section
      id="order"
      className="relative overflow-hidden bg-[#0b1220] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8"
    >
      {/* পেছনের সাজসজ্জা */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* বাম পাশের অংশ */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-300 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            সহজ ও দ্রুত অর্ডার
          </div>

          <h2 className="max-w-xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            আপনার নির্মাণসামগ্রী,
            <span className="mt-2 block text-blue-400">
              পৌঁছে যাবে নির্ভরতার সাথে।
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            আপনার প্রকল্পের জন্য কী কী সামগ্রী প্রয়োজন, তা আমাদের জানান।
            পণ্যের প্রাপ্যতা, প্রতিযোগিতামূলক মূল্য এবং ডেলিভারি সম্পর্কে
            জানতে আমাদের টিমের সাথে যোগাযোগ করুন।
          </p>

          {/* যোগাযোগের বাটন */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#order-form"
              onClick={() => {
                setStep(0);
                setError("");
              }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              এখনই অর্ডার করুন
              <ArrowRight size={18} />
            </a>

            <a
              href="tel:01723290809"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:border-blue-400/50 hover:bg-white/10"
            >
              <Phone size={17} className="text-blue-400" />
              কল করুন
            </a>
          </div>

          {/* সেবার বৈশিষ্ট্য */}
          <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/10 text-blue-300">
                <ShieldCheck size={21} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  নির্ভরযোগ্য সেবা
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  বিশ্বস্ত সহযোগিতা
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/10 text-orange-300">
                <Package size={21} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  মানসম্মত সামগ্রী
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  নির্মাণকাজের প্রয়োজনীয় উপকরণ
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/10 text-emerald-300">
                <Clock3 size={21} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  সহজে অর্ডার
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  মাত্র ৪টি ধাপে
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ডান পাশের অর্ডার ফর্ম */}
        <div
          id="order-form"
          className="scroll-mt-24 overflow-hidden rounded-3xl border border-white/10 bg-[#111b2d] shadow-2xl shadow-black/20"
        >
          {/* ফর্মের হেডার */}
          <div className="border-b border-white/10 bg-[#101a2b] px-5 py-6 sm:px-8 sm:py-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  অর্ডারের অনুরোধ
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  শুরু করা যাক
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  আপনার অর্ডারের তথ্য দিতে নিচের ধাপগুলো পূরণ করুন।
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                <StepIcon size={24} />
              </div>
            </div>

            {/* অগ্রগতির নির্দেশক */}
            <div className="mt-7 flex items-center gap-2">
              {steps.map((item, index) => (
                <div
                  key={item.label}
                  className="flex min-w-0 flex-1 flex-col gap-2"
                >
                  <div
                    className={`h-1.5 rounded-full transition-colors duration-300 ${
                      index <= step ? "bg-blue-400" : "bg-white/10"
                    }`}
                  />

                  <span
                    className={`truncate text-[10px] font-semibold sm:text-xs ${
                      index === step
                        ? "text-blue-300"
                        : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={sendOrder} noValidate className="p-5 sm:p-8">

            {/* ধাপের শিরোনাম */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                <span>ধাপ {step + 1} / ৪</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span className="text-slate-400">
                  {steps[step].label}
                </span>
              </div>

              <h4 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                {
                  [
                    "আপনার কী প্রয়োজন?",
                    "পরিমাণ উল্লেখ করুন",
                    "কোথায় ডেলিভারি দিতে হবে?",
                    "আপনার সাথে কীভাবে যোগাযোগ করব?",
                  ][step]
                }
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {
                  [
                    "আপনার প্রকল্পের জন্য প্রয়োজনীয় সামগ্রী নির্বাচন করুন।",
                    "প্রয়োজনীয় পরিমাণ এবং পরিমাপের একক নির্বাচন করুন।",
                    "ডেলিভারির ঠিকানা ও পছন্দের তারিখ উল্লেখ করুন।",
                    "যোগাযোগের জন্য আপনার তথ্য দিন।",
                  ][step]
                }
              </p>
            </div>

            {/* ধাপ ১: পণ্য নির্বাচন */}
            {step === 0 && (
              <div className="grid gap-3">
                {products.map((product) => {
                  const selected = category === product.name;

                  return (
                    <button
                      key={product.name}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => {
                        setCategory(product.name);
                        setError("");
                      }}
                      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                        selected
                          ? "border-blue-400 bg-blue-400/10 ring-2 ring-blue-400/10"
                          : "border-white/10 bg-[#0b1220] hover:border-blue-400/40 hover:bg-white/[0.03]"
                      }`}
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                          selected
                            ? "bg-blue-500 text-white"
                            : "bg-white/5 text-slate-300"
                        }`}
                      >
                        <Package size={22} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold text-white">
                          {product.name}
                        </span>

                        <span className="mt-1 block text-xs leading-5 text-slate-400">
                          {product.description}
                        </span>
                      </span>

                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          selected
                            ? "border-blue-400 bg-blue-500 text-white"
                            : "border-white/20 text-transparent"
                        }`}
                      >
                        {selected && <CheckCircle2 size={15} />}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* ধাপ ২: পরিমাণ */}
            {step === 1 && (
              <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_125px]">
                <label className={labelClass}>
                  প্রয়োজনীয় পরিমাণ

                  <input
                    type="number"
                    min="0.01"
                    step="any"
                    required
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                      setError("");
                    }}
                    placeholder="যেমন: 500"
                    className={inputClass}
                  />

                  <span className="mt-2 block text-xs font-normal text-slate-400">
                    আনুমানিক প্রয়োজনীয় পরিমাণ লিখুন।
                  </span>
                </label>

                <label className={labelClass}>
                  পরিমাপের একক

                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className={inputClass}
                  >
                    <option value="CFT">CFT</option>
                    <option value="Truck">ট্রাক</option>
                    <option value="Ton">টন</option>
                    <option value="Bag">বস্তা</option>
                  </select>
                </label>
              </div>
            )}

            {/* ধাপ ৩: ডেলিভারি */}
            {step === 2 && (
              <div className="grid gap-5">
                <label className={labelClass}>
                  ডেলিভারির ঠিকানা

                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      required
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        setError("");
                      }}
                      placeholder="এলাকা, রোড, শহর বা জেলার নাম"
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                </label>

                <label className={labelClass}>
                  পছন্দের ডেলিভারির তারিখ

                  <input
                    type="date"
                    min={new Date().toLocaleDateString("en-CA")}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputClass}
                  />

                  <span className="mt-2 block text-xs font-normal text-slate-400">
                    ঐচ্ছিক — ডেলিভারির তারিখ আমাদের সাথে নিশ্চিত করে নেবেন।
                  </span>
                </label>
              </div>
            )}

            {/* ধাপ ৪: যোগাযোগের তথ্য */}
            {step === 3 && (
              <div className="grid gap-5">
                <label className={labelClass}>
                  আপনার পূর্ণ নাম

                  <input
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setError("");
                    }}
                    placeholder="আপনার নাম লিখুন"
                    className={inputClass}
                  />
                </label>

                <label className={labelClass}>
                  ফোন নম্বর

                  <input
                    required
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setError("");
                    }}
                    placeholder="01XXXXXXXXX"
                    className={inputClass}
                  />
                </label>

                <div className="flex items-start gap-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4 text-sm text-emerald-200">
                  <MessageCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <p className="leading-6">
                    আপনার অর্ডারের তথ্য WhatsApp-এ প্রস্তুত করা হবে।
                    আপনি তথ্যগুলো দেখে আমাদের টিমের কাছে পাঠাতে পারবেন।
                  </p>
                </div>
              </div>
            )}

            {/* ভুলের বার্তা */}
            {error && (
              <p
                role="alert"
                className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm font-medium text-red-300"
              >
                {error}
              </p>
            )}

            {/* আগের ও পরের ধাপের বাটন */}
            <div className="mt-7 flex gap-3 border-t border-white/10 pt-5">
              {step > 0 && (
                <button
                  type="button"
                  onClick={previousStep}
                  className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-xl border border-white/10 px-4 text-sm font-bold text-slate-300 transition hover:bg-white/5 hover:text-white sm:px-5"
                >
                  <ChevronLeft size={18} />
                  পূর্ববর্তী
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 text-sm font-bold text-white shadow-md shadow-blue-500/15 transition hover:bg-blue-400 active:scale-[0.99]"
                >
                  পরবর্তী ধাপ
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-sm font-bold text-white shadow-md shadow-emerald-600/15 transition hover:bg-emerald-500 active:scale-[0.99] sm:px-5"
                >
                  <MessageCircle size={19} />
                  <span>WhatsApp-এ অর্ডার পাঠান</span>
                  <ArrowRight size={17} />
                </button>
              )}
            </div>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              অনলাইনে কোনো পেমেন্টের প্রয়োজন নেই। আপনার অর্ডারের অনুরোধ WhatsApp-এর মাধ্যমে পাঠানো হবে।
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
