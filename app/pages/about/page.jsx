
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Users,
  Target,
  ShieldCheck,
  Truck,
  ExternalLink,
} from "lucide-react";
import Container from "@/(components)/common/Container";

const team = [
  {
    name: "রাশেদ ইসলাম লাবন",
    role: "প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক",
    image: "/labon.jpg",
    description:
      "প্রতিষ্ঠানের সার্বিক পরিচালনা, ব্যবসায়িক পরিকল্পনা এবং গ্রাহকসেবার মান নিশ্চিত করার দায়িত্বে নিয়োজিত।",
    director: true,
  },
  {
    name: "কর্মীর নাম ০১",
    role: "অপারেশনস ও সরবরাহ ব্যবস্থাপক",
    image: "/worker-1.jpg",
    description:
      "পণ্য সরবরাহের সমন্বয়, অর্ডার ব্যবস্থাপনা এবং নির্ধারিত সময়ে গ্রাহকের কাছে পণ্য পৌঁছে দেওয়ার দায়িত্ব পালন করেন।",
  },
  {
    name: "কর্মীর নাম ০২",
    role: "সেলস ও কাস্টমার সার্ভিস",
    image: "/worker-2.jpg",
    description:
      "গ্রাহকের চাহিদা অনুযায়ী পণ্যের তথ্য, মূল্য এবং অর্ডার-সংক্রান্ত সহায়তা প্রদান করেন।",
  },
];

const locations = [
  {
    name: "প্রধান কার্যালয়",
    address: "আপনার প্রধান কার্যালয়ের ঠিকানা এখানে লিখুন",
    mapQuery: "Dhaka, Bangladesh",
    phone: "017XXXXXXXX",
  },
  {
    name: "শাখা কার্যালয় ০১",
    address: "আপনার প্রথম শাখার ঠিকানা এখানে লিখুন",
    mapQuery: "Gazipur, Bangladesh",
    phone: "017XXXXXXXX",
  },
  {
    name: "শাখা কার্যালয় ০২",
    address: "আপনার দ্বিতীয় শাখার ঠিকানা এখানে লিখুন",
    mapQuery: "Mymensingh, Bangladesh",
    phone: "017XXXXXXXX",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "মানসম্মত পণ্য",
    description:
      "গ্রাহকের চাহিদা অনুযায়ী মানসম্মত বালু, পাথর ও নির্মাণসামগ্রী সরবরাহে গুরুত্ব দিই।",
  },
  {
    icon: Users,
    title: "গ্রাহক সন্তুষ্টি",
    description:
      "স্বচ্ছ যোগাযোগ, আন্তরিক সহযোগিতা এবং দীর্ঘমেয়াদি সম্পর্ক গড়ে তোলাই আমাদের লক্ষ্য।",
  },
  {
    icon: Truck,
    title: "নির্ভরযোগ্য সরবরাহ",
    description:
      "অর্ডার, পরিবহন ও সরবরাহের সমন্বয়ের মাধ্যমে নির্মাণকাজ সচল রাখতে সহযোগিতা করি।",
  },
];

