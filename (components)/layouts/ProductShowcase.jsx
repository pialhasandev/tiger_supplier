
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Eye } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "../common/Container";

const products = [
  {
    category: "বালি",
    name: "2.8 fm সিলেকশন বালু (সর্বোচ্চ মোটা দানা)",
    description: "নির্মাণকাজের জন্য বাছাই করা মানসম্মত বালি।",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "স্টোন চিপস",
    name: '3/4" Black Stone (ব্ল্যাক স্টোন)',
    description:
      "RCC ঢালাই, ফাউন্ডেশন ও কাঠামোগত কাজে উপযোগী।",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "স্টোন চিপস",
    name: "1/2 পাথর",
    description:
      "কংক্রিট ও নির্মাণকাজের জন্য মানসম্মত পাথর।",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "বালি",
    name: "ফাইন স্যান্ড",
    description: "প্লাস্টারিং ও ফিনিশিংয়ের জন্য বালি।",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85",
  },
];

const filters = ["বালু", "পাথর", "স্টোন চিপস", "অন্যান্য সামগ্রী"];

export default function ProductShowcase() {
  return (
    <section id="products" className="mx-auto w-full max-w-[1010px]">
      <Container>
        <div className="mb-6 max-w-xl">
        <p className="mb-2 text-xs font-bold tracking-[0.18em] text-blue-300">
          PRODUCT SHOWCASE
        </p>

        <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
          Core materials
          <br />
          for every stage
          <br />
          of construction
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-300">
          From sand and stone to project-ready logistics,
          Balupathor helps teams stay on schedule and on budget.
        </p>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {filters.map((filter, index) => (
          <button
            key={filter}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              index === 0
                ? "border-blue-400 bg-blue-500/10"
                : "border-white/15 hover:border-blue-400"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.1}
        breakpoints={{
          560: { slidesPerView: 2 },
          850: { slidesPerView: 3 },
        }}
        className="!overflow-visible !pb-12"
      >
        {products.map((product) => (
          <SwiperSlide key={product.name} className="h-auto">
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-white/15 bg-[#121b2a] transition hover:border-blue-400/50">
              <div className="relative p-1.5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full rounded-t-lg object-cover"
                />

                <span className="absolute left-3 top-3 rounded-md bg-blue-500 px-2 py-1 text-[10px] font-bold">
                  Featured
                </span>
              </div>

              <div className="flex flex-1 flex-col p-3 pt-1">
                <p className="text-xs font-semibold text-blue-300">
                  {product.category}
                </p>

                <h3 className="mt-1 text-sm font-bold leading-snug">
                  {product.name}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <a
                    href="#order"
                    className="text-xs font-bold hover:text-blue-300"
                  >
                    কোটেশন নিন
                  </a>

                  <a
                    href="#order"
                    aria-label={`View ${product.name}`}
                    className="rounded-full bg-black/30 p-2 hover:bg-blue-500"
                  >
                    <Eye size={15} />
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      </Container>
    </section>
  );
}
