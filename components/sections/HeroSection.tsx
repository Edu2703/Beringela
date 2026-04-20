"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Lock, Package, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(200,169,126,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(124,92,219,0.07)_0%,transparent_60%)]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,169,126,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,126,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <Container className="relative z-10 pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-gold/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Suplemento natural premium
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-display-xl text-ink text-balance"
          >
            Desperte o que já{" "}
            <span className="text-gradient-gold">estava dormindo.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={0.2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-body text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl text-balance"
          >
            Berinjela é o suplemento formulado para devolver a vitalidade, a disposição e o desejo
            que você deveria ter o tempo todo. Sem enrolação. Com resultado.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center"
          >
            <Button as="a" href="#comprar" size="xl" variant="primary" className="w-full sm:w-auto">
              Quero experimentar
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              as="a"
              href="#produto"
              size="xl"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              Conhecer o produto
            </Button>
          </motion.div>

          {/* Micro trust signals */}
          <motion.div
            custom={0.4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            <div className="flex items-center gap-2 text-ink-muted">
              <Lock className="w-3.5 h-3.5 text-trust" />
              <span className="font-body text-xs">Compra 100% segura</span>
            </div>
            <div className="h-3 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-ink-muted">
              <Package className="w-3.5 h-3.5 text-gold" />
              <span className="font-body text-xs">Entrega discreta</span>
            </div>
            <div className="h-3 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-ink-muted">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                ))}
              </div>
              <span className="font-body text-xs">4.9/5 — mais de 1.200 avaliações</span>
            </div>
          </motion.div>
        </div>

        {/* Hero image area */}
        <motion.div
          custom={0.5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-16 md:mt-20 relative mx-auto max-w-3xl"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[16/7] bg-surface-2 border border-border">
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <span className="font-display text-3xl text-gold">B</span>
                </div>
                <p className="font-body text-sm text-ink-dim">
                  Substitua por imagem do produto
                </p>
              </div>
            </div>
            {/* Overlay gradients */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg to-transparent" />
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-bg to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-bg to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 md:-right-8 bg-surface border border-gold/30 rounded-2xl px-4 py-3 shadow-gold">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-trust animate-pulse" />
              <span className="font-body text-xs font-semibold text-ink">Desconto PIX ativo</span>
            </div>
            <p className="font-display text-lg font-bold text-gold mt-0.5">até R$100 off</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
