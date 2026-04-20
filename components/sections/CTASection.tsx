"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(200,169,126,0.08)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8"
        >
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-display-lg text-ink text-balance">
              Pronto para sentir{" "}
              <span className="text-gradient-gold">a diferença?</span>
            </h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed text-balance">
              Escolha sua embalagem, pague com PIX e garanta seu desconto. Entrega discreta,
              resultado real.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
            <Button as="a" href="#comprar" size="xl" variant="primary" className="w-full sm:w-auto">
              Escolher minha embalagem
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button as="a" href="#faq" size="xl" variant="ghost" className="w-full sm:w-auto">
              Ainda tenho dúvidas
            </Button>
          </div>

          <p className="font-body text-xs text-ink-dim">
            Compra 100% segura · Entrega discreta · Suporte real disponível
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
