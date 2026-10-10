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
import { products } from "@/lib/data/products";
import { faqs } from "@/lib/data/faqs";

const siteUrl = "https://sigilosexshop.com.br";

const jsonLd = [
  ...products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Berinjela — ${product.name}`,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    brand: { "@type": "Brand", name: "Berinjela" },
    offers: {
      "@type": "Offer",
      price: product.price.toFixed(2),
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/#comprar`,
    },
  })),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
