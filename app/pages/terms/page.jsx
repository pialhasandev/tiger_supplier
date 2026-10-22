import Container from "@/(components)/common/Container";
import { Phone } from "lucide-react";
import Link from "next/link";
import { BsPeople } from "react-icons/bs";
import { FaTeamspeak } from "react-icons/fa6";

const terms = [
  "পণ্য অর্ডার করার পূর্বে পণ্যের বিবরণ, পরিমাণ, মূল্য এবং সরবরাহের শর্ত ভালোভাবে যাচাই করে নিন।",

  "বিভিন্ন ধরনের বালু, পাথর ও নির্মাণসামগ্রীর মান ও বৈশিষ্ট্য পণ্যভেদে ভিন্ন হতে পারে। অর্ডার দেওয়ার আগে প্রয়োজনীয় তথ্য নিশ্চিত করুন।",

  "পণ্যের মূল্য, পরিবহন খরচ এবং সরবরাহের সময় অর্ডারের পরিমাণ, স্থান ও পরিস্থিতি অনুযায়ী পরিবর্তিত হতে পারে।",

  "সরবরাহের সময় ও তারিখ পারস্পরিক আলোচনার ভিত্তিতে নির্ধারণ করা হবে। অনিবার্য পরিস্থিতিতে সরবরাহে বিলম্ব হলে গ্রাহককে জানানো হবে।",

  "অর্ডার নিশ্চিত করার আগে পণ্যের পরিমাণ, সরবরাহের ঠিকানা, যোগাযোগের নম্বর এবং অন্যান্য প্রয়োজনীয় তথ্য সঠিকভাবে প্রদান করতে হবে।",

  "পণ্য গ্রহণের সময় পণ্যের পরিমাণ ও দৃশ্যমান অবস্থা যাচাই করে নিন। কোনো অসংগতি দেখা গেলে দ্রুত Tiger Supplier-কে জানান।",

  "অর্ডার বাতিল, পরিবর্তন অথবা ফেরত সংক্রান্ত বিষয় অর্ডারের অবস্থা ও পারস্পরিক আলোচনার ভিত্তিতে বিবেচনা করা হবে।",

  "পরিবহন, লোডিং ও আনলোডিং সংক্রান্ত খরচ এবং দায়িত্ব অর্ডার নিশ্চিত করার সময় স্পষ্টভাবে নির্ধারণ করা হবে।",

  "গ্রাহকের দেওয়া যোগাযোগের তথ্য শুধুমাত্র অর্ডার ব্যবস্থাপনা, সরবরাহ সমন্বয় এবং প্রয়োজনীয় যোগাযোগের জন্য ব্যবহার করা হবে।",

  "প্রাকৃতিক দুর্যোগ, যানবাহন সমস্যা, আবহাওয়া বা নিয়ন্ত্রণের বাইরের পরিস্থিতির কারণে সরবরাহে সমস্যা হলে Tiger Supplier গ্রাহককে অবহিত করবে।",
];

export default function page() {
  return (
    <>
      <section className="min-h-screen bg-[#0b1120] text-white">
        {/* Page heading */}
        <div className="border-b border-white/5 bg-gradient-to-r from-[#0b1120] to-[#111b2d] py-8 sm:py-10 md:py-12">
          <Container>
            <h1 className="text-3xl pt-20 font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              টাইগার সাপ্লায়ারের শর্তাবলী
            </h1>

            <nav
              aria-label="Breadcrumb"
              className="mt-3 flex items-center gap-2 text-xs text-gray-400 sm:text-sm"
            >
              <Link href="/" className="transition hover:text-blue-400">
                হোম
              </Link>
              <span>/</span>
              <span className="text-gray-300">শর্তাবলী</span>
            </nav>
          </Container>
        </div>

        {/* Terms content */}
        <Container>
          <div className="mx-auto max-w-2xl px-1 py-10 sm:py-12 md:py-14">
            <div className="space-y-4 text-sm leading-6 text-gray-200 sm:space-y-5 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
              {terms.map((term, index) => (
                <p key={index}>
                  <span className="font-semibold text-blue-300">
                    {index + 1}/{" "}
                  </span>
                  {term}
                </p>
              ))}

              <p className="pt-2">
                <span className="font-bold text-white">আমাদের সম্পর্কে:</span>{" "}
                Tiger Supplier বালু, পাথর ও বিভিন্ন নির্মাণসামগ্রী সরবরাহের
                ক্ষেত্রে গ্রাহকদের নির্ভরযোগ্য সেবা দেওয়ার লক্ষ্যে কাজ করে।
                গ্রাহকসেবা ও পারস্পরিক বিশ্বাস আমাদের অগ্রাধিকার।
              </p>

              <p>
                <span className="font-bold text-white">যোগাযোগ:</span> শর্তাবলী,
                মূল্য, অর্ডার অথবা সরবরাহ সম্পর্কে বিস্তারিত জানতে আমাদের সঙ্গে
                যোগাযোগ করুন।
              </p>

              <div className="space-y-1 pt-1 text-gray-300">
                <p>
                  <span className="font-semibold text-white">
                    কোম্পানির নাম:
                  </span>{" "}
                  টাইগার সাপ্লায়ার (Tiger Supplier)
                </p>

                <p>
                  <span className="font-semibold text-white">ঠিকানা:</span>{" "}
                  Rahima plaza(2nd floor),tomaltola,jamalpur sadar,Jamalpur.
                </p>

                <p>
                  <span className="font-semibold text-white">মোবাইল:</span>{" "}
                  <a
                    href="tel:01723290809"
                    className="transition hover:text-blue-400"
                  >
                    01723290809
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-white">ইমেইল:</span>{" "}
                  <a
                    href="mailto:labonrashed@gmail.com"
                    className="break-all transition hover:text-blue-400"
                  >
                    labonrashed@gmail.com
                  </a>
                </p>
              </div>

              <p className="pt-3">
                Tiger Supplier প্রয়োজন অনুযায়ী এই শর্তাবলী সংশোধন করার অধিকার
                সংরক্ষণ করে। যেকোনো পরিবর্তনের ক্ষেত্রে হালনাগাদ শর্তাবলী এই
                পৃষ্ঠায় প্রকাশ করা হবে।
              </p>

              <p>
                আমাদের সেবা গ্রহণের মাধ্যমে গ্রাহকগণ অর্ডার-সংক্রান্ত প্রযোজ্য
                শর্তাবলী মেনে চলতে সম্মত হন।
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="border-b border-white/5 bg-gradient-to-br from-[#101b30] via-[#0b1120] to-[#0b1120] pt-28 pb-14 sm:pt-32 sm:pb-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-bold tracking-widest text-blue-300 sm:text-sm">
              আমাদের সম্পর্কে
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              আপনার নির্মাণকাজের
              <span className="block text-blue-400">নির্ভরযোগ্য সহযোগী</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:text-lg">
              টাইগার সাপ্লায়ার্স বালু, পাথর ও বিভিন্ন নির্মাণসামগ্রী সরবরাহের
              মাধ্যমে গ্রাহকদের নির্মাণকাজে সহযোগিতা করার লক্ষ্য নিয়ে কাজ করে।
              মানসম্মত পণ্য, নির্ভরযোগ্য সরবরাহ এবং গ্রাহকের আস্থা অর্জনই আমাদের
              অগ্রাধিকার।
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/pages/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-bold transition hover:bg-blue-600"
              >
                <Phone size={18} />
                যোগাযোগ করুন
              </Link>
              <Link
                href="/pages/about"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-bold transition hover:bg-blue-600"
              >
                <BsPeople size={18} />
                আমাদের টিম
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
