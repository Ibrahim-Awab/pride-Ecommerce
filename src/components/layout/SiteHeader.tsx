"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { collections } from "@/data/collections";
import { generalInquiryUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { MobileMenu } from "./MobileMenu";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [announcementOpen, setAnnouncementOpen] = useState(true);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleCloseMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  const transparent = overlay && !scrolled && !megaOpen;
  const tone = transparent ? "text-ivory" : "text-ink";

  return (
    <>
      <div className={`${overlay ? "fixed" : "sticky"} inset-x-0 top-0 z-50`}>
        <AnimatePresence initial={false}>
          {announcementOpen && (
            <motion.div
              key="announcement"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="overflow-hidden bg-ink text-ivory"
            >
              <div className="relative flex min-h-9 items-center justify-center px-12 py-2 text-center text-[0.68rem] tracking-[0.14em] uppercase">
                <a href={generalInquiryUrl()} target="_blank" rel="noopener noreferrer" className="link-underline">
                  {siteConfig.announcement}
                </a>
                <button
                  type="button"
                  onClick={() => setAnnouncementOpen(false)}
                  className="absolute right-2 grid size-9 place-items-center text-ivory/70 hover:text-ivory"
                  aria-label="Dismiss announcement"
                >
                  <X className="size-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <header
          className={`relative transition-colors duration-500 ease-luxe ${tone} ${
            transparent ? "bg-transparent" : "border-b border-line bg-ivory"
          }`}
          onMouseLeave={scheduleCloseMega}
        >
          {/* Subtle top-down shade keeps white text legible over bright photography */}
          {transparent && (
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-black/35 to-transparent" />
          )}

          <div className="mx-auto grid h-18 max-w-360 grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:h-20 lg:px-12 xl:px-16">
            {/* Left */}
            <nav aria-label="Primary" className="flex items-center">
              <button
                type="button"
                className="-ml-2 grid size-11 place-items-center lg:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="size-5" strokeWidth={1.4} />
              </button>
              <ul className="hidden items-center gap-9 text-[0.7rem] font-semibold uppercase tracking-[0.2em] lg:flex">
                <li onMouseEnter={openMega}>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 py-3 uppercase tracking-[0.2em]"
                    aria-expanded={megaOpen}
                    aria-controls="mega-menu"
                    onClick={() => setMegaOpen((v) => !v)}
                  >
                    Collections
                    <ChevronDown
                      className={`size-3 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                      strokeWidth={1.6}
                    />
                  </button>
                </li>
                <li onMouseEnter={scheduleCloseMega}>
                  <Link href="/made-to-measure" className="link-underline py-3">
                    Made to Measure
                  </Link>
                </li>
                <li onMouseEnter={scheduleCloseMega}>
                  <Link href="/about" className="link-underline py-3">
                    About
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Centre */}
            <Link href="/" aria-label={`${siteConfig.name} home`} onClick={() => setMegaOpen(false)}>
              <Logo />
            </Link>

            {/* Right */}
            <div className="flex items-center justify-end gap-7 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
              <Link href="/stores" className="link-underline hidden py-3 lg:inline" onMouseEnter={scheduleCloseMega}>
                Stores
              </Link>
              <a
                href={generalInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="-mr-2 flex min-h-11 items-center gap-2 px-2 lg:mr-0 lg:px-0"
                aria-label="Chat with PRIDE on WhatsApp"
              >
                <WhatsAppIcon className="size-[1.1rem]" />
                <span className="hidden xl:inline">Enquire</span>
              </a>
            </div>
          </div>

          {/* Mega menu */}
          <AnimatePresence>
            {megaOpen && (
              <motion.div
                id="mega-menu"
                key="mega"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: EASE }}
                onMouseEnter={openMega}
                className="absolute inset-x-0 top-full hidden border-b border-line bg-ivory text-ink shadow-[0_24px_40px_-24px_rgba(27,26,24,0.25)] lg:block"
              >
                <div className="mx-auto grid max-w-360 grid-cols-12 gap-10 px-12 py-12 xl:px-16">
                  <div className="col-span-4">
                    <p className="eyebrow mb-6 text-gold">Collections</p>
                    <ul className="space-y-3.5">
                      {collections.map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/collections/${c.slug}`}
                            onClick={() => setMegaOpen(false)}
                            className="group flex items-baseline justify-between gap-6 border-b border-transparent font-serif text-2xl font-light hover:border-line"
                          >
                            <span>{c.name}</span>
                            <span className="font-sans text-[0.7rem] tracking-wide text-taupe opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              {c.tagline}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/collections"
                      onClick={() => setMegaOpen(false)}
                      className="eyebrow mt-8 inline-flex items-center gap-2 text-ink"
                    >
                      View all collections <ArrowRight className="size-3.5" strokeWidth={1.5} />
                    </Link>
                  </div>
                  <div className="col-span-8 grid grid-cols-3 gap-5">
                    {collections.slice(0, 3).map((c) => (
                      <Link
                        key={c.slug}
                        href={`/collections/${c.slug}`}
                        onClick={() => setMegaOpen(false)}
                        className="group block"
                      >
                        <div className="relative aspect-4/5 overflow-hidden bg-sand">
                          <Image
                            src={c.image.src}
                            alt={c.image.alt}
                            fill
                            sizes="(min-width: 1440px) 300px, 20vw"
                            className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-[1.04]"
                          />
                        </div>
                        <p className="mt-3 font-serif text-lg">{c.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
