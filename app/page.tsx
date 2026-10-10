import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <BenefitsSection />
        <ProductsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
