"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type FAQ } from "@/lib/data/faqs";

interface FAQItemProps {
  faq: FAQ;
  defaultOpen?: boolean;
}

export function FAQItem({ faq, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-300 overflow-hidden",
        isOpen ? "border-gold/30 bg-surface-2" : "border-border bg-surface hover:border-border-light"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "font-body font-medium text-base transition-colors duration-200",
            isOpen ? "text-ink" : "text-ink-muted"
          )}
        >
          {faq.question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 flex-shrink-0 text-ink-dim transition-transform duration-300",
            isOpen && "rotate-180 text-gold"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-6 pb-5">
              <div className="h-px w-full bg-border mb-4" />
              <p className="font-body text-sm md:text-base text-ink-muted leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
