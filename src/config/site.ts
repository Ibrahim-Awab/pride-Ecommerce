import type { NavLink, StoreLocation } from "@/types";

/**
 * Single source of truth for brand facts.
 *
 * Everything marked PLACEHOLDER is concept content that has NOT been verified
 * with PRIDE. Replace these values once the brand supplies real details.
 */
export const siteConfig = {
  name: "PRIDE",
  legalName: "PRIDE Menswear",
  tagline: "Tailored with Pride",
  description:
    "PRIDE is a Pakistani menswear house of tailored suits, waistcoats, sherwanis and eastern wear, cut with care and finished by hand.",
  /** Public URL of the deployed site. Used for sitemap, canonical URLs and Open Graph. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pride-menswear.example.com",
  /**
   * Search-engine indexing. Off while this is a client demo, so the site never
   * appears in Google. Set NEXT_PUBLIC_ALLOW_INDEXING=true once PRIDE approves it.
   */
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  locale: "en_PK",
  country: "Pakistan",

  contact: {
    // PLACEHOLDER: international format without "+" or spaces, as wa.me expects.
    whatsappNumber: "923000000000",
    // PLACEHOLDER
    phoneDisplay: "+92 300 0000000",
    // PLACEHOLDER
    email: "hello@pride-menswear.example.com",
  },

  social: {
    // PLACEHOLDER handles: confirm with the brand.
    instagram: { handle: "@pride.menswear", url: "https://www.instagram.com/" },
    facebook: { handle: "PRIDE Menswear", url: "https://www.facebook.com/" },
    tiktok: { handle: "@pride.menswear", url: "https://www.tiktok.com/" },
  },

  announcement: "Made-to-measure tailoring now available in store. Enquire on WhatsApp.",

  /** Shown in the footer so viewers know this is a proposal. */
  conceptNotice:
    "Design concept prepared as a proposal for PRIDE. Product names, descriptions, contact details and photography are illustrative placeholders.",
} as const;

export const primaryNav: NavLink[] = [
  { label: "Collections", href: "/collections" },
  { label: "Made to Measure", href: "/made-to-measure" },
  { label: "About", href: "/about" },
  { label: "Stores", href: "/stores" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Shop",
    links: [
      { label: "The Suit Edit", href: "/collections/the-suit-edit" },
      { label: "Wedding & Sherwani", href: "/collections/wedding-sherwani" },
      { label: "Waistcoats", href: "/collections/waistcoats" },
      { label: "Shalwar Kameez", href: "/collections/shalwar-kameez" },
      { label: "All Collections", href: "/collections" },
    ],
  },
  {
    title: "The House",
    links: [
      { label: "About PRIDE", href: "/about" },
      { label: "Made to Measure", href: "/made-to-measure" },
      { label: "Craftsmanship", href: "/about#craftsmanship" },
    ],
  },
  {
    title: "Client Care",
    links: [
      { label: "Store Locations", href: "/stores" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "Contact Us", href: "/stores#contact" },
    ],
  },
];

export const stores: StoreLocation[] = [
  {
    // PLACEHOLDER: replace with the real flagship address.
    name: "PRIDE Flagship",
    addressLines: ["Gakhar Plaza", "Saddar"],
    city: "Rawalpindi",
    hours: [
      { days: "Monday – Saturday", time: "11:00 am – 10:00 pm" },
      { days: "Sunday", time: "2:00 pm – 10:00 pm" },
    ],
    phone: "+92 300 0000000",
    mapsQuery: "Saddar, Rawalpindi, Pakistan",
    image: {
      src: "/images/stores/store.jpg",
      alt: "Modern menswear boutique interior with a display table and blazer rails",
    },
    isPlaceholder: true,
  },
];
