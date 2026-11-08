"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus, X } from "lucide-react";
import { siteConfig, stores } from "@/config/site";
import { collections } from "@/data/collections";
import { generalInquiryUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [collectionsOpen, setCollectionsOpen] = useState(true);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const linkClass = "block py-3 font-serif text-[1.85rem] font-light leading-tight";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-60 flex flex-col bg-ivory text-ink lg:hidden"
        >
          <div className="flex h-18 shrink-0 items-center justify-between border-b border-line px-5 sm:px-8">
            <button type="button" onClick={onClose} className="-ml-2 grid size-11 place-items-center" aria-label="Close menu">
              <X className="size-5" strokeWidth={1.4} />
            </button>
            <Link href="/" onClick={onClose} aria-label={`${siteConfig.name} home`}>
              <Logo />
            </Link>
            <span className="size-11" aria-hidden="true" />
          </div>

          <motion.nav
            aria-label="Mobile"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
            className="flex-1 overflow-y-auto px-5 pt-6 pb-10 sm:px-8"
          >
            <ul className="divide-y divide-line border-b border-line">
              <li>
                <button
                  type="button"
                  onClick={() => setCollectionsOpen((v) => !v)}
                  className={`${linkClass} flex w-full items-center justify-between text-left`}
                  aria-expanded={collectionsOpen}
                >
                  Collections
                  {collectionsOpen ? (
                    <Minus className="size-4" strokeWidth={1.4} />
                  ) : (
                    <Plus className="size-4" strokeWidth={1.4} />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {collectionsOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      {collections.map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/collections/${c.slug}`}
                            onClick={onClose}
                            className="flex min-h-11 items-center pl-1 text-[0.95rem] text-ink/80"
                          >
                            {c.name}
                          </Link>
                        </li>
                      ))}
                      <li className="pb-3">
                        <Link href="/collections" onClick={onClose} className="eyebrow flex min-h-11 items-center pl-1 text-gold">
                          View all
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              {[
                { label: "Made to Measure", href: "/made-to-measure" },
                { label: "About PRIDE", href: "/about" },
                { label: "Stores", href: "/stores" },
                { label: "Size Guide", href: "/size-guide" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={onClose} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-6 text-sm">
              <a
                href={generalInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center gap-3 bg-ink text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ivory"
              >
                <WhatsAppIcon className="size-4" /> Enquire on WhatsApp
              </a>
              <div className="text-taupe">
                <p className="eyebrow mb-2 text-ink">{stores[0].name}</p>
                <p>{[...stores[0].addressLines, stores[0].city].join(", ")}</p>
              </div>
              <div className="flex gap-2 text-ink">
                <a href={siteConfig.social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-11 place-items-center">
                  <InstagramIcon />
                </a>
                <a href={siteConfig.social.facebook.url} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid size-11 place-items-center">
                  <FacebookIcon />
                </a>
                <a href={siteConfig.social.tiktok.url} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="grid size-11 place-items-center">
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
