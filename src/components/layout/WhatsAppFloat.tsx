import { generalInquiryUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

/** Discreet floating contact button. Hidden on small screens where the product page has its own sticky CTA. */
export function WhatsAppFloat() {
  return (
    <a
      href={generalInquiryUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PRIDE on WhatsApp"
      className="fixed right-6 bottom-6 z-40 hidden size-14 place-items-center rounded-full bg-ink text-ivory shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-luxe hover:-translate-y-0.5 md:grid"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}
