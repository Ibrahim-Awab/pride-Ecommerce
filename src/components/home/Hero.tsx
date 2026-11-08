import { getImageProps } from "next/image";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroCopy } from "./HeroCopy";

const ALT = "Bearded man in a black tailored suit against a dark studio backdrop";

/** Full-viewport campaign with art-directed desktop and mobile crops. */
export function Hero() {
  const common = { alt: ALT, sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, width: 2400, height: 1350, quality: 85, src: "/images/hero/hero-desktop.jpg" });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 1080,
    height: 1620,
    quality: 75,
    src: "/images/hero/hero-mobile.jpg",
    loading: "eager",
  });

  return (
    <section aria-label="Seasonal campaign" className="relative h-svh min-h-[38rem] w-full overflow-hidden bg-ink text-ivory">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        <source srcSet={mobile} />
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt is spread from getImageProps */}
        <img {...rest} fetchPriority="high" className="absolute inset-0 size-full object-cover object-[60%_center]" />
      </picture>
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-black/20 md:bg-linear-to-r md:from-black/55 md:via-black/15 md:to-transparent" />

      <div className="relative mx-auto flex h-full max-w-360 items-end px-5 pb-16 sm:px-8 sm:pb-20 md:items-center md:pb-0 lg:px-12 xl:px-16">
        <HeroCopy>
          <p className="eyebrow text-gold-soft">Autumn / Winter Tailoring</p>
          <h1 className="mt-5 font-serif text-[3.3rem] leading-[0.95] font-light tracking-[-0.015em] sm:text-7xl lg:text-[6.5rem]">
            {siteConfig.tagline.split(" ").slice(0, 1).join(" ")}
            <br />
            <em className="font-light">{siteConfig.tagline.split(" ").slice(1).join(" ")}</em>
          </h1>
          <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-ivory/80">
            Suits, sherwanis and eastern wear, cut with precision and finished by hand for every occasion
            that deserves your best.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/collections/the-suit-edit" variant="light">
              Explore The Suit Edit
            </ButtonLink>
            <ButtonLink href="/stores" variant="outline-light">
              Visit a Store
            </ButtonLink>
          </div>
        </HeroCopy>
      </div>
    </section>
  );
}
