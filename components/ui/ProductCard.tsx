"use client";

import { cn, formatCurrency } from "@/lib/utils";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { type Product } from "@/lib/data/products";
import { Check, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "relative flex flex-col rounded-2xl border transition-all duration-300",
        product.featured
          ? "bg-surface-2 border-gold/40 shadow-gold-lg scale-[1.02]"
          : "bg-surface border-border hover:border-gold/25 hover:shadow-gold"
      )}
    >
      {product.featured && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2">
          <div className="h-[2px] w-32 rounded-full bg-gold-gradient" />
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col gap-6 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-bold text-ink">{product.name}</h3>
            <p className="font-body text-sm text-ink-muted mt-1">{product.tagline}</p>
          </div>
          {product.badge && (
            <Badge variant={product.badgeVariant ?? "gold"} size="sm">
              {product.badge}
            </Badge>
          )}
        </div>

        {/* Capsule count */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 border border-gold/20">
            <span className="font-display text-sm font-bold text-gold">{product.capsules}</span>
          </div>
          <div>
            <p className="font-body text-sm font-semibold text-ink">{product.capsules} cápsulas</p>
            <p className="font-body text-xs text-ink-muted">
              {product.packages} {product.packages === 1 ? "embalagem" : "embalagens"}
            </p>
          </div>
        </div>

        {/* Benefits */}
        <ul className="flex flex-col gap-2.5">
          {product.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2.5">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-trust/20 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-trust" strokeWidth={3} />
              </div>
              <span className="font-body text-sm text-ink-muted">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="pt-2 border-t border-border">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-body text-sm text-ink-dim line-through">
              {formatCurrency(product.price)}
            </span>
            <span className="font-body text-xs text-ink-dim">no cartão</span>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <span className="font-display text-3xl font-bold text-ink">
                {formatCurrency(product.pixPrice)}
              </span>
              <span className="font-body text-sm text-ink-muted ml-1">no PIX</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-trust/15 border border-trust/30 px-2.5 py-1">
              <Zap className="w-3 h-3 text-trust fill-trust" />
              <span className="font-body text-xs font-semibold text-trust">
                -{formatCurrency(product.pixDiscount)}
              </span>
            </div>
          </div>

          <p className="font-body text-xs text-ink-dim mt-1.5">
            {formatCurrency(product.pixPricePerCapsule)}/cápsula no PIX
          </p>
        </div>

        {/* CTA */}
        <Button
          variant={product.featured ? "primary" : "outline"}
          size="lg"
          className="w-full mt-auto"
          as="a"
          href="#comprar"
        >
          {product.featured ? "Quero esse agora" : "Escolher este"}
        </Button>
      </div>
    </motion.div>
  );
}
