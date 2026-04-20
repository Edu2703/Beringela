export interface Product {
  id: string;
  name: string;
  capsules: number;
  packages: number;
  tagline: string;
  description: string;
  price: number;
  pixPrice: number;
  pixDiscount: number;
  pricePerCapsule: number;
  pixPricePerCapsule: number;
  badge?: string;
  badgeVariant?: "gold" | "trust" | "violet";
  featured?: boolean;
  benefits: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: "1-embalagem",
    name: "1 Embalagem",
    packages: 1,
    capsules: 30,
    tagline: "Para começar a diferença",
    description: "Ideal para quem quer experimentar e sentir os primeiros resultados.",
    price: 199.9,
    pixPrice: 149.9,
    pixDiscount: 50,
    pricePerCapsule: 6.66,
    pixPricePerCapsule: 4.99,
    benefits: ["30 cápsulas", "1 mês de uso", "Entrega discreta", "Resultado progressivo"],
    image: "/images/produto-1.jpg",
  },
  {
    id: "3-embalagens",
    name: "3 Embalagens",
    packages: 3,
    capsules: 90,
    tagline: "Para quem leva a sério",
    description: "O favorito de quem já conhece os resultados e quer manter a consistência.",
    price: 499.9,
    pixPrice: 449.9,
    pixDiscount: 50,
    pricePerCapsule: 5.55,
    pixPricePerCapsule: 4.99,
    badge: "Mais popular",
    badgeVariant: "gold",
    featured: true,
    benefits: ["90 cápsulas", "3 meses de uso", "Entrega discreta", "Resultados consistentes"],
    image: "/images/produto-3.jpg",
  },
  {
    id: "6-embalagens",
    name: "6 Embalagens",
    packages: 6,
    capsules: 180,
    tagline: "O melhor custo por cápsula",
    description: "Para quem quer o máximo de economia e não abre mão da continuidade.",
    price: 899.9,
    pixPrice: 799.9,
    pixDiscount: 100,
    pricePerCapsule: 4.99,
    pixPricePerCapsule: 4.44,
    badge: "Melhor custo-benefício",
    badgeVariant: "trust",
    benefits: ["180 cápsulas", "6 meses de uso", "Entrega discreta", "Maior economia"],
    image: "/images/produto-6.jpg",
  },
];
