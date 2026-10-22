
import Container from "@/(components)/common/Container";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "৩/৪ ইঞ্চি ব্ল্যাক স্টোন",
    englishName: "3/4 Inch Black Stone",
    size: "প্রায় ১৯–২০ মিমি",
    image: "/ex.jpg",
    description:
      "মজবুত কংক্রিট ও আরসিসি নির্মাণকাজে ব্যবহৃত জনপ্রিয় স্টোন চিপস।",
    uses: ["ছাদ ঢালাই", "বিম ও কলাম", "ফাউন্ডেশন"],
  },
  {
    id: 2,
    name: "১/২ ইঞ্চি স্টোন চিপস",
    englishName: "1/2 Inch Stone Chips",
    size: "প্রায় ১২ মিমি",
    image: "/ex.jpg",
    description:
      "ছোট আকারের পাথরের চিপস, নির্দিষ্ট কংক্রিট মিক্স ও অন্যান্য নির্মাণকাজে ব্যবহৃত হয়।",
    uses: ["কংক্রিটের কাজ", "ফ্লোরিং বেইস", "ব্লক তৈরি"],
  },
  {
    id: 3,
    name: "১/৪ ইঞ্চি স্টোন চিপস",
    englishName: "1/4 Inch Stone Chips",
    size: "প্রায় ৬ মিমি",
    image: "/ex.jpg",
    description:
      "ছোট আকারের অ্যাগ্রিগেট, ফিনিশিং ও উপযুক্ত মিশ্রণভিত্তিক কাজে ব্যবহার করা হয়।",
    uses: ["ফিনিশিং কাজ", "নির্দিষ্ট কংক্রিট মিক্স", "প্রিকাস্ট পণ্য"],
  },
  {
    id: 4,
    name: "বোল্ডার পাথর",
    englishName: "Boulder Stone",
    size: "বড় আকারের পাথর",
    image: "/ex.jpg",
    description:
      "বড় আকারের শক্ত পাথর, যা অবকাঠামো নির্মাণ ও প্রয়োজনে ক্রাশিংয়ের কাজে ব্যবহৃত হয়।",
    uses: ["রিটেইনিং ওয়াল", "নদীর তীর সংরক্ষণ", "রোড বেইস"],
  },
  {
    id: 5,
    name: "স্টোন ডাস্ট",
    englishName: "Stone Dust",
    size: "সূক্ষ্ম পাথরের গুঁড়া",
    image: "/ex.jpg",
    description:
      "পাথর ভাঙার সময় তৈরি হওয়া সূক্ষ্ম উপাদান, যা নির্ধারিত স্পেসিফিকেশন অনুযায়ী বিভিন্ন কাজে ব্যবহৃত হয়।",
    uses: ["বেইস প্রস্তুত", "পেভিং কাজে", "নির্বাচিত মিশ্রণ"],
  },
  {
    id: 6,
    name: "নুড়ি পাথর",
    englishName: "Pea Gravel",
    size: "ছোট ও গোলাকার দানা",
    image: "/ex.jpg",
    description:
      "ছোট ও তুলনামূলক গোলাকার পাথর, যা ড্রেনেজ, ল্যান্ডস্কেপিং এবং নির্দিষ্ট নির্মাণকাজে ব্যবহৃত হয়।",
    uses: ["ড্রেনেজ", "বাগান সাজানো", "ল্যান্ডস্কেপিং"],
  },
];

export default function Page() {
  const whatsappNumber = "01723290809";

  const whatsappLink = (message) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section
      id="stone-products"
      className="bg-[#0f1727] py-16 text-white sm:py-20 lg:py-24" 
    >
      <Container>
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl pt-5 text-center sm:mb-14">
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-400">
            আমাদের পাথর সংগ্রহ
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            মানসম্মত বালু পাথর
            <span className="mt-2 block text-blue-400">
              আপনার নির্মাণের নির্ভরযোগ্য উপকরণ
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
            বাড়ি, ভবন, রাস্তা ও অন্যান্য নির্মাণ প্রকল্পের জন্য
            বিভিন্ন ধরনের স্টোন চিপস ও পাথর সম্পর্কে জানুন।
            আপনার কাজ অনুযায়ী পণ্যের সাইজ ও সরবরাহের তথ্য জানতে
            আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#111a2b] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-950/20"
            >
              {/* Product image */}
              <div className="relative h-56 overflow-hidden bg-slate-800 sm:h-64">
                <Image
                  src="/ex.jpg"
                  alt={product.englishName}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-blue-500 px-3 py-1.5 text-xs font-bold text-white shadow">
                  {product.size}
                </span>
              </div>

              {/* Product details */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {product.englishName}
                </p>

                <h3 className="mt-2 text-xl font-extrabold leading-snug text-white sm:text-2xl">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {product.description}
                </p>

                {/* Product uses */}
                <div className="mt-5">
                  <h4 className="text-sm font-bold text-slate-100">
                    ব্যবহার
                  </h4>

                  <ul className="mt-3 flex flex-wrap gap-2">
                    {product.uses.map((use) => (
                      <li
                        key={use}
                        className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp product inquiry */}
                <Link
                  href={whatsappLink(
                    `আসসালামু আলাইকুম, আমি ${product.name} সম্পর্কে জানতে চাই। পণ্যের সাইজ, মূল্য ও ডেলিভারির তথ্য জানাবেন।`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  মূল্য জানতে যোগাযোগ করুন
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl border border-slate-700 bg-[#111a2b] px-5 py-8 text-center sm:mt-14 sm:px-8 sm:py-10">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            আপনার প্রকল্পের জন্য পাথর খুঁজছেন?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            পাথরের সাইজ, পরিমাণ, বর্তমান মূল্য ও ডেলিভারির তথ্য জানতে
            Tiger Supplier-এর সাথে যোগাযোগ করুন।
          </p>

          <Link
            href={whatsappLink(
              "আসসালামু আলাইকুম, আমি বালু পাথরের মূল্য ও সরবরাহ সম্পর্কে জানতে চাই।"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-blue-500 px-6 py-3 font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-400"
          >
            WhatsApp-এ যোগাযোগ করুন
          </Link>
        </div>
      </Container>
    </section>
  );
}
