"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "O Produto", href: "#produto" },
  { label: "Resultados", href: "#depoimentos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-bg/90 backdrop-blur-xl border-b border-border shadow-surface"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg"
              aria-label="Berinjela — Página inicial"
            >
              <span className="font-display text-xl md:text-2xl font-bold text-ink group-hover:text-gradient-gold transition-all duration-300">
                Berinjela
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm font-medium text-ink-muted hover:text-ink px-4 py-2 rounded-lg hover:bg-surface-2/60 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden md:block">
              <Button as="a" href="#comprar" size="md" variant="primary">
                Comprar agora
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-ink-muted hover:text-ink hover:bg-surface-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface border-l border-border shadow-surface-lg md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-border">
                <span className="font-display text-lg font-bold text-ink">Berinjela</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-ink-muted hover:text-ink hover:bg-surface-2 transition-all"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-4 flex-1" aria-label="Menu mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-body text-base font-medium text-ink-muted hover:text-ink px-4 py-3.5 rounded-xl hover:bg-surface-2 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="p-4 border-t border-border">
                <Button
                  as="a"
                  href="#comprar"
                  size="lg"
                  variant="primary"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Comprar agora
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
