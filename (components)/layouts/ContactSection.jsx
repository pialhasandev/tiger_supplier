import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../common/Container";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-[28px] bg-gradient-to-br from-blue-600 via-blue-800 to-[#101827] p-5 shadow-2xl md:p-8"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-bold tracking-widest text-blue-100">
            আমাদের সাথে কথা বলুন
          </p>

          <h2 className="text-2xl font-extrabold leading-tight md:text-4xl">
            আপনার পরবর্তী নির্মাণ সরবরাহ অর্ডার নিয়ে কথা বলতে প্রস্তুত?
          </h2>

          <p className="mt-3 text-sm leading-6 text-blue-50">
            Balupathor is ready to support your next project with premium
            materials, practical logistics and responsive service.
          </p>
        </div>

        <div className="my-6 grid gap-4 text-sm">
          <a
            href="tel:01712301424"
            className="flex items-center gap-3 hover:text-blue-200"
          >
            <Phone size={17} />
            01712301424
          </a>

          <a
            href="mailto:info@balupathor.com"
            className="flex items-center gap-3 hover:text-blue-200"
          >
            <Mail size={17} />
            info@balupathor.com
          </a>

          <p className="flex items-start gap-3">
            <MapPin size={17} className="mt-0.5 shrink-0" />
            House No 53, Molla Bari (Lift 4), Kawlar Bazar, Airport, Dhaka-1230
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/20">
          <iframe
            title="Balupathor location"
            src="https://maps.google.com/maps?q=Kawlar%20Bazar%2C%20Dhaka%2C%20Bangladesh&t=k&z=15&output=embed"
            className="h-[280px] w-full md:h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
