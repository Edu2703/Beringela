import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQItem } from "@/components/ui/FAQItem";
import { faqs } from "@/lib/data/faqs";

export function FAQSection() {
  return (
    <section id="faq" className="section-padding">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            eyebrow="Dúvidas frequentes"
            title="Ficou com alguma dúvida?"
            subtitle="Respondemos as perguntas mais comuns para que você compre com confiança total."
            className="mb-12"
          />

          <div className="flex flex-col gap-3" role="list" aria-label="Perguntas frequentes">
            {faqs.map((faq, i) => (
              <div key={faq.id} role="listitem">
                <FAQItem faq={faq} defaultOpen={i === 0} />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="font-body text-sm text-ink-muted">
              Não encontrou o que precisava?{" "}
              <a
                href="#"
                className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors duration-200"
              >
                Fale com a gente pelo WhatsApp
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
