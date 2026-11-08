import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function BrandStatement() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container size="narrow" className="text-center">
        <Reveal>
          <p className="eyebrow text-gold">The House of PRIDE</p>
          <h2 className="mt-8 font-serif text-[1.85rem] leading-[1.3] font-light sm:text-[2.6rem] sm:leading-[1.25]">
            We believe a garment should be made to be worn for years. Chosen cloth, an honest cut and
            finishing that rewards a closer look: menswear that carries itself with{" "}
            <em className="text-gold">quiet confidence</em>.
          </h2>
          <Link href="/about" className="eyebrow link-underline mt-10 inline-block text-ink">
            Discover our story
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
