import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        surface: "#141416",
        "surface-2": "#1C1C20",
        "surface-3": "#242428",
        border: {
          DEFAULT: "#242428",
          light: "#2E2E34",
        },
        gold: {
          DEFAULT: "#C8A97E",
          light: "#E2C99A",
          dark: "#A88B62",
          muted: "rgba(200,169,126,0.15)",
        },
        violet: {
          DEFAULT: "#7C5CDB",
          light: "#9B7FEA",
          dark: "#5D40B8",
          muted: "rgba(124,92,219,0.15)",
        },
        trust: {
          DEFAULT: "#2D9E6B",
          muted: "rgba(45,158,107,0.15)",
        },
        ink: {
          DEFAULT: "#F2EDE8",
          muted: "#857E8A",
          dim: "#4A4550",
          faint: "#2A2530",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        gold: "0 0 24px rgba(200,169,126,0.15)",
        "gold-lg": "0 0 48px rgba(200,169,126,0.2)",
        "gold-border": "inset 0 0 0 1px rgba(200,169,126,0.3)",
        surface: "0 4px 24px rgba(0,0,0,0.5)",
        "surface-lg": "0 12px 48px rgba(0,0,0,0.6)",
        card: "0 2px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C8A97E 0%, #E2C99A 50%, #C8A97E 100%)",
        "hero-gradient": "linear-gradient(180deg, rgba(10,10,11,0.2) 0%, rgba(10,10,11,0.6) 50%, #0A0A0B 100%)",
        "card-gradient": "linear-gradient(180deg, transparent 30%, rgba(10,10,11,0.95) 100%)",
        "section-gradient": "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(200,169,126,0.08) 0%, transparent 100%)",
        "violet-gradient": "linear-gradient(135deg, #7C5CDB 0%, #9B7FEA 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};

export default config;
