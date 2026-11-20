# CLAUDE.md — Berinjela

Landing page de vendas do **Berinjela**, suplemento natural (vitalidade, disposição e desejo). Uma página só, sem backend: a venda é fechada pelo WhatsApp.

> O repositório se chama "Beringela", mas a marca no site é **Berinjela** (com J). Use sempre "Berinjela" nos textos.

## Sobre o dono
- O Edú entende muito de lógica, mas não programa. Explique em português simples, sem jargão.
- Quando alterar um arquivo, mostre o **arquivo inteiro** corrigido, e não só o trecho.
- Mude só o que foi pedido. Se notar outro problema, avise em vez de mexer.

## Tecnologia
- Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 3, framer-motion, ícones lucide-react.
- Site **estático**: `next.config.mjs` usa `output: "export"`, que gera a pasta `out/`. Hospedado na **Vercel** (`vercel.json` aponta para `out`).
- Por ser estático, **não dá** para usar API routes, server actions, middleware nem otimização de imagem do Next (`images.unoptimized: true`).

## Comandos
- `npm install`: instala as dependências. O `npm ci` falha porque o `package-lock.json` está fora de sincronia. Não faça commit do lockfile alterado sem o Edú pedir.
- `npm run dev`: servidor local.
- `npm run build`: gera o site estático. Rode antes de dar a tarefa por encerrada.
- `npm run lint`: ESLint (config `next/core-web-vitals`).
- Não há testes automatizados.

## Onde fica cada coisa
- `app/page.tsx`: monta a página, com as seções nesta ordem: Header → Hero → TrustBar → Benefits → Products → HowItWorks → Testimonials → Guarantee → FAQ → CTA → Footer.
- `app/layout.tsx`: fontes (Playfair Display e Inter), SEO/metadados e domínio `berinjela.com.br`.
- `components/sections/`: uma seção por arquivo.
- `components/layout/`: Header e Footer.
- `components/ui/`: peças reutilizáveis (Button, Badge, ProductCard, FAQItem, SectionTitle, Container).
- `lib/data/`: **o conteúdo editável**. Preços e kits ficam em `products.ts`, as perguntas em `faqs.ts` e os depoimentos em `testimonials.ts`. Para mudar textos, preços ou perguntas, mexa aqui e não nos componentes.
- `lib/utils.ts`: `cn()`, que junta classes do Tailwind, e `formatCurrency()`, que formata em R$.
- `public/images/`: imagens dos produtos (`produto-1/3/6.svg`, que ainda são placeholders).

## Regras do projeto
- Import com o atalho `@/` (por exemplo `@/components/ui/Button`).
- Componentes com animação ou interação começam com `"use client"`.
- Use as cores do tema em `tailwind.config.ts` (`bg`, `surface`, `gold`, `violet`, `trust`, `ink`...) em vez de cores soltas. Visual: escuro, premium, com destaque dourado.
- Fontes: `font-display` (títulos) e `font-body` (texto).
- Textos em português do Brasil, com tom discreto e elegante.
- WhatsApp de vendas: `https://wa.me/5541988739688` (aparece no `Footer.tsx`). Se mudar o número, procure em todos os arquivos.
- Preços: cada kit em `products.ts` tem preço cheio, preço no Pix e preço por cápsula. Ao mudar um preço, recalcule os campos ligados a ele.

## Cuidados
- Suplemento não pode prometer cura nem tratamento de doença (regra da Anvisa). Evite textos como "cura" ou "trata disfunção".
- `next@14.2.5` tem aviso de falha de segurança conhecida. Atualizar é uma decisão a confirmar com o Edú antes.
