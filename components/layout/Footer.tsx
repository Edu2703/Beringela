import { Container } from "@/components/ui/Container";
import { Shield, Lock, Instagram } from "lucide-react";

const footerLinks = {
  produto: [
    { label: "1 Embalagem", href: "#comprar" },
    { label: "3 Embalagens", href: "#comprar" },
    { label: "6 Embalagens", href: "#comprar" },
    { label: "Como usar", href: "#como-funciona" },
  ],
  empresa: [
    { label: "Sobre nós", href: "#" },
    { label: "Resultados", href: "#depoimentos" },
    { label: "Perguntas frequentes", href: "#faq" },
  ],
  suporte: [
    { label: "Contato", href: "mailto:contato@berinjela.com.br" },
    { label: "WhatsApp", href: "https://wa.me/5541988739688" },
    { label: "Prazo de entrega", href: "#faq" },
    { label: "Trocas e devoluções", href: "#faq" },
  ],
  legal: [
    { label: "Política de privacidade", href: "#" },
    { label: "Termos de uso", href: "#" },
    { label: "Política de entrega", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border" role="contentinfo">
      <Container>
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <span className="font-display text-2xl font-bold text-ink">Berinjela</span>
            </div>
            <p className="font-body text-sm text-ink-muted leading-relaxed max-w-xs">
              Para quem quer mais — com inteligência, com vitalidade, com estilo. Um suplemento
              feito para quem leva o prazer da vida a sério.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram da Berinjela"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-2 border border-border text-ink-muted hover:text-ink hover:border-gold/40 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="TikTok da Berinjela"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-2 border border-border text-ink-muted hover:text-ink hover:border-gold/40 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5541988739688"
                aria-label="WhatsApp da Berinjela"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-2 border border-border text-ink-muted hover:text-ink hover:border-gold/40 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.302-1.505A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.804 9.804 0 01-5.032-1.384l-.36-.214-3.738.892.942-3.628-.235-.373A9.79 9.79 0 012.182 12C2.182 6.587 6.587 2.182 12 2.182c5.414 0 9.818 4.405 9.818 9.818 0 5.414-4.404 9.818-9.818 9.818z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-ink-dim">
              Produto
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.produto.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-ink-dim">
              Empresa
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.empresa.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-ink-dim">
              Suporte
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.suporte.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-ink-dim">
            © {new Date().getFullYear()} Berinjela. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            {footerLinks.legal.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-xs text-ink-dim hover:text-ink-muted transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-ink-dim">
              <Lock className="w-3.5 h-3.5" />
              <span className="font-body text-xs">SSL Seguro</span>
            </div>
            <div className="flex items-center gap-1.5 text-ink-dim">
              <Shield className="w-3.5 h-3.5" />
              <span className="font-body text-xs">Compra protegida</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
