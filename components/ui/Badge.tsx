import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "trust" | "violet" | "surface" | "outline-gold";
  size?: "sm" | "md";
  className?: string;
}

const variantClasses = {
  gold: "bg-gold/15 text-gold-light border border-gold/30",
  trust: "bg-trust/15 text-trust border border-trust/30",
  violet: "bg-violet/15 text-violet-light border border-violet/30",
  surface: "bg-surface-2 text-ink-muted border border-border",
  "outline-gold": "bg-transparent text-gold border border-gold/50",
};

const sizeClasses = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-xs",
};

export function Badge({ children, variant = "gold", size = "md", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-body font-medium tracking-wide uppercase",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
