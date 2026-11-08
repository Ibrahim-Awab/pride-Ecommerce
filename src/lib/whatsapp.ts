import { siteConfig } from "@/config/site";

/** Builds a wa.me link with a pre-filled message, using the configured brand number. */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function productInquiryMessage(opts: {
  productName: string;
  size?: string;
  color?: string;
  url: string;
}): string {
  const lines = [
    `Assalam-o-Alaikum PRIDE, I'd like to enquire about:`,
    ``,
    `• ${opts.productName}`,
  ];
  if (opts.color) lines.push(`• Colour: ${opts.color}`);
  if (opts.size) lines.push(`• Size: ${opts.size}`);
  lines.push(``, opts.url);
  return lines.join("\n");
}

export const generalInquiryUrl = () =>
  buildWhatsAppUrl("Assalam-o-Alaikum PRIDE, I'd like to know more about your collections.");

export const madeToMeasureInquiryUrl = () =>
  buildWhatsAppUrl(
    "Assalam-o-Alaikum PRIDE, I'd like to book a made-to-measure appointment.",
  );
