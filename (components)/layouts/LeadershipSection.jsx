
import Image from "next/image";
import Link from "next/link";

export default function LeadershipSection() {
  return (
    <section className="bg-[#0b1220] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1420px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <p className="text-sm font-extrabold tracking-[0.2em] text-blue-300 sm:text-base">
            LEADERSHIP
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            পরিচালনায়
          </h2>

          <h3 className="mt-6 text-2xl font-semibold text-blue-300 sm:text-3xl">
            রাশেদুল লাবন 
          </h3>

          <p className="mt-6 text-xl font-bold text-white">
            টাইগার সাপ্লায়ারস 
          </p>

          <p className="mt-2 text-base text-slate-300 sm:text-lg">
            প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            আমাদের লক্ষ্য হলো মানসম্মত নির্মাণসামগ্রী সরবরাহ,
            গ্রাহকের আস্থা অর্জন এবং প্রতিটি নির্মাণ প্রকল্পে
            নির্ভরযোগ্য সহযোগী হিসেবে পাশে থাকা।
          </p>

          <Link
            href="/pages/about"
            className="mt-6 inline-flex rounded-2xl bg-[#719af4] px-5 py-3 text-base font-bold text-white transition hover:bg-blue-600"
          >
            আরও পড়ুন
          </Link>
        </div>

        {/* Leader image */}
        <div className="relative order-1 h-[320px] overflow-hidden rounded-[28px] sm:h-[440px] lg:order-2 lg:h-[585px]">
          <Image
            src="/labon.jpg"
            alt="প্রতিষ্ঠানের নেতৃত্ব"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
