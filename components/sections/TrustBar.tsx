"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Lock, Package, Leaf, RefreshCw, HeadphonesIcon } from "lucide-react";

const trustItems = [
  {
    icon: Package,
    label: "Entrega discreta",
    desc: "Embalagem neutra",
  },
  {
    icon: Lock,
    label: "Pagamento seguro",
    desc: "SSL + gateway certificado",
  },
  {
    icon: Leaf,
    label: "Fórmula natural",
    desc: "Ingredientes selecionados",
  },
  {
    icon: RefreshCw,
    label: "Troca sem complicação",
    desc: "Suporte garantido",
  },
  {
    icon: HeadphonesIcon,
    label: "Atendimento real",
    desc: "Via WhatsApp",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface" aria-label="Diferenciais">
      <Container>
        <div className="py-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-3 py-2"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-ink leading-tight">
                    {item.label}
                  </p>
                  <p className="font-body text-xs text-ink-dim leading-tight">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
