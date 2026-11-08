import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, stores } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { generalInquiryUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ExternalButton } from "@/components/ui/ButtonLink";
import { WhatsAppIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/ui/BrandIcons";

export const metadata = buildMetadata({
  title: "Stores & Contact",
  description: "Visit a PRIDE store, see opening hours and contact our team on WhatsApp, phone or email.",
  path: "/stores",
});

export default function StoresPage() {
  return (
    <>
      <Container className="pt-10 pb-14 sm:pt-14 lg:pb-20">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Stores & Contact" }]} />
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h1 className="font-serif text-5xl leading-[1.02] font-light tracking-[-0.01em] sm:text-6xl lg:col-span-7 xl:text-7xl">
            Stores &amp; Contact
          </h1>
          <p className="max-w-md text-[0.98rem] leading-relaxed text-taupe lg:col-span-5 lg:justify-self-end">
            Visit us to try the fit and meet our tailors, or reach our team directly. We usually reply on
            WhatsApp within the hour during store hours.
          </p>
        </div>
      </Container>

      {stores.map((store) => {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.mapsQuery)}`;
        return (
          <section key={store.name} aria-labelledby={`store-${store.name}`} className="border-t border-line">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-4/3 bg-sand lg:aspect-auto lg:min-h-[36rem]">
                <Image src={store.image.src} alt={store.image.alt} fill preload sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="px-5 py-14 sm:px-12 lg:px-16 lg:py-20 xl:px-24">
                <p className="eyebrow text-gold">{store.city}</p>
                <h2 id={`store-${store.name}`} className="mt-4 font-serif text-4xl font-light sm:text-5xl">
                  {store.name}
                </h2>
                {store.isPlaceholder && (
                  <p className="mt-4 inline-block border border-line px-3 py-1.5 text-[0.7rem] text-taupe">
                    Placeholder address: to be confirmed with PRIDE
                  </p>
                )}
                <dl className="mt-10 space-y-7 text-sm">
                  <div className="flex gap-4">
                    <dt><MapPin className="mt-0.5 size-4 text-gold" strokeWidth={1.4} /><span className="sr-only">Address</span></dt>
                    <dd>
                      <address className="not-italic leading-relaxed">
                        {store.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
                        <span className="block">{store.city}, {siteConfig.country}</span>
                      </address>
                      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="eyebrow link-underline mt-3 inline-block">
                        Get directions
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt><Clock className="mt-0.5 size-4 text-gold" strokeWidth={1.4} /><span className="sr-only">Opening hours</span></dt>
                    <dd className="space-y-1.5">
                      {store.hours.map((h) => (
                        <p key={h.days}><span className="inline-block min-w-40 text-taupe">{h.days}</span> {h.time}</p>
                      ))}
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt><Phone className="mt-0.5 size-4 text-gold" strokeWidth={1.4} /><span className="sr-only">Phone</span></dt>
                    <dd>
                      <a href={`tel:${store.phone.replace(/\s/g, "")}`} className="link-underline">{store.phone}</a>
                    </dd>
                  </div>
                </dl>
                <div className="mt-10">
                  <ExternalButton href={generalInquiryUrl()}>
                    <WhatsAppIcon className="size-4" /> Message the store
                  </ExternalButton>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section id="contact" className="scroll-mt-24 border-t border-line bg-sand/60 py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-gold">Client Care</p>
              <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">Get in touch</h2>
            </div>
            <ul className="grid gap-px bg-line sm:grid-cols-3 lg:col-span-8">
              <li className="bg-ivory p-8">
                <WhatsAppIcon className="size-5 text-gold" />
                <h3 className="mt-5 font-serif text-2xl">WhatsApp</h3>
                <p className="mt-2 text-sm text-taupe">Product enquiries, reservations and appointments.</p>
                <a href={generalInquiryUrl()} target="_blank" rel="noopener noreferrer" className="eyebrow link-underline mt-5 inline-block">
                  Start a chat
                </a>
              </li>
              <li className="bg-ivory p-8">
                <Phone className="size-5 text-gold" strokeWidth={1.4} />
                <h3 className="mt-5 font-serif text-2xl">Phone</h3>
                <p className="mt-2 text-sm text-taupe">Speak with our team during store hours.</p>
                <a href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s/g, "")}`} className="eyebrow link-underline mt-5 inline-block">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="bg-ivory p-8">
                <Mail className="size-5 text-gold" strokeWidth={1.4} />
                <h3 className="mt-5 font-serif text-2xl">Email</h3>
                <p className="mt-2 text-sm text-taupe">Corporate orders, press and general questions.</p>
                <a href={`mailto:${siteConfig.contact.email}`} className="eyebrow link-underline mt-5 inline-block break-all normal-case tracking-normal">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8 text-sm">
            <span className="eyebrow text-taupe">Follow</span>
            {[
              { ...siteConfig.social.instagram, Icon: InstagramIcon, label: "Instagram" },
              { ...siteConfig.social.facebook, Icon: FacebookIcon, label: "Facebook" },
              { ...siteConfig.social.tiktok, Icon: TikTokIcon, label: "TikTok" },
            ].map(({ url, handle, Icon, label }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2.5 hover:text-gold">
                <Icon className="size-4" /> <span className="sr-only">{label}: </span>{handle}
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
