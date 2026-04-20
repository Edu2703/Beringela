import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  as?: "button" | "a";
  href?: string;
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  xl: "px-10 py-5 text-lg",
};

const variantClasses = {
  primary:
    "bg-gold text-bg font-semibold hover:bg-gold-light active:scale-[0.98] shadow-gold hover:shadow-gold-lg",
  secondary:
    "bg-surface-2 text-ink font-medium border border-border hover:border-gold/40 hover:text-gold",
  ghost:
    "bg-transparent text-ink-muted font-medium hover:text-ink hover:bg-surface-2/60",
  outline:
    "bg-transparent text-gold font-semibold border border-gold/50 hover:bg-gold/10 hover:border-gold",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", size = "md", className, as, href, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-xl font-body transition-all duration-200 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none",
      sizeClasses[size],
      variantClasses[variant],
      className
    );

    if (as === "a" || href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
