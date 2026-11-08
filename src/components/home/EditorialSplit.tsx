import Image from "next/image";
import type { ReactNode } from "react";
import type { ImageAsset } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

type EditorialSplitProps = {
  image: ImageAsset;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  cta?: ReactNode;
  imageSide?: "left" | "right";
  tone?: "ivory" | "sand" | "ink";
};

const tones = {
  ivory: "bg-ivory text-ink",
  sand: "bg-sand text-ink",
  ink: "bg-ink text-ivory",
};

/** Half image, half copy. Image bleeds to the viewport edge on desktop. */
export function EditorialSplit({
  image,
  eyebrow,
  title,
  children,
  cta,
  imageSide = "left",
  tone = "sand",
}: EditorialSplitProps) {
  const muted = tone === "ink" ? "text-ivory/70" : "text-taupe";
  return (
    <section className={tones[tone]}>
      <div className="grid lg:grid-cols-2">
        <div className={`relative aspect-4/5 sm:aspect-4/3 lg:aspect-auto lg:min-h-[48rem] ${imageSide === "right" ? "lg:order-2" : ""}`}>
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex items-center px-5 py-20 sm:px-12 sm:py-24 lg:px-16 xl:px-24">
          <Reveal className="max-w-lg">
            <p className={`eyebrow ${tone === "ink" ? "text-gold-soft" : "text-gold"}`}>{eyebrow}</p>
            <h2 className="mt-6 font-serif text-[2.4rem] leading-[1.05] font-light tracking-[-0.01em] sm:text-6xl">{title}</h2>
            <div className={`mt-6 space-y-4 text-[0.98rem] leading-relaxed ${muted}`}>{children}</div>
            {cta && <div className="mt-10">{cta}</div>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
