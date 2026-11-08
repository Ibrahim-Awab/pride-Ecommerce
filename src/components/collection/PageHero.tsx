import Image from "next/image";
import type { ReactNode } from "react";
import type { ImageAsset } from "@/types";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  image: ImageAsset;
  /** Extra content under the description (e.g. CTA). */
  children?: ReactNode;
};

/** Editorial page header: copy on ivory beside a tall image (stacked on mobile). */
export function PageHero({ eyebrow, title, description, image, children }: PageHeroProps) {
  return (
    <section className="border-b border-line">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-4/3 bg-sand sm:aspect-16/10 lg:order-2 lg:aspect-auto lg:min-h-[34rem]">
          <Image src={image.src} alt={image.alt} fill preload sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex items-end px-5 py-12 sm:px-8 sm:py-16 lg:order-1 lg:items-center lg:py-20 lg:pr-16 lg:pl-12 xl:pr-24 xl:pl-16 2xl:pl-[max(4rem,calc((100vw-1440px)/2+4rem))]">
          <div className="max-w-xl">
            <p className="eyebrow text-gold">{eyebrow}</p>
            <h1 className="mt-5 font-serif text-[2.6rem] leading-[1.02] font-light tracking-[-0.01em] sm:text-6xl xl:text-7xl">
              {title}
            </h1>
            {description && <div className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-taupe">{description}</div>}
            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
