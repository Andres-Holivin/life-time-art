import Navigation from "@/components/sections/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import StatsSection from "@/components/sections/StatsSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import PortfolioSection from "@/components/sections/PortfolioSection";

export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Services Overview Section */}
      <div id="services">
        <ServicesOverview />
      </div>

      {/* Statistics Section */}
      <StatsSection />

      {/* What We Do Section */}
      <div id="what-we-do">
        <WhatWeDoSection />
      </div>

      {/* Portfolio Section */}
      <div id="portfolio">
        <PortfolioSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
