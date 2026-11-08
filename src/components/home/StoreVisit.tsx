import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { stores } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink, ExternalButton } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { generalInquiryUrl } from "@/lib/whatsapp";

export function StoreVisit() {
  const store = stores[0];
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-4/3 overflow-hidden bg-sand">
              <Image src={store.image.src} alt={store.image.alt} fill sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="eyebrow text-gold">Visit Us</p>
            <h2 className="mt-6 font-serif text-[2.4rem] leading-[1.05] font-light sm:text-5xl">
              Experience PRIDE in person
            </h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-taupe">
              Feel the cloth, try the fit and speak with our tailors. Our team will help you find the right
              piece, or make one for you.
            </p>
            <dl className="mt-10 space-y-6 border-t border-line pt-8 text-sm">
              <div className="flex gap-4">
                <dt><MapPin className="mt-0.5 size-4 text-gold" strokeWidth={1.4} /><span className="sr-only">Address</span></dt>
                <dd>
                  <p className="font-semibold">{store.name}</p>
                  <p className="mt-1 text-taupe">{[...store.addressLines, store.city].join(", ")}</p>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt><Clock className="mt-0.5 size-4 text-gold" strokeWidth={1.4} /><span className="sr-only">Opening hours</span></dt>
                <dd className="space-y-1 text-taupe">
                  {store.hours.map((h) => (
                    <p key={h.days}><span className="text-ink">{h.days}</span> · {h.time}</p>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/stores">Store details</ButtonLink>
              <ExternalButton href={generalInquiryUrl()} variant="outline">
                WhatsApp us
              </ExternalButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
