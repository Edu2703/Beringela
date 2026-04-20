"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Package, Shield, HeadphonesIcon } from "lucide-react";

const guarantees = [
  {
    icon: Package,
    title: "Discrição garantida",
    desc: "Embalagem 100% neutra. Sem nome da marca, sem identificação do conteúdo. O nome que aparece no cartão é discreto. Ninguém precisa saber — a não ser você.",
  },
  {
    icon: Shield,
    title: "Compra completamente segura",
    desc: "Site com certificado SSL, pagamento processado por gateway certificado. Seus dados pessoais e financeiros estão protegidos em todas as etapas.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte sem enrolação",
    desc: "Qualquer problema com seu pedido — entrega, produto, pagamento — entre em contato. A gente resolve com agilidade e sem burocracia.",
  },
];

export function GuaranteeSection() {
  return (
    <section className="section-padding bg-surface border-y border-border">
      <Container>
        <SectionTitle
          eyebrow="Nossas garantias"
          title="Você compra com total tranquilidade."
          subtitle="Cada detalhe foi pensado para que você se sinta seguro do começo ao fim."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guarantees.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col gap-5 p-6 md:p-8 rounded-2xl bg-surface-2 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-gold" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="font-body text-sm text-ink-muted leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
