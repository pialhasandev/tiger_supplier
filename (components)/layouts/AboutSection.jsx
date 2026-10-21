
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "../common/Container";

const benefits = [
  {
    title: "24/7",
    description: "সাপোর্ট",
  },
  {
    title: "বিশ্বস্ত",
    description: "সাশ্রয়ী রেট",
  },
  {
    title: "Fast",
    description: "দ্রুত ডেলিভারি",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[#0b1220] px-4 pb-20 text-white sm:px-6 lg:px-8 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-[1490px] rounded-[28px] border border-slate-700/80 bg-gradient-to-br from-[#192439] to-[#0d1524] p-4 sm:p-6 lg:p-9">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-11">
          {/* Excavator image */}
          <div className="relative h-[300px] overflow-hidden rounded-[24px] sm:h-[430px] lg:h-[590px]">
            <Image
              src="/ex.jpg"
              alt="নির্মাণকাজে ব্যবহৃত এক্সকাভেটর"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="py-5 lg:px-1 lg:py-10">
            <p className="text-xl font-semibold text-blue-300">
              আমাদের
            </p>

            <h2 className="mt-2 text-3xl leading-tight font-extrabold sm:text-4xl md:text-5xl xl:text-[58px]">
              ইয়ার্ড থেকে আপনার সাইট পর্যন্ত
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
              স্বপ্নের বাড়ি কিংবা মেগা প্রজেক্ট, বালু-পাথরের
              নিরবচ্ছিন্ন সরবরাহে আমরা আপনার পাশে। মানসম্মত
              নির্মাণসামগ্রী ও সময়মতো ডেলিভারির মাধ্যমে
              আপনার কাজকে রাখি সচল।
            </p>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-[20px] border border-slate-600 bg-[#19253a] px-3 py-5 sm:px-5"
                >
                  <h3 className="text-lg font-extrabold text-[#79a2ff] sm:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/pages/products"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 font-bold text-white transition hover:border-blue-400 hover:bg-blue-500/10"
            >
              আমাদের পণ্য দেখুন
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}
