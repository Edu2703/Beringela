import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/data/products";
import { Zap } from "lucide-react";

export function ProductsSection() {
  return (
    <section id="comprar" className="section-padding bg-surface border-y border-border">
      <Container>
        <SectionTitle
          eyebrow="Escolha sua embalagem"
          title="Quanto mais você investe, mais economiza."
          subtitle="Selecione a opção que melhor se encaixa no seu momento. E lembre: pagar no PIX garante desconto direto no preço."
          className="mb-6"
        />

        {/* PIX highlight bar */}
        <div className="mx-auto max-w-xl mb-12">
          <div className="flex items-center justify-center gap-3 rounded-2xl bg-trust/10 border border-trust/25 px-6 py-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-trust/20 flex-shrink-0">
              <Zap className="w-4 h-4 text-trust fill-trust" />
            </div>
            <p className="font-body text-sm text-ink-muted">
              <span className="font-semibold text-ink">Desconto exclusivo no PIX:</span> até{" "}
              <span className="text-trust font-semibold">R$100,00 off</span> aplicado automaticamente
              ao finalizar com PIX.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <p className="text-center font-body text-xs text-ink-dim mt-8">
          Entrega discreta para todo o Brasil · Pagamento seguro via PIX, cartão ou boleto
        </p>
      </Container>
    </section>
  );
}
