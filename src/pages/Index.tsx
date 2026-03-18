import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyUsSection from "@/components/WhyUsSection";
import InnovationSection from "@/components/InnovationSection";
import ValuesSection from "@/components/ValuesSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <ProductsSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <WhyUsSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <InnovationSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <ValuesSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <PartnersSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <ContactSection />
      </ScrollReveal>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
