
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../common/Container";

export default function ContactSection() {
  const email = "labonrashed@gmail.com";
  const phone = "01723290809";

  return (
    <section
      id="contact"
      className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-800 to-[#101827] px-4 py-8 text-white shadow-2xl sm:rounded-[28px] sm:px-6 sm:py-10 md:px-8 lg:py-14"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-blue-200 sm:text-sm">
              আমাদের সাথে কথা বলুন
            </p>

            <h2 className="text-2xl font-extrabold leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
              আপনার পরবর্তী নির্মাণ সরবরাহ অর্ডার নিয়ে কথা বলতে প্রস্তুত?
            </h2>

            <p className="mt-4 text-sm leading-7 text-blue-50 sm:text-base">
              Balupathor is ready to support your next project with premium
              materials, practical logistics and responsive service.
            </p>
          </div>

          {/* Contact Information */}
          <div className="my-7 grid grid-cols-1 gap-3 sm:my-9 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <a
              href={`tel:${phone}`}
              aria-label={`Call ${phone}`}
              className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/15">
                <Phone size={20} />
              </span>

              <span className="min-w-0">
                <span className="block text-xs text-blue-200">
                  Call Us
                </span>
                <span className="mt-1 block break-all text-sm font-semibold sm:text-base">
                  {phone}
                </span>
              </span>
            </a>

            {/* Email */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Send email to ${email} using Gmail`}
              className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/15">
                <Mail size={20} />
              </span>

              <span className="min-w-0">
                <span className="block text-xs text-blue-200">
                  Email Us
                </span>
                <span className="mt-1 block break-all text-sm font-semibold sm:text-base">
                  {email}
                </span>
              </span>
            </a>

            {/* Address */}
            <div className="flex min-w-0 items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-4 sm:col-span-2 lg:col-span-1">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/15">
                <MapPin size={20} />
              </span>

              <span className="min-w-0">
                <span className="block text-xs text-blue-200">
                  Our Address
                </span>
                <span className="mt-1 block text-sm leading-6 font-medium">
                  Rahima plaza(2nd floor),tomaltola,jamalpur sadar,Jamalpur.
                </span>
              </span>
            </div>
          </div>

          {/* Google Maps */}
          <div className="overflow-hidden rounded-xl border border-white/20 sm:rounded-2xl">
            <iframe
              title="Balupathor location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3618.1261942522833!2d89.94507217537304!3d24.927770577885383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU1JzQwLjAiTiA4OcKwNTYnNTEuNSJF!5e0!3m2!1sen!2sbd!4v1792655425222!5m2!1sen!2sbd"
              className="block h-56 w-full sm:h-72 md:h-80 lg:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
