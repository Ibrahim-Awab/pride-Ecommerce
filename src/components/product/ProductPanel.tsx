"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus, Ruler, Scissors } from "lucide-react";
import type { Product } from "@/types";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl, productInquiryMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

type ProductPanelProps = {
  product: Product;
  collectionName: string;
  priceLabel: string;
  productUrl: string;
};

export function ProductPanel({ product, collectionName, priceLabel, productUrl }: ProductPanelProps) {
  const [color, setColor] = useState(product.colors[0]?.name);
  const [size, setSize] = useState<string | null>(null);
  const [showSizeHint, setShowSizeHint] = useState(false);

  const whatsappUrl = buildWhatsAppUrl(
    productInquiryMessage({ productName: product.name, color, size: size ?? undefined, url: productUrl }),
  );

  const onEnquire = (e: React.MouseEvent) => {
    if (!size) {
      e.preventDefault();
      setShowSizeHint(true);
      document.getElementById("size-selector")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="flex flex-col">
      <p className="eyebrow text-gold">{collectionName}</p>
      <h1 className="mt-4 font-serif text-[2.2rem] leading-[1.05] font-light sm:text-[2.75rem]">{product.name}</h1>
      <p className="mt-3 text-[0.95rem] text-taupe">{product.tagline}</p>
      <p className="mt-6 text-[0.95rem] tracking-wide">{priceLabel}</p>
      {!product.priceVerified && (
        <p className="mt-1 text-xs text-taupe">Pricing and availability are confirmed by our team on enquiry.</p>
      )}

      <div className="mt-8 border-t border-line pt-8">
        {/* Colour */}
        <fieldset>
          <legend className="eyebrow mb-4 flex w-full justify-between text-ink">
            <span>Colour</span>
            <span className="font-sans font-normal tracking-normal text-taupe normal-case">{color}</span>
          </legend>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((c) => (
              <label key={c.name} className="cursor-pointer" title={c.name}>
                <input
                  type="radio"
                  name="color"
                  value={c.name}
                  checked={color === c.name}
                  onChange={() => setColor(c.name)}
                  className="peer sr-only"
                />
                <span
                  className="block size-9 rounded-full ring-1 ring-ink/15 ring-offset-[3px] ring-offset-ivory transition peer-checked:ring-ink peer-focus-visible:ring-gold"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="sr-only">{c.name}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Size */}
        <fieldset id="size-selector" className="mt-8 scroll-mt-32">
          <legend className="eyebrow mb-4 flex w-full items-center justify-between text-ink">
            <span>Size</span>
            <Link href="/size-guide" className="link-underline inline-flex items-center gap-1.5 font-sans font-medium tracking-[0.12em] text-taupe hover:text-ink">
              <Ruler className="size-3.5" strokeWidth={1.4} /> Size guide
            </Link>
          </legend>
          <div className="grid grid-cols-6 gap-2">
            {product.sizes.map((s) => (
              <label key={s} className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  value={s}
                  checked={size === s}
                  onChange={() => {
                    setSize(s);
                    setShowSizeHint(false);
                  }}
                  className="peer sr-only"
                />
                <span className="flex h-12 items-center justify-center border border-line text-sm transition-colors duration-300 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-ivory peer-focus-visible:border-gold hover:border-ink">
                  {s}
                </span>
              </label>
            ))}
          </div>
          <p
            role="status"
            className={`mt-3 text-xs transition-colors ${showSizeHint ? "text-[#8a3b2e]" : "text-taupe"}`}
          >
            {size ? `Selected size: ${size}` : "Please select a size to enquire."}
          </p>
        </fieldset>

        {/* CTA */}
        <div className="mt-8 space-y-3">
          <a
            href={whatsappUrl}
            onClick={onEnquire}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!size}
            className={`flex min-h-14 w-full items-center justify-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-500 ${
              size ? "bg-ink text-ivory hover:bg-ink-soft" : "bg-ink/85 text-ivory/90"
            }`}
          >
            <WhatsAppIcon className="size-4" /> Enquire on WhatsApp
          </a>
          <Link
            href="/made-to-measure"
            className="flex min-h-14 w-full items-center justify-center gap-3 border border-ink text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-500 hover:bg-ink hover:text-ivory"
          >
            <Scissors className="size-4" strokeWidth={1.4} /> Request made to measure
          </Link>
          <p className="pt-2 text-xs leading-relaxed text-taupe">
            Our team replies personally on WhatsApp to confirm stock, fitting and delivery. Prefer to call?{" "}
            <a href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s/g, "")}`} className="underline underline-offset-2">
              {siteConfig.contact.phoneDisplay}
            </a>
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-10 border-t border-line">
        <Accordion title="Description" defaultOpen>
          <p>{product.description}</p>
        </Accordion>
        <Accordion title="Details & Fit">
          <ul className="list-disc space-y-1.5 pl-4 marker:text-gold">
            {product.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </Accordion>
        <Accordion title="Fabric & Care">
          <ul className="list-disc space-y-1.5 pl-4 marker:text-gold">
            {product.fabricAndCare.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </Accordion>
        <Accordion title="Tailoring & Alterations">
          <p>
            Complimentary basic alterations are available in store. For a garment cut entirely to your
            measurements, book a made-to-measure appointment with our tailors.
          </p>
        </Accordion>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 p-3 backdrop-blur-sm lg:hidden">
        <a
          href={whatsappUrl}
          onClick={onEnquire}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 w-full items-center justify-center gap-3 bg-ink text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ivory"
        >
          <WhatsAppIcon className="size-4" />
          {size ? `Enquire · Size ${size}` : "Select size & enquire"}
        </a>
      </div>
    </div>
  );
}

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = `acc-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  return (
    <div className="border-b border-line">
      <h2>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex min-h-14 w-full items-center justify-between text-left text-[0.72rem] font-semibold uppercase tracking-[0.2em]"
        >
          {title}
          {open ? <Minus className="size-3.5" strokeWidth={1.4} /> : <Plus className="size-3.5" strokeWidth={1.4} />}
        </button>
      </h2>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-[0.92rem] leading-relaxed text-ink/75">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
