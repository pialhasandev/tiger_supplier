
"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useState } from "react";
import { Eye } from "lucide-react";

const products = [
  {
    id: 1,
    image: "/ex.jpg",
    category: "বালু সামগ্রী",
    title: "২.৮ মিমি সিলেকশন বালু (সর্বোচ্চ মোটা দানা)",
    description: "নির্মাণকাজের জন্য বাছাইকৃত মানসম্মত বালু।",
  },
  {
    id: 2,
    image: "/img1.jpg",
    category: "স্টোন চিপস",
    title: '৩/৪" Black Stone (ব্ল্যাক স্টোন)',
    description: "RCC ঢালাই, ভিত্তি নির্মাণ ও অন্যান্য কাজে উপযোগী উন্নত মানের পাথর।",
  },
  {
    id: 3,
    image: "/img2.jpg",
    category: "স্টোন চিপস",
    title: "১/২ ইঞ্চি পাথর",
    description: "কংক্রিট, স্ল্যাব, বিম ও অন্যান্য নির্মাণকাজের জন্য মানসম্মত পাথর।",
  },
  {
    id: 4,
    image: "/ex.jpg",
    category: "বালু সামগ্রী",
    title: "নির্মাণকাজের বাছাইকৃত বালু",
    description: "বিভিন্ন ধরনের নির্মাণকাজের জন্য উপযোগী বালু।",
  },
  {
    id: 5,
    image: "/img1.jpg",
    category: "স্টোন চিপস",
    title: "উন্নত মানের স্টোন চিপস",
    description: "নির্মাণকাজের জন্য বাছাইকৃত পাথর ও স্টোন চিপস।",
  },
  {
    id: 6,
    image: "/img2.jpg",
    category: "অন্যান্য সামগ্রী",
    title: "নির্মাণসামগ্রী",
    description: "আপনার নির্মাণ প্রকল্পের প্রয়োজনীয় সামগ্রী।",
  },
];

const categories = [
  "সবগুলো",
  "বালু",
  "পাথর",
  "স্টোন চিপস",
  "অন্যান্য সামগ্রী",
];

export default function ImageSlider() {
  const [activeCategory, setActiveCategory] = useState("সবগুলো");

  const filteredProducts = products.filter((product) => {
    if (activeCategory === "সবগুলো") return true;
    if (activeCategory === "বালু") {
      return product.category === "বালু সামগ্রী";
    }
    if (activeCategory === "পাথর") {
      return product.category === "স্টোন চিপস";
    }
    return product.category === activeCategory;
  });

  const settings = {
    dots: true,
    infinite: filteredProducts.length > 3,
    speed: 600,
    slidesToShow: Math.min(filteredProducts.length, 3),
    slidesToScroll: 1,
    autoplay: filteredProducts.length > 3,
    autoplaySpeed: 3500,
    arrows: true,
    appendDots: (dots) => (
      <div className="!static mt-2">
        <ul className="m-0 flex items-center justify-center gap-1.5">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <button
        type="button"
        aria-label="স্লাইড দেখুন"
        className="!h-1.5 !w-1.5 !rounded-full !bg-[#34445f] !p-0"
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(filteredProducts.length, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="min-h-screen bg-[#0e1727] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* শিরোনাম */}
        <div className="mb-4 max-w-md">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[1.5px] text-[#9bbcff]">
            আমাদের পণ্যের সংগ্রহ
          </p>

          <h2 className="max-w-[260px] text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
            নির্মাণের প্রতিটি ধাপে
            <br />
            প্রয়োজনীয় উপকরণ
          </h2>

          <p className="mt-3 max-w-lg text-xs leading-6 text-slate-300">
            বালু ও পাথর থেকে শুরু করে নির্মাণসামগ্রী—আপনার
            প্রকল্পের জন্য নির্ভরযোগ্য সরবরাহ এবং মানসম্মত পণ্য।
          </p>
        </div>

        {/* ক্যাটাগরি বাটন */}
        <div className="mb-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-3 py-2 text-xs font-semibold transition duration-300 ${
                activeCategory === category
                  ? "border-[#83aaff] bg-[#83aaff] text-[#0e1727]"
                  : "border-slate-600/60 bg-transparent text-slate-200 hover:border-[#83aaff] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* পণ্যের স্লাইডার */}
        {filteredProducts.length > 0 && (
          <Slider
            key={activeCategory}
            {...settings}
            className="product-slider"
          >
            {filteredProducts.map((product) => (
              <div key={product.id} className="px-2 pb-1">
                <article className="group flex h-[318px] flex-col overflow-hidden rounded-xl border border-slate-600/50 bg-[#111b2c] transition duration-300 hover:border-slate-500">
                  {/* পণ্যের ছবি */}
                  <div className="relative h-[185px] shrink-0 overflow-hidden border-b border-slate-700/60 bg-[#182337]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-2 top-2 rounded-md bg-[#76a5ff] px-2 py-1 text-[9px] font-bold text-white shadow">
                      নির্বাচিত
                    </span>
                  </div>

                  {/* পণ্যের বিবরণ */}
                  <div className="flex min-h-0 flex-1 flex-col p-3">
                    <p className="mb-1 text-[10px] font-semibold text-[#83aaff]">
                      {product.category}
                    </p>

                    <h3 className="line-clamp-2 text-sm font-bold leading-5 text-slate-100">
                      {product.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-slate-400">
                      {product.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-2">
                      <a
                        href={`https://wa.me/01723290809?text=${encodeURIComponent(
                          `আসসালামু আলাইকুম, আমি "${product.title}" সম্পর্কে জানতে চাই।`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-slate-200 transition hover:text-[#83aaff]"
                      >
                        কোটেশন নিন
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            `https://wa.me/01723290809?text=${encodeURIComponent(
                              `আসসালামু আলাইকুম, আমি "${product.title}" সম্পর্কে বিস্তারিত জানতে চাই।`
                            )}`,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        aria-label={`${product.title} সম্পর্কে জানুন`}
                        title="বিস্তারিত জানতে"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b1423] text-slate-300 transition hover:bg-[#83aaff] hover:text-[#0e1727]"
                      >
                        <Eye size={15} />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        )}

        {filteredProducts.length === 0 && (
          <p className="rounded-xl border border-slate-700 p-8 text-center text-sm text-slate-300">
            এই ক্যাটাগরিতে এখন কোনো পণ্য নেই।
          </p>
        )}
      </div>

      {/* স্লাইডারের ডটের ডিজাইন */}
      <style jsx global>{`
        .product-slider .slick-dots li {
          width: 10px;
          height: 10px;
          margin: 0;
        }

        .product-slider .slick-dots li button {
          width: 10px;
          height: 10px;
          padding: 0;
        }

        .product-slider .slick-dots li button:before {
          display: none;
        }

        .product-slider .slick-dots li button {
          border-radius: 9999px;
          background: #34445f;
          opacity: 1;
        }

        .product-slider .slick-dots li.slick-active button {
          background: #83aaff;
        }
      `}</style>
    </section>
  );
}
