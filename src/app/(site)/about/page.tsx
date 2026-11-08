import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Craftsmanship } from "@/components/home/Craftsmanship";
import { EditorialSplit } from "@/components/home/EditorialSplit";

export const metadata = buildMetadata({
  title: "About PRIDE",
  description:
    "The story and principles behind PRIDE: Pakistani menswear built on chosen cloth, an honest cut and hand finishing.",
  path: "/about",
  image: { src: "/images/editorial/about-hero.jpg", alt: "The PRIDE tailoring atelier" },
});

const values = [
  {
    title: "Restraint",
    body: "We design pieces to be worn for years, not seasons. Considered colours and clean lines over passing trends.",
  },
  {
    title: "Integrity",
    body: "We are honest about cloth, construction and fit. What we promise in store is what you take home.",
  },
  {
    title: "Service",
    body: "Our relationship continues after the sale, through alterations, refits and advice whenever you need it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[70svh] min-h-[28rem] overflow-hidden bg-ink text-ivory">
        <Image
          src="/images/editorial/about-hero.jpg"
          alt="Grey-haired tailor working at a cutting table in a bright atelier"
          fill
          preload
          sizes="100vw"
          className="object-cover opacity-75"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/65 to-black/10" />
        <Container className="relative flex h-full items-end pb-14 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold-soft">About PRIDE</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1] font-light tracking-[-0.01em] sm:text-7xl lg:text-8xl">
              Made with patience.
              <br />
              <em>Worn with pride.</em>
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-36">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow text-gold">Our Story</p>
            </Reveal>
            <Reveal className="lg:col-span-8" delay={0.08}>
              <p className="font-serif text-[1.75rem] leading-[1.35] font-light sm:text-4xl sm:leading-[1.3]">
                PRIDE began with a simple idea: that Pakistani men deserve tailoring that is made with the
                same care at every price point, from the first suit for a new job to the sherwani for the
                most important day of their life.
              </p>
              <div className="mt-10 grid gap-8 text-[0.98rem] leading-relaxed text-taupe sm:grid-cols-2">
                <p>
                  Our garments bring together the precision of western tailoring and the heritage of eastern
                  dress. A well-cut prince coat and a clean two-piece share more than it seems: proportion,
                  balance and respect for the cloth.
                </p>
                <p>
                  In our stores, customers are welcomed by people who know the craft, who take the time to
                  understand the occasion, measure properly and make sure every piece leaves fitting as it
                  should.
                </p>
              </div>
              {/* Concept copy: replace with PRIDE's verified history (founding year, founders, cities). */}
            </Reveal>
          </div>
        </Container>
      </section>

      <EditorialSplit
        image={{ src: "/images/editorial/about-detail.jpg", alt: "Unfinished jacket lapel showing hand basting stitches" }}
        eyebrow="The Details"
        title={
          <>
            Quality you can
            <br />
            <em>see up close</em>
          </>
        }
        imageSide="right"
        tone="sand"
      >
        <p>
          A lapel that rolls rather than folds. Buttonholes stitched cleanly. Patterns matched at the seams.
          These details are rarely noticed on their own, yet together they decide whether a garment looks
          ordinary or exceptional.
        </p>
      </EditorialSplit>

      <Craftsmanship />

      <section className="bg-ink py-24 text-ivory lg:py-32">
        <Container>
          <p className="eyebrow text-gold-soft">What We Stand For</p>
          <ul className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-10">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.08} className="border-t border-ivory/15 pt-8">
                <h2 className="font-serif text-3xl font-light">{v.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ivory/65">{v.body}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-16 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/collections" variant="light">Explore collections</ButtonLink>
            <ButtonLink href="/stores" variant="outline-light">Visit a store</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
