import Container from "@/(components)/common/Container";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    id: "01",
    src: "/ex2.jpg",
    title: "মানসম্মত বালু সরবরাহ",
    subtitle: "QUALITY SAND SUPPLY",
    description:
      "বাড়ি, ভবন ও বড় নির্মাণ প্রকল্পের জন্য মানসম্মত বালু সরবরাহ। আপনার প্রকল্পের চাহিদা অনুযায়ী বালুর ধরন, পরিমাণ ও ডেলিভারি সম্পর্কে জানতে যোগাযোগ করুন।",
    tag: "বালু সরবরাহ",
  },
  {
    id: "02",
    src: "/ex3.jpg",
    title: "নির্মাণের জন্য পাথর",
    subtitle: "QUALITY STONE SUPPLY",
    description:
      "বিভিন্ন নির্মাণকাজের জন্য স্টোন চিপস ও পাথর সরবরাহ। প্রয়োজনীয় সাইজ, পরিমাণ এবং সরবরাহের ব্যবস্থা সম্পর্কে আমাদের সঙ্গে কথা বলুন।",
    tag: "পাথর সরবরাহ",
  },
  {
    id: "03",
    src: "/img1.jpg",
    title: "স্টোন চিপস",
    subtitle: "PREMIUM STONE CHIPS",
    description:
      "ছাদ ঢালাই, বিম, কলাম ও অন্যান্য উপযুক্ত কংক্রিটের কাজে ব্যবহারের জন্য বিভিন্ন সাইজের স্টোন চিপসের তথ্য নিন।",
    tag: "স্টোন চিপস",
  },
  {
    id: "04",
    src: "/img2.jpg",
    title: "বড় পাথর ও বোল্ডার",
    subtitle: "BOULDER STONE",
    description:
      "রাস্তা, অবকাঠামো এবং নির্দিষ্ট প্রকৌশল প্রকল্পের জন্য বড় আকারের পাথর সরবরাহের সম্ভাব্য ব্যবস্থা সম্পর্কে যোগাযোগ করুন।",
    tag: "বোল্ডার পাথর",
  },
  {
    id: "05",
    src: "/img3.jpg",
    title: "নির্মাণসামগ্রীর মজুত",
    subtitle: "MATERIAL STOCK",
    description:
      "নির্মাণ প্রকল্পের জন্য প্রয়োজনীয় উপকরণের মজুত, পরিমাণ এবং সরবরাহের পরিকল্পনা সম্পর্কে বিস্তারিত জানুন।",
    tag: "পণ্যের মজুত",
  },
  {
    id: "06",
    src: "/ex2.jpg",
    title: "নির্ভরযোগ্য সরবরাহ সেবা",
    subtitle: "RELIABLE DELIVERY",
    description:
      "আপনার প্রকল্পের চাহিদা অনুযায়ী পণ্যের পরিমাণ, পরিবহন ও ডেলিভারির সম্ভাব্য ব্যবস্থা নিয়ে আমাদের সঙ্গে আলোচনা করুন।",
    tag: "সরবরাহ সেবা",
  },
];

export default function GalleryPage() {
  return (
    <main
      id="gallery"
      className="relative min-h-screen overflow-hidden bg-[#080d18] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]"
      />

      <Container>
        {/* Heading */}
        <div className="relative mb-10 grid gap-6 pt-5 sm:mb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-xs font-bold  tracking-[0.18em] text-cyan-300 sm:text-sm">
                TIGER SUPPLIER / GALLERY
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              আমাদের কাজের
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                বাস্তব চিত্র
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              বালু, পাথর ও নির্মাণসামগ্রী সরবরাহের বিভিন্ন দিক
              এক নজরে দেখুন। আপনার পরবর্তী নির্মাণ প্রকল্পের জন্য
              প্রয়োজনীয় উপকরণের তথ্য সংগ্রহ করুন।
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6">
            <p className="text-xs font-bold tracking-[0.2em] text-cyan-300">
              BUILT FOR YOUR PROJECT
            </p>
            <p className="mt-3 text-lg font-bold leading-relaxed sm:text-xl">
              সঠিক উপকরণ, পরিকল্পিত সরবরাহ এবং নির্ভরযোগ্য যোগাযোগ।
            </p>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-cyan-400/70 via-blue-500/30 to-transparent" />
            <p className="mt-3 text-sm text-slate-500">
              EXPLORE OUR MATERIALS & SERVICES
            </p>
          </div>
        </div>

        {/* Gallery: 2 cards per row on desktop, 1 on mobile */}
        <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {galleryImages.map((item, index) => (
            <article
              key={item.id}
              className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101827]/90 shadow-[0_12px_45px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_18px_50px_rgba(8,145,178,0.10)]"
            >
              {/* Image and details side-by-side on laptop */}
              <div className="grid h-full grid-cols-1 sm:grid-cols-[0.9fr_1.1fr]">
                {/* Image */}
                <div className="relative min-h-[230px] overflow-hidden sm:min-h-[290px] lg:min-h-[310px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Image overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/80 via-transparent to-[#080d18]/20 sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#101827]/70" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-[#080d18]/75 px-3 py-2 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span className="text-xs font-semibold text-white">
                      {item.tag}
                    </span>
                  </div>

                  <span className="absolute bottom-4 left-4 text-4xl font-black tracking-tighter text-white/80 sm:bottom-5 sm:left-5 sm:text-5xl">
                    {item.id}
                  </span>

                  {/* Decorative corner */}
                  <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-cyan-400/60 opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-cyan-400/60 opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>

                {/* Details */}
                <div className="flex min-w-0 flex-col justify-center p-5 sm:p-5 md:p-6 lg:p-5 xl:p-6">
                  <p className="text-[10px] font-bold tracking-[0.16em] text-cyan-400 sm:text-[11px]">
                    {item.subtitle}
                  </p>

                  <h2 className="mt-3 text-xl font-extrabold leading-snug text-white transition-colors group-hover:text-cyan-300 sm:text-xl xl:text-2xl">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-cyan-400 transition-all duration-300 group-hover:w-14" />
                    <span className="text-[10px] font-bold tracking-[0.16em] text-slate-500">
                      TIGER SUPPLIER
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#111d30] via-[#101827] to-[#0c1422] p-6 sm:mt-14 sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border border-cyan-400/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-8 h-32 w-32 rounded-full border border-cyan-400/10"
          />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                LET'S BUILD SOMETHING GREAT
              </span>
              <h2 className="mt-3 text-2xl font-black leading-snug sm:text-3xl">
                আপনার নির্মাণ প্রকল্পের জন্য উপকরণ খুঁজছেন?
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                বালু ও পাথরের মূল্য, পরিমাণ এবং সরবরাহের তথ্য জানতে
                Tiger Supplier-এর সঙ্গে যোগাযোগ করুন।
              </p>
            </div>

            <Link
              href="/pages/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            >
              যোগাযোগ করুন
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}