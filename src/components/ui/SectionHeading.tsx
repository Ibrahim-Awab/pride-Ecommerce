import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start";
  const muted = tone === "light" ? "text-ivory/70" : "text-taupe";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && <p className={`eyebrow ${tone === "light" ? "text-gold-soft" : "text-gold"}`}>{eyebrow}</p>}
      <Heading className="font-serif text-[2.1rem] leading-[1.08] font-light tracking-[-0.01em] sm:text-5xl">
        {title}
      </Heading>
      {description && <p className={`max-w-xl text-[0.95rem] leading-relaxed ${muted}`}>{description}</p>}
    </div>
  );
}
