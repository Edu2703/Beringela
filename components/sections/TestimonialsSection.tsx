"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/data/testimonials";
import { Star, BadgeCheck } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} de 5 estrelas`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-gold fill-gold" : "text-border"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="card-base p-6 flex flex-col gap-4 hover:border-gold/20 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
            <span className="font-display text-sm font-bold text-gold">
              {testimonial.initials}
            </span>
          </div>
          <div>
            <p className="font-body text-sm font-semibold text-ink">{testimonial.name}</p>
            <p className="font-body text-xs text-ink-dim">
              Há {testimonial.daysAgo} dias
            </p>
          </div>
        </div>
        {testimonial.verified && (
          <BadgeCheck className="w-4 h-4 text-trust flex-shrink-0" aria-label="Compra verificada" />
        )}
      </div>

      <StarRating rating={testimonial.rating} />

      <p className="font-body text-sm text-ink-muted leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </p>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="section-padding section-radial-glow">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <SectionTitle
            eyebrow="Avaliações"
            title="Quem comprou, voltou."
            align="left"
            className="max-w-md"
          />
          <div className="flex flex-col items-start md:items-end gap-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <p className="font-body text-sm text-ink-muted">
              <span className="font-semibold text-ink">4.9/5</span> — mais de 1.200 avaliações
              verificadas
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
