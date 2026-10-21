
"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { ShieldCheck, Truck, Layers3, MessageCircle, Phone, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/img1.jpg",
    title: "মজবুত নির্মাণের\nবিশ্বস্ত সহযোগী",
    subtitle: "লাখো গ্রাহকের বিশ্বাস ও আস্থায় এগিয়ে চলার দৃঢ় প্রত্যয়",
  },
  {
    image: "/img2.jpg",
    title: "আপনার নির্মাণে\nগুণগত মানের নিশ্চয়তা",
    subtitle: "সেরা মানের নির্মাণসামগ্রী, নির্ভরযোগ্য সেবা",
  },
  {
    image: "/img3.jpg",
    title: "প্রতিটি প্রকল্পে\nআমাদের অঙ্গীকার",
    subtitle: "সঠিক সময়ে পণ্য সরবরাহ, আপনার আস্থাই আমাদের শক্তি",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "বাছাইকৃত কাঁচামাল",
    description: "দীর্ঘস্থায়ী নির্মাণের মূল ভিত্তি",
  },
  {
    icon: Truck,
    title: "দ্রুত ডেলিভারি",
    description: "পৌঁছাবে যথাসময়ে",
  },
  {
    icon: Layers3,
    title: "বাল্ক অর্ডার",
    description: "প্রজেক্ট ছোটই হোক, আমরা প্রস্তুত",
  },
  {
    icon: MessageCircle,
    title: "বিশ্বস্ত সেবা",
    description: "স্বচ্ছতা ও সততায় নির্ভরযোগ্য ডেলিভারি",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative bg-[#0b1220] pb-10">
      <div className="relative h-[540px] overflow-hidden rounded-b-[32px] sm:h-[580px] lg:h-[620px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".hero-prev",
            nextEl: ".hero-next",
          }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.image}>
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={`নির্মাণসামগ্রী ও নির্মাণ প্রকল্প ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#07101b]/65 via-[#07101b]/55 to-[#07101b]/85" />
                <div className="absolute inset-0 bg-black/15" />
              </div>

              <div className="relative z-10 flex h-full items-start justify-center px-5 pt-20 text-center sm:pt-24 lg:pt-24">
                <div className="max-w-3xl">
                  <h1 className="whitespace-pre-line text-4xl leading-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                    {slide.title}
                  </h1>

                  <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-200 sm:text-base md:text-lg">
                    {slide.subtitle}
                  </p>

                  <Link
                    href="/pages/about"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#719af4] px-7 py-3 text-base font-bold text-white shadow-lg transition hover:bg-blue-600"
                  >
                    আমাদের টিম
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Previous slide"
          className="hero-prev absolute top-1/2 left-4 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition hover:bg-blue-500 sm:flex"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          className="hero-next absolute top-1/2 right-4 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition hover:bg-blue-500 sm:flex"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Feature cards */}
      <div className="relative z-20 mx-auto -mt-7 max-w-[1420px] px-4 sm:px-6 lg:-mt-7 lg:px-8">
        <div className="grid grid-cols-1 gap-3 rounded-[24px] border border-slate-700/80 bg-[#111827] p-3 shadow-xl sm:grid-cols-2 lg:grid-cols-4 lg:p-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center gap-3 rounded-2xl bg-[#172134] px-4 py-5 transition hover:bg-[#202e46] sm:px-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-[#78a2ff]">
                  <Icon size={23} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating contact buttons */}
      {/* <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-3">
        <a
          href="tel:+8801318424303"
          aria-label="Call us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#79a2ff] text-white shadow-xl transition hover:scale-105"
        >
          <Phone size={23} />
        </a>

        <a
          href="https://wa.me/8801318424303"
          target="_blank"
          rel="noreferrer"
          aria-label="Contact us on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#20c76a] text-white shadow-xl transition hover:scale-105"
        >
          <MessageCircle size={24} />
        </a> */}
      {/* </div> */}
    </section>
  );
}
