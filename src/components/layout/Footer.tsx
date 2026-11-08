import Link from "next/link";
import { footerNav, siteConfig, stores } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/ui/BrandIcons";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const store = stores[0];
  return (
    <footer className="bg-ink text-ivory">
      <Container className="pt-20 pb-10 lg:pt-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Logo className="items-start!" />
            <p className="mt-8 max-w-sm font-serif text-2xl leading-snug font-light text-ivory/90">
              Tailoring made with patience, worn with pride.
            </p>
            <div className="mt-10 max-w-md">
              <p className="eyebrow mb-4 text-gold-soft">The PRIDE Letter</p>
              <p className="mb-5 text-sm text-ivory/60">
                New collections, tailoring notes and private appointments, sent a few times a season.
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerNav.map((group) => (
              <div key={group.title}>
                <p className="eyebrow mb-6 text-gold-soft">{group.title}</p>
                <ul className="space-y-3.5 text-sm text-ivory/75">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="link-underline hover:text-ivory">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 sm:col-span-3">
              <div className="grid gap-8 border-t border-ivory/15 pt-10 sm:grid-cols-2">
                <div className="text-sm text-ivory/75">
                  <p className="eyebrow mb-4 text-gold-soft">Visit</p>
                  <address className="not-italic leading-relaxed">
                    {store.addressLines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                    <span className="block">{store.city}, {siteConfig.country}</span>
                  </address>
                </div>
                <div className="text-sm text-ivory/75">
                  <p className="eyebrow mb-4 text-gold-soft">Contact</p>
                  <p>
                    <a href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s/g, "")}`} className="link-underline hover:text-ivory">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </p>
                  <p className="mt-1">
                    <a href={`mailto:${siteConfig.contact.email}`} className="link-underline break-all hover:text-ivory">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                  <div className="mt-4 -ml-3 flex">
                    {[
                      { href: siteConfig.social.instagram.url, label: "Instagram", Icon: InstagramIcon },
                      { href: siteConfig.social.facebook.url, label: "Facebook", Icon: FacebookIcon },
                      { href: siteConfig.social.tiktok.url, label: "TikTok", Icon: TikTokIcon },
                    ].map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`PRIDE on ${label}`}
                        className="grid size-11 place-items-center text-ivory/75 transition-colors hover:text-ivory"
                      >
                        <Icon className="size-[1.1rem]" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-ivory/15 pt-8 text-xs text-ivory/45 lg:flex-row lg:items-start lg:justify-between">
          <p>© {siteConfig.legalName}. All rights reserved.</p>
          <p className="max-w-xl lg:text-right">{siteConfig.conceptNotice}</p>
        </div>
      </Container>
    </footer>
  );
}