export default function page() {
  return (
    <main className="min-h-screen pt-10 overflow-hidden bg-[#0b1120] text-white">
      {/* Hero */}
      

      {/* Company introduction */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-[#111827] sm:min-h-[420px]">
              <Image
                src="/labon.jpg"
                alt="টাইগার সাপ্লায়ার্সের ব্যবস্থাপনা পরিচালক"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className=" object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-16 sm:p-8 sm:pt-20">
                <p className="text-xl font-extrabold sm:text-2xl">
                  রাশেদ ইসলাম লাবন
                </p>
                <p className="mt-2 text-sm text-blue-300 sm:text-base">
                  প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-extrabold  tracking-[0.2em] text-blue-300">
                OUR STORY
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-snug sm:text-4xl">
                বিশ্বাস, গুণগত মান
                <span className="text-blue-400"> ও দায়বদ্ধতা</span>
              </h2>

              <p className="mt-6 text-sm leading-8 text-slate-300 sm:text-base">
                টাইগার সাপ্লায়ার্সের লক্ষ্য হলো নির্মাণসামগ্রী সংগ্রহ
                ও সরবরাহের প্রক্রিয়াকে গ্রাহকদের জন্য আরও সহজ,
                সুশৃঙ্খল এবং নির্ভরযোগ্য করা। আমরা গ্রাহকের চাহিদা
                বুঝে উপযুক্ত পণ্য, মূল্য এবং সরবরাহের বিষয়ে
                পরিষ্কারভাবে যোগাযোগ করার ওপর গুরুত্ব দিই।
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-300 sm:text-base">
                আমাদের পরিচালনা দল ও কর্মীরা অর্ডার সমন্বয় থেকে
                সরবরাহ পর্যন্ত প্রতিটি ধাপে আন্তরিক সেবা দেওয়ার
                চেষ্টা করেন। প্রতিটি গ্রাহকের সঙ্গে দীর্ঘমেয়াদি
                আস্থার সম্পর্ক গড়ে তোলাই আমাদের প্রত্যাশা।
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#111827] p-5">
                  <Target className="mb-3 text-blue-400" size={28} />
                  <h3 className="font-bold">আমাদের লক্ষ্য</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    সময়োপযোগী ও নির্ভরযোগ্য নির্মাণসামগ্রী সরবরাহ।
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#111827] p-5">
                  <ShieldCheck className="mb-3 text-blue-400" size={28} />
                  <h3 className="font-bold">আমাদের অঙ্গীকার</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    স্বচ্ছতা, দায়বদ্ধতা এবং গ্রাহক সন্তুষ্টি।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Company values */}
      <section className="border-y border-white/5 bg-[#0e1728] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-bold tracking-widest text-blue-300">
              WHY TIGER SUPPLIERS
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              কেন আমাদের বেছে নেবেন?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              আমাদের কাজের প্রতিটি ধাপে গ্রাহকের চাহিদা ও নির্ভরযোগ্য
              সেবাকে গুরুত্ব দেওয়া হয়।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#111827] p-6 transition hover:-translate-y-1 hover:border-blue-400/40 sm:p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section
        id="our-team"
        className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold tracking-widest text-blue-300">
              OUR TEAM
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              আমাদের নেতৃত্ব ও টিম
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              দক্ষ পরিচালনা ও সমন্বিত প্রচেষ্টার মাধ্যমে আমরা
              গ্রাহকদের সেবা দেওয়ার চেষ্টা করি।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <article
                key={person.name}
                className={`overflow-hidden rounded-2xl border bg-[#111827] transition hover:-translate-y-1 ${
                  person.director
                    ? "border-blue-400/40"
                    : "border-white/10"
                }`}
              >
                <div className="relative h-[320px] overflow-hidden bg-[#182235] sm:h-[360px]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition duration-500 hover:scale-105"
                  />

                  {person.director && (
                    <span className="absolute left-4 top-4 rounded-full bg-blue-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                      পরিচালক
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-extrabold">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-blue-300">
                    {person.role}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {person.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Locations */}
      <section className="border-t border-white/5 bg-[#0e1728] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold tracking-widest text-blue-300">
              OUR LOCATIONS
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              আমাদের কার্যালয় ও অবস্থান
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              নিচে আমাদের কার্যালয়গুলোর ঠিকানা ও মানচিত্রের নমুনা
              দেওয়া হয়েছে। প্রকৃত অবস্থান অনুযায়ী এগুলো পরিবর্তন করুন।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {locations.map((location) => {
              const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
                location.mapQuery
              )}&z=13&output=embed`;

              const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                location.mapQuery
              )}`;

              return (
                <article
                  key={location.name}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]"
                >
                  <div className="relative">
                    <iframe
                      title={`${location.name} এর মানচিত্র`}
                      src={embedUrl}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-64 w-full border-0"
                      allowFullScreen
                    />
                    <span className="absolute left-3 top-3 rounded-lg bg-[#0b1120]/90 px-3 py-2 text-xs font-bold text-blue-300">
                      <MapPin className="mr-1 inline" size={14} />
                      {location.name}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold">{location.name}</h3>

                    <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-400">
                      <MapPin
                        className="mt-1 shrink-0 text-blue-400"
                        size={17}
                      />
                      <span>{location.address}</span>
                    </p>

                    <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                      <Phone size={16} className="text-blue-400" />
                      {location.phone}
                    </p>

                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-400/40 px-4 py-3 text-sm font-bold text-blue-300 transition hover:bg-blue-500 hover:text-white"
                    >
                      Google Maps-এ দেখুন
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Container>
          <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-r from-[#142443] to-[#111827] px-6 py-10 text-center sm:px-10 sm:py-14">
            <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              আপনার নির্মাণসামগ্রী প্রয়োজন?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              পণ্যের বিবরণ, মূল্য এবং সরবরাহ সম্পর্কে জানতে আমাদের
              সঙ্গে যোগাযোগ করুন।
            </p>
            <Link
              href="/pages/contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-7 py-3.5 font-bold text-white transition hover:bg-blue-600"
            >
              <Phone size={18} />
              যোগাযোগ করুন
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
