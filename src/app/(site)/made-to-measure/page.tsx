import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { madeToMeasureInquiryUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { ExternalButton, ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { PageHero } from "@/components/collection/PageHero";
import { mtmSteps } from "@/components/home/MadeToMeasureTeaser";

export const metadata = buildMetadata({
  title: "Made to Measure",
  description:
    "PRIDE made-to-measure tailoring: suits, sherwanis, prince coats and waistcoats cut to your measurements. Book an appointment on WhatsApp.",
  path: "/made-to-measure",
  image: { src: "/images/editorial/made-to-measure.jpg", alt: "PRIDE tailor measuring fabric" },
});

const garments = [
  "Two- and three-piece suits",
  "Sherwanis & prince coats",
  "Waistcoats",
  "Tuxedos & dinner suits",
  "Shalwar kameez & kurtas",
  "Trousers",
];

const faqs = [
  {
    q: "How long does a made-to-measure garment take?",
    a: "Timelines depend on the garment and season. Our team will confirm a delivery date at your consultation. For weddings, we recommend starting early.",
  },
  {
    q: "Do I need to bring anything?",
    a: "Bring the shoes you plan to wear and, if you have one, a garment whose fit you like. It helps us understand your preferences.",
  },
  {
    q: "Can the wedding party be coordinated?",
    a: "Yes. We can coordinate fabrics and colours for the groom, family and groomsmen so the whole party looks considered together.",
  },
];

export default function MadeToMeasurePage() {
  return (
    <>
      <PageHero
        eyebrow="Made to Measure"
        title="Cut for you, and only you"
        description={
          <p>
            A garment made to your measurements, posture and preferences, from the cloth you choose,
            finished by hand by our tailors.
          </p>
        }
        image={{ src: "/images/editorial/made-to-measure.jpg", alt: "Hands marking a paper pattern on cloth with tailor's chalk" }}
      >
        <ExternalButton href={madeToMeasureInquiryUrl()}>
          <WhatsAppIcon className="size-4" /> Book an appointment
        </ExternalButton>
      </PageHero>

      <section className="py-24 lg:py-32">
        <Container>
          <p className="eyebrow text-gold">The Process</p>
          <h2 className="mt-5 max-w-2xl font-serif text-[2.4rem] leading-[1.05] font-light sm:text-5xl">
            Three steps from first conversation to final fitting
          </h2>
          <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {mtmSteps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08} className="border-t border-ink pt-8">
                <span className="font-serif text-5xl font-light text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 font-serif text-3xl">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-taupe">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-sand/60 py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-4/5 overflow-hidden bg-sand">
                <Image src="/images/craft/fit.jpg" alt="Tape measure on the lapel of a jacket on a mannequin" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow text-gold">What We Make</p>
              <h2 className="mt-5 font-serif text-[2.4rem] leading-[1.05] font-light sm:text-5xl">
                From the boardroom to the barat
              </h2>
              <ul className="mt-10 divide-y divide-line border-y border-line">
                {garments.map((g) => (
                  <li key={g} className="flex items-center justify-between py-4 font-serif text-xl">
                    {g}
                    <span aria-hidden="true" className="h-px w-8 bg-gold" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container size="narrow">
          <p className="eyebrow text-center text-gold">Questions</p>
          <h2 className="mt-5 text-center font-serif text-4xl font-light sm:text-5xl">Before your appointment</h2>
          <div className="mt-14 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-2">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="text-2xl font-light text-gold transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="pb-6 text-[0.95rem] leading-relaxed text-taupe">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-14 flex flex-col justify-center gap-3 sm:flex-row">
            <ExternalButton href={madeToMeasureInquiryUrl()}>
              <WhatsAppIcon className="size-4" /> Book on WhatsApp
            </ExternalButton>
            <ButtonLink href="/stores" variant="outline">Find a store</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
