"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Escolha sua embalagem",
    desc: "Selecione entre 1, 3 ou 6 embalagens. Quanto mais você leva, maior a economia — especialmente no PIX.",
  },
  {
    number: "02",
    title: "Finalize com segurança",
    desc: "Pagamento 100% seguro via PIX, cartão de crédito ou boleto. Sem expor dados sensíveis em lugar algum.",
  },
  {
    number: "03",
    title: "Receba com discrição total",
    desc: "Embalagem neutra na caixa, sem identificação do conteúdo. Só você sabe o que está dentro.",
  },
  {
    number: "04",
    title: "Sinta a diferença",
    desc: "Use diariamente. Os primeiros resultados costumam aparecer em 2 a 4 semanas. O resto é com você.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section-padding">
      <Container>
        <SectionTitle
          eyebrow="Como funciona"
          title="Simples assim."
          subtitle="Da compra à entrega, o processo é pensado para ser fácil, seguro e discreto."
          className="mb-16"
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col items-center text-center gap-5"
              >
                {/* Step circle */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-surface-2 border border-border flex items-center justify-center shadow-card">
                    <span className="font-display text-xl font-bold text-gold">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="lg:hidden absolute top-8 left-full w-8 h-px bg-border" />
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
