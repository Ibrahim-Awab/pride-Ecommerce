import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const craftPillars = [
  {
    title: "Fabric",
    body: "Cloth chosen for drape, breathability and how it wears through a Pakistani summer and winter.",
    image: { src: "/images/craft/fabric.jpg", alt: "Navy and check suiting cloth swatches, close-up" },
  },
  {
    title: "Cut",
    body: "Patterns drafted for clean shoulders, a defined waist and trousers that fall without fuss.",
    image: { src: "/images/craft/cut.jpg", alt: "Tailor's shears cutting dark wool on a cutting table" },
  },
  {
    title: "Finish",
    body: "Hand-finished details, from pick stitching to buttonholes, that reward a closer look.",
    image: { src: "/images/craft/finish.jpg", alt: "Hands guiding a needle and thread through fabric" },
  },
  {
    title: "Fit",
    body: "Every piece can be adjusted in store, and any silhouette can be made to your measurements.",
    image: { src: "/images/craft/fit.jpg", alt: "Tape measure on the lapel of a jacket on a mannequin" },
  },
];

export function Craftsmanship({ headingLevel = "h2" }: { headingLevel?: "h2" | "h3" }) {
  const ItemHeading = headingLevel === "h2" ? "h3" : "h4";
  return (
    <section id="craftsmanship" className="scroll-mt-24 py-24 lg:py-32">
      <Container>
        <SectionHeading
          as={headingLevel}
          eyebrow="Craftsmanship"
          title={
            <>
              Four principles,
              <br className="hidden sm:block" /> one standard
            </>
          }
          description="What separates a good garment from a great one is the work you don't see at first glance. These are the principles behind every PRIDE piece."
          className="mb-14 lg:mb-20"
        />
        <ol className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {craftPillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.08}>
              <div className="relative aspect-4/5 overflow-hidden bg-sand">
                <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw" className="object-cover" />
              </div>
              <div className="mt-6 flex items-baseline gap-4 border-t border-line pt-5">
                <span className="font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <ItemHeading className="font-serif text-2xl">{p.title}</ItemHeading>
                  <p className="mt-2 text-sm leading-relaxed text-taupe">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
