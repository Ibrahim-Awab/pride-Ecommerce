import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink, ExternalButton } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { madeToMeasureInquiryUrl } from "@/lib/whatsapp";

export const mtmSteps = [
  { title: "Consult", body: "Discuss the occasion, silhouette and cloth with our tailor, in store or on WhatsApp." },
  { title: "Measure", body: "A precise set of measurements and posture notes forms your personal pattern." },
  { title: "Fit & Finish", body: "A fitting to refine the details, then hand finishing before collection." },
];

export function MadeToMeasureTeaser() {
  return (
    <section className="bg-ink text-ivory">
      <Container className="py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/editorial/made-to-measure.jpg"
                alt="Hands marking a paper pattern on cloth with tailor's chalk"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <p className="eyebrow text-gold-soft">Made to Measure</p>
              <h2 className="mt-6 font-serif text-[2.4rem] leading-[1.05] font-light sm:text-6xl">
                Cut for you,
                <br />
                <em>and only you.</em>
              </h2>
              <p className="mt-6 max-w-lg text-[0.98rem] leading-relaxed text-ivory/70">
                From a wedding sherwani to an everyday two-piece, our tailors make garments to your
                measurements, posture and preferences.
              </p>
            </Reveal>
            <ol className="mt-12 grid gap-8 border-t border-ivory/15 pt-10 sm:grid-cols-3">
              {mtmSteps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 0.08}>
                  <span className="font-serif text-gold-soft">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/60">{s.body}</p>
                </Reveal>
              ))}
            </ol>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <ExternalButton href={madeToMeasureInquiryUrl()} variant="light">
                <WhatsAppIcon className="size-4" /> Book an appointment
              </ExternalButton>
              <ButtonLink href="/made-to-measure" variant="outline-light">
                How it works
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
