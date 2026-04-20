import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Berinjela | Suplemento para quem quer mais da vida",
  description:
    "Berinjela é o suplemento natural formulado para vitalidade, disposição e desejo. Formulado com cuidado, entregue com discrição. Compra segura e envio para todo o Brasil.",
  keywords: [
    "berinjela suplemento",
    "suplemento natural",
    "vitalidade",
    "disposição",
    "bem-estar",
    "saúde íntima",
    "suplemento brasileiro",
  ],
  authors: [{ name: "Berinjela" }],
  creator: "Berinjela",
  metadataBase: new URL("https://berinjela.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://berinjela.com.br",
    title: "Berinjela | Suplemento para quem quer mais da vida",
    description:
      "Formulado para vitalidade, disposição e desejo. Entregue com discrição total. Compra segura.",
    siteName: "Berinjela",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berinjela | Suplemento para quem quer mais da vida",
    description: "Formulado para vitalidade, disposição e desejo. Compra segura e discreta.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
