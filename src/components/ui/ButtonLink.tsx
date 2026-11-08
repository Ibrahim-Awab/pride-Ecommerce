import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "solid" | "outline" | "light" | "outline-light";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-ivory hover:bg-ink-soft border border-ink",
  outline: "border border-ink text-ink hover:bg-ink hover:text-ivory",
  light: "bg-ivory text-ink border border-ivory hover:bg-transparent hover:text-ivory",
  "outline-light": "border border-ivory/70 text-ivory hover:bg-ivory hover:text-ink",
};

export const buttonClasses = (variant: Variant = "solid", extra = "") =>
  `inline-flex min-h-12 items-center justify-center gap-3 px-7 text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-500 ease-luxe ${variants[variant]} ${extra}`;

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
};

export function ButtonLink({ variant = "solid", className = "", ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses(variant, className)} {...props} />;
}

type ExternalButtonProps = ComponentPropsWithoutRef<"a"> & { variant?: Variant };

/** For external links such as WhatsApp. Always opens in a new tab. */
export function ExternalButton({ variant = "solid", className = "", ...props }: ExternalButtonProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses(variant, className)}
      {...props}
    />
  );
}
