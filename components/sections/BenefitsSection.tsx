"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Flame, Eye, Zap, Heart } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Vitalidade real",
    desc: "Sinta a diferença na energia do dia a dia. Menos cansaço, mais disposição para o que importa — no trabalho, no treino e na vida íntima.",
    color: "gold",
  },
  {
    icon: Flame,
    title: "Desejo renovado",
    desc: "Formulado para quem quer reconectar com o próprio desejo. Sem ansiedade, sem artifício. Apenas o que seu corpo precisa para funcionar melhor.",
    color: "violet",
  },
  {
    icon: Eye,
    title: "Clareza e foco",
    desc: "O equilíbrio hormonal reflete em tudo: humor, concentração, presença. Berinjela não é só sobre o quarto — é sobre estar bem em qualquer lugar.",
    color: "gold",
  },
  {
    icon: Heart,
    title: "Confiança de volta",
    desc: "Quem se sente bem por dentro performa melhor em tudo. Essa é a premissa simples por trás de cada cápsula.",
    color: "trust",
  },
];

const colorMap = {
  gold: {
    bg: "bg-gold/10",
    border: "border-gold/20",
    icon: "text-gold",
    glow: "group-hover:shadow-gold",
  },
  violet: {
    bg: "bg-violet/10",
    border: "border-violet/20",
    icon: "text-violet-light",
    glow: "group-hover:shadow-[0_0_24px_rgba(124,92,219,0.2)]",
  },
  trust: {
    bg: "bg-trust/10",
    border: "border-trust/20",
    icon: "text-trust",
    glow: "group-hover:shadow-[0_0_24px_rgba(45,158,107,0.2)]",
  },
};

export function BenefitsSection() {
  return (
    <section id="produto" className="section-padding section-radial-glow">
      <Container>
        <SectionTitle
          eyebrow="Por que Berinjela?"
          title="Muito além do suplemento comum."
          subtitle="Berinjela foi desenvolvido para quem não aceita mediocridade — nem no trabalho, nem na cama, nem em lugar nenhum."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => {
            const colors = colorMap[benefit.color as keyof typeof colorMap];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`group card-base card-hover p-6 flex flex-col gap-5 ${colors.glow} transition-all duration-300`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                >
                  <benefit.icon className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-display text-lg font-bold text-ink">{benefit.title}</h3>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
