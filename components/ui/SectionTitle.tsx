import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-display-lg text-ink text-balance",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "font-body text-base md:text-lg text-ink-muted leading-relaxed text-balance",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
