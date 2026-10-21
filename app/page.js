import ImageSlider from "@/(components)/common/ImageSlider";
import AboutSection from "@/(components)/layouts/AboutSection";
import ContactSection from "@/(components)/layouts/ContactSection";
import HeroSlider from "@/(components)/layouts/HeroSlider";
import LeadershipSection from "@/(components)/layouts/LeadershipSection";
import ProductShowcase from "@/(components)/layouts/ProductShowcase";
import QuickOrder from "@/(components)/layouts/QuickOrder";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <LeadershipSection />
      <AboutSection />
      <ImageSlider />
      <ContactSection />
      <QuickOrder />
    </>
  );
}

