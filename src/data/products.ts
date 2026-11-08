import type { Product } from "@/types";

/**
 * DEMO CATALOGUE
 * These products are illustrative concept content. They are not verified PRIDE
 * items, and prices are intentionally omitted (`priceVerified: false`).
 * Replace this file with the brand's real catalogue when it is supplied.
 */

const SUIT_SIZES = ["36", "38", "40", "42", "44", "46"];
const LETTER_SIZES = ["S", "M", "L", "XL", "XXL"];
const SHIRT_SIZES = ["15", "15.5", "16", "16.5", "17"];
const WAIST_SIZES = ["30", "32", "34", "36", "38"];

const TAILORING_CARE = [
  "Dry clean only",
  "Hang on a shaped hanger between wears",
  "Steam lightly; avoid pressing directly on the cloth",
];
const COTTON_CARE = [
  "Machine wash cold on a gentle cycle",
  "Wash dark colours separately",
  "Iron on medium heat while slightly damp",
];

function images(slug: string, alt: [string, string]) {
  return [
    { src: `/images/products/${slug}-1.jpg`, alt: alt[0] },
    { src: `/images/products/${slug}-2.jpg`, alt: alt[1] },
  ];
}

export const products: Product[] = [
  // ─── The Suit Edit ─────────────────────────────────────────────
  {
    slug: "classic-charcoal-two-piece-suit",
    name: "Grey Double-Breasted Suit",
    collection: "the-suit-edit",
    category: "Double-Breasted Suit",
    tagline: "A confident cut built around a clean peak lapel",
    description:
      "A double-breasted two-piece in mid-grey wool blend with a structured shoulder and peak lapels. Precise enough for the office and refined enough for a formal evening.",
    details: [
      "Double-breasted, six-on-two button front",
      "Peak lapel with pick stitching",
      "Half-canvas construction",
      "Flat-front trousers with extended waistband",
      "Tailored fit",
    ],
    fabricAndCare: ["Wool-blend suiting", ...TAILORING_CARE],
    priceVerified: false,
    sizes: SUIT_SIZES,
    colors: [{ name: "Grey", hex: "#6d7074" }],
    images: images("classic-charcoal-two-piece-suit", [
      "Man in a grey double-breasted suit, full length in the studio",
      "Grey double-breasted suit with striped tie, three-quarter view",
    ]),
    isFeatured: true,
    isDemo: true,
  },
  {
    slug: "navy-three-piece-suit",
    name: "Navy Three-Piece Suit",
    collection: "the-suit-edit",
    category: "Three-Piece Suit",
    tagline: "Jacket, waistcoat and trousers in deep navy",
    description:
      "A three-piece in deep navy with a matching five-button waistcoat. Wear it complete for weddings and ceremonies, or take the waistcoat off for a lighter look.",
    details: [
      "Single-breasted jacket with peak lapel",
      "Five-button matching waistcoat",
      "Half-canvas construction",
      "Side-adjuster trousers",
      "Tailored fit",
    ],
    fabricAndCare: ["Fine wool-blend suiting", ...TAILORING_CARE],
    priceVerified: false,
    sizes: SUIT_SIZES,
    colors: [{ name: "Navy", hex: "#1f2a44" }],
    images: images("navy-three-piece-suit", [
      "Man in a navy three-piece suit against a mauve wall",
      "Navy three-piece suit with open-collar white shirt",
    ]),
    isFeatured: true,
    isNew: true,
    isDemo: true,
  },
  {
    slug: "black-dinner-tuxedo",
    name: "Black Dinner Tuxedo",
    collection: "the-suit-edit",
    category: "Tuxedo",
    tagline: "Satin-faced peak lapels for evenings of note",
    description:
      "A classic black dinner suit with satin-faced peak lapels, covered buttons and satin-striped trousers, made for receptions and black-tie evenings.",
    details: [
      "Satin-faced peak lapel",
      "Single covered-button closure",
      "Satin side stripe on trousers",
      "Jetted pockets",
      "Tailored fit",
    ],
    fabricAndCare: ["Wool-blend barathea with satin facings", ...TAILORING_CARE],
    priceVerified: false,
    sizes: SUIT_SIZES,
    colors: [{ name: "Black", hex: "#141414" }],
    images: images("black-dinner-tuxedo", [
      "Man buttoning a black dinner tuxedo with satin lapels",
      "Close-up of tuxedo bow tie, shirt studs and cufflinks",
    ]),
    isNew: true,
    isDemo: true,
  },
  {
    slug: "grey-windowpane-check-suit",
    name: "Grey Windowpane Check Suit",
    collection: "the-suit-edit",
    category: "Three-Piece Suit",
    tagline: "A quiet check with character",
    description:
      "A three-piece in grey-blue suiting with a tonal windowpane check. A confident alternative to plain suiting that still works for business.",
    details: [
      "Single-breasted, two-button closure",
      "Notch lapel",
      "Matching single-breasted waistcoat",
      "Pattern-matched seams",
      "Flat-front trousers",
      "Regular fit",
    ],
    fabricAndCare: ["Wool-blend check suiting", ...TAILORING_CARE],
    priceVerified: false,
    sizes: SUIT_SIZES,
    colors: [{ name: "Grey Check", hex: "#7b7d80" }],
    images: images("grey-windowpane-check-suit", [
      "Man in a grey-blue windowpane check three-piece suit",
      "Windowpane check sleeve and shirt cuff detail",
    ]),
    isDemo: true,
  },
  {
    slug: "sand-linen-summer-suit",
    name: "Sand Check Summer Suit",
    collection: "the-suit-edit",
    category: "Two-Piece Suit",
    tagline: "Unstructured and breathable for warm days",
    description:
      "A lightly constructed suit in a sand-coloured linen-blend check, made for Pakistani summers, day weddings and evening functions outdoors.",
    details: [
      "Unstructured shoulder",
      "Half-lined jacket for airflow",
      "Patch pockets",
      "Flat-front trousers",
      "Relaxed tailored fit",
    ],
    fabricAndCare: ["Linen-blend suiting", ...TAILORING_CARE],
    priceVerified: false,
    sizes: SUIT_SIZES,
    colors: [{ name: "Sand Check", hex: "#cbb89a" }],
    images: images("sand-linen-summer-suit", [
      "Man in a sand check summer suit outdoors",
      "Sand check summer suit, relaxed pose by a fence",
    ]),
    isNew: true,
    isDemo: true,
  },

  // ─── Waistcoats ────────────────────────────────────────────────
  {
    slug: "ivory-jacquard-waistcoat",
    name: "Ivory Jacquard Waistcoat",
    collection: "waistcoats",
    category: "Waistcoat",
    tagline: "Tone-on-tone jacquard for festive wear",
    description:
      "An ivory waistcoat in subtle self-patterned jacquard with a mandarin collar. Made to sit over a kurta for mehndi, nikkah and Eid.",
    details: ["Mandarin collar", "Six-button front", "Welt pockets", "Fully lined", "Tailored fit"],
    fabricAndCare: ["Jacquard blend", ...TAILORING_CARE],
    priceVerified: false,
    sizes: LETTER_SIZES,
    colors: [{ name: "Ivory", hex: "#efe8da" }],
    images: images("ivory-jacquard-waistcoat", [
      "Man in an ivory jacquard waistcoat over a white kameez",
      "Ivory jacquard waistcoat with red pocket square, cuff detail",
    ]),
    isFeatured: true,
    isNew: true,
    isDemo: true,
  },
  {
    slug: "charcoal-wool-waistcoat",
    name: "Grey Double-Breasted Waistcoat",
    collection: "waistcoats",
    category: "Waistcoat",
    tagline: "A sharp layer for formal evenings",
    description:
      "A double-breasted waistcoat in smooth grey wool blend with a rounded lapel-free front. Pair it with a bow tie for receptions, or wear it over a crisp shirt.",
    details: ["Double-breasted, eight-button front", "U-shaped neckline", "Welt pockets", "Adjustable back strap", "Tailored fit"],
    fabricAndCare: ["Wool-blend suiting", ...TAILORING_CARE],
    priceVerified: false,
    sizes: LETTER_SIZES,
    colors: [{ name: "Grey", hex: "#5f6266" }],
    images: images("charcoal-wool-waistcoat", [
      "Man in a grey double-breasted waistcoat and bow tie",
      "Grey double-breasted waistcoat, close-up",
    ]),
    isDemo: true,
  },
  {
    slug: "navy-textured-waistcoat",
    name: "Navy Textured Waistcoat",
    collection: "waistcoats",
    category: "Waistcoat",
    tagline: "Subtle texture, deep colour",
    description:
      "A navy waistcoat with a fine woven texture that catches the light, built to pair with ivory and white for evening events.",
    details: ["V-neck front", "Five-button closure", "Welt pockets", "Fully lined", "Tailored fit"],
    fabricAndCare: ["Textured weave blend", ...TAILORING_CARE],
    priceVerified: false,
    sizes: LETTER_SIZES,
    colors: [{ name: "Navy", hex: "#1f2a44" }],
    images: images("navy-textured-waistcoat", [
      "Seated man in a navy waistcoat and white shirt",
      "Navy waistcoat, upper-body view",
    ]),
    isDemo: true,
  },
  {
    slug: "brown-tweed-waistcoat",
    name: "Brown Wool Nehru Waistcoat",
    collection: "waistcoats",
    category: "Waistcoat",
    tagline: "Warm wool for the winter season",
    description:
      "A rich brown wool waistcoat with a mandarin collar, made for the cooler months and cut to sit cleanly over a shalwar kameez or kurta.",
    details: ["Mandarin collar", "Five-button front", "Welt pockets with pocket square", "Fully lined", "Regular fit"],
    fabricAndCare: ["Wool blend", ...TAILORING_CARE],
    priceVerified: false,
    sizes: LETTER_SIZES,
    colors: [{ name: "Brown", hex: "#6b4f3a" }],
    images: images("brown-tweed-waistcoat", [
      "Man in a brown wool Nehru waistcoat over a white kameez",
      "Brown wool waistcoat over a navy kameez",
    ]),
    isDemo: true,
  },

  // ─── Wedding & Sherwani ────────────────────────────────────────
  {
    slug: "ivory-embroidered-sherwani",
    name: "Ivory Embroidered Sherwani",
    collection: "wedding-sherwani",
    category: "Sherwani",
    tagline: "Hand-finished embroidery for the groom",
    description:
      "An ivory sherwani with tonal embroidery at the collar, placket and cuffs, finished by hand. Made to be worn with a churidar and khussa on the wedding day.",
    details: [
      "Band collar with embroidered edge",
      "Concealed placket with ornamental buttons",
      "Hand-finished embroidery",
      "Fully lined",
      "Made-to-measure available",
    ],
    fabricAndCare: ["Raw silk blend", "Professional dry clean only", "Store in a breathable garment bag"],
    priceVerified: false,
    sizes: SUIT_SIZES,
    colors: [{ name: "Ivory", hex: "#efe8da" }],
    images: images("ivory-embroidered-sherwani", [
      "Groom in an ivory embroidered sherwani and turban in an arched corridor",
      "Ivory sherwani with embroidered stole, three-quarter view",
    ]),
    isFeatured: true,
    isNew: true,
    isDemo: true,
  },
  {
    slug: "gold-raw-silk-sherwani",
    name: "Gold Brocade Sherwani",
    collection: "wedding-sherwani",
    category: "Sherwani",
    tagline: "A warm, luminous statement",
    description:
      "A sherwani in antique-gold brocade, edged with deep maroon velvet at the collar and placket, made for the barat or walima.",
    details: [
      "Band collar",
      "Ornamental button placket",
      "Contrast velvet trims",
      "Fully lined",
      "Made-to-measure available",
    ],
    fabricAndCare: ["Brocade with velvet trims", "Professional dry clean only", "Store in a breathable garment bag"],
    priceVerified: false,
    sizes: SUIT_SIZES,
    colors: [{ name: "Antique Gold", hex: "#b89660" }],
    images: images("gold-raw-silk-sherwani", [
      "Gold brocade sherwani with maroon velvet trim on a hanger",
      "Gold brocade sherwani collar and button detail",
    ]),
    isFeatured: true,
    isDemo: true,
  },
  {
    slug: "black-prince-coat",
    name: "Black Prince Coat",
    collection: "wedding-sherwani",
    category: "Prince Coat",
    tagline: "Eastern cut, western precision",
    description:
      "A black prince coat with a clean band collar and tonal embroidery across the shoulders, the formal choice for nikkah, walima and evening receptions.",
    details: ["Band collar", "Tonal shoulder embroidery", "Single-breasted closure", "Jetted pockets", "Fully lined", "Tailored fit"],
    fabricAndCare: ["Wool-blend suiting", ...TAILORING_CARE],
    priceVerified: false,
    sizes: SUIT_SIZES,
    colors: [{ name: "Black", hex: "#141414" }],
    images: images("black-prince-coat", [
      "Man in a black embroidered prince coat",
      "Black prince coat with tonal embroidery, buttoning pose",
    ]),
    isDemo: true,
  },
  {
    slug: "maroon-velvet-sherwani",
    name: "Maroon Velvet Sherwani",
    collection: "wedding-sherwani",
    category: "Sherwani",
    tagline: "Deep velvet for winter weddings",
    description:
      "A rich maroon velvet sherwani with gold embroidery at the collar and chest, made for the winter wedding season.",
    details: ["Band collar", "Ornamental button placket", "Gold hand embroidery", "Fully lined", "Made-to-measure available"],
    fabricAndCare: ["Velvet", "Professional dry clean only", "Store in a breathable garment bag"],
    priceVerified: false,
    sizes: SUIT_SIZES,
    colors: [{ name: "Maroon", hex: "#5a1f27" }],
    images: images("maroon-velvet-sherwani", [
      "Man in a maroon velvet sherwani on stone steps",
      "Maroon velvet sherwani with gold embroidery, half-length",
    ]),
    isDemo: true,
  },

  // ─── Shalwar Kameez ────────────────────────────────────────────
  {
    slug: "white-cotton-shalwar-kameez",
    name: "White Cotton Shalwar Kameez",
    collection: "shalwar-kameez",
    category: "Shalwar Kameez",
    tagline: "A crisp classic for Fridays and Eid",
    description:
      "A clean white shalwar kameez in fine cotton with a sherwani collar and concealed placket. Timeless on its own and sharp under a waistcoat.",
    details: ["Sherwani collar", "Concealed button placket", "Side pockets", "Matching shalwar", "Regular fit"],
    fabricAndCare: ["Premium cotton", ...COTTON_CARE],
    priceVerified: false,
    sizes: LETTER_SIZES,
    colors: [{ name: "White", hex: "#f4f2ec" }],
    images: images("white-cotton-shalwar-kameez", [
      "Man in a white cotton shalwar kameez in a garden",
      "White shalwar kameez, full length in a park",
    ]),
    isFeatured: true,
    isDemo: true,
  },
  {
    slug: "charcoal-wash-and-wear-kameez",
    name: "Charcoal Wash & Wear Shalwar Kameez",
    collection: "shalwar-kameez",
    category: "Shalwar Kameez",
    tagline: "Easy care for long days",
    description:
      "A charcoal wash-and-wear suit that holds its shape from morning to evening. Easy to look after without giving up a sharp finish.",
    details: ["Shirt collar", "Half-button placket", "Side pockets", "Matching shalwar", "Regular fit"],
    fabricAndCare: ["Wash-and-wear blend", ...COTTON_CARE],
    priceVerified: false,
    sizes: LETTER_SIZES,
    colors: [{ name: "Charcoal", hex: "#3a3a3c" }],
    images: images("charcoal-wash-and-wear-kameez", [
      "Man in a charcoal shalwar kameez in a courtyard",
      "Charcoal shalwar kameez beside a carved pillar",
    ]),
    isNew: true,
    isDemo: true,
  },
  {
    slug: "beige-kurta-pajama",
    name: "Beige Kurta Pajama",
    collection: "shalwar-kameez",
    category: "Kurta Pajama",
    tagline: "Soft neutrals for festive gatherings",
    description:
      "A beige kurta with a slim pajama in a soft cotton blend, made for dholkis, dinners and festive afternoons.",
    details: ["Band collar", "Concealed placket", "Side slits", "Slim pajama", "Regular fit"],
    fabricAndCare: ["Cotton blend", ...COTTON_CARE],
    priceVerified: false,
    sizes: LETTER_SIZES,
    colors: [{ name: "Beige", hex: "#d8c7a8" }],
    images: images("beige-kurta-pajama", [
      "Man in a beige kurta pajama in a park",
      "Beige kurta, upper-body view",
    ]),
    isNew: true,
    isDemo: true,
  },
  {
    slug: "navy-cotton-kurta",
    name: "Navy Cotton Kurta",
    collection: "shalwar-kameez",
    category: "Kurta",
    tagline: "A deep navy everyday essential",
    description:
      "A navy cotton kurta with a band collar, easy to dress up with a waistcoat or wear on its own.",
    details: ["Band collar", "Half-button placket", "Side slits", "Regular fit"],
    fabricAndCare: ["Premium cotton", ...COTTON_CARE],
    priceVerified: false,
    sizes: LETTER_SIZES,
    colors: [{ name: "Navy", hex: "#1f2a44" }],
    images: images("navy-cotton-kurta", [
      "Man in a navy cotton kurta outdoors",
      "Navy kurta, full length among greenery",
    ]),
    isDemo: true,
  },

  // ─── Formal Shirts ─────────────────────────────────────────────
  {
    slug: "white-poplin-dress-shirt",
    name: "White Poplin Dress Shirt",
    collection: "formal-shirts",
    category: "Dress Shirt",
    tagline: "The essential white shirt",
    description:
      "A crisp white poplin shirt with a semi-spread collar and single-button barrel cuffs, made to sit cleanly under a jacket.",
    details: ["Semi-spread collar", "Barrel cuffs", "Curved hem", "Slim fit"],
    fabricAndCare: ["100% cotton poplin", ...COTTON_CARE],
    priceVerified: false,
    sizes: SHIRT_SIZES,
    colors: [{ name: "White", hex: "#f7f7f5" }],
    images: images("white-poplin-dress-shirt", [
      "Man fastening the cuff of a white dress shirt",
      "White dress shirt cuff, close-up",
    ]),
    isFeatured: true,
    isDemo: true,
  },
  {
    slug: "sky-blue-oxford-shirt",
    name: "Pale Blue Dress Shirt",
    collection: "formal-shirts",
    category: "Dress Shirt",
    tagline: "Softly textured, endlessly useful",
    description:
      "A pale blue cotton shirt with a soft texture and French cuffs, smart under a suit and easy to wear with a tie or without.",
    details: ["Semi-spread collar", "French cuffs", "Curved hem", "Regular fit"],
    fabricAndCare: ["100% cotton", ...COTTON_CARE],
    priceVerified: false,
    sizes: SHIRT_SIZES,
    colors: [{ name: "Pale Blue", hex: "#c9d6e3" }],
    images: images("sky-blue-oxford-shirt", [
      "Pale blue dress shirt with a sage tie",
      "Pale blue shirt French cuff with cufflink and watch",
    ]),
    isDemo: true,
  },
  {
    slug: "black-sateen-dress-shirt",
    name: "Black Sateen Dress Shirt",
    collection: "formal-shirts",
    category: "Dress Shirt",
    tagline: "A low-sheen shirt for evening",
    description:
      "A black sateen shirt with a subtle sheen, made to pair with a dinner suit or charcoal tailoring after dark.",
    details: ["Spread collar", "Convertible cuffs", "Concealed placket", "Slim fit"],
    fabricAndCare: ["Cotton sateen", ...COTTON_CARE],
    priceVerified: false,
    sizes: SHIRT_SIZES,
    colors: [{ name: "Black", hex: "#141414" }],
    images: images("black-sateen-dress-shirt", [
      "Man in a black dress shirt against a brown backdrop",
      "Black dress shirt, checking a wristwatch",
    ]),
    isNew: true,
    isDemo: true,
  },

  // ─── Trousers ──────────────────────────────────────────────────
  {
    slug: "charcoal-wool-dress-trousers",
    name: "Charcoal Wool Dress Trousers",
    collection: "trousers",
    category: "Dress Trousers",
    tagline: "A sharp crease and a clean break",
    description:
      "Charcoal dress trousers in wool blend with a pressed crease and extended waistband, made to pair with blazers, shirts and waistcoats.",
    details: ["Flat front", "Extended tab waistband", "Pressed crease", "Unfinished hem for alteration", "Tailored fit"],
    fabricAndCare: ["Wool-blend suiting", ...TAILORING_CARE],
    priceVerified: false,
    sizes: WAIST_SIZES,
    colors: [{ name: "Charcoal", hex: "#3a3a3c" }],
    images: images("charcoal-wool-dress-trousers", [
      "Man in charcoal dress trousers and a grey shirt",
      "Charcoal dress trousers and shoes, detail",
    ]),
    isDemo: true,
  },
  {
    slug: "beige-tailored-chinos",
    name: "Beige Tailored Chinos",
    collection: "trousers",
    category: "Chinos",
    tagline: "Smart-casual, tailored cleanly",
    description:
      "Beige chinos in a cotton twill with a touch of stretch, tailored to look smart with a blazer or an oxford shirt.",
    details: ["Flat front", "Slant pockets", "Touch of stretch", "Slim tapered fit"],
    fabricAndCare: ["Cotton twill with elastane", ...COTTON_CARE],
    priceVerified: false,
    sizes: WAIST_SIZES,
    colors: [{ name: "Beige", hex: "#cdb994" }],
    images: images("beige-tailored-chinos", [
      "Beige tailored chinos with black shoes",
      "Beige trousers with belt and white shirt, waist detail",
    ]),
    isNew: true,
    isDemo: true,
  },
  {
    slug: "navy-pleated-trousers",
    name: "Navy Tailored Trousers",
    collection: "trousers",
    category: "Dress Trousers",
    tagline: "A clean line from waist to hem",
    description:
      "Navy wool-blend trousers with a slim, tapered leg, made to pair with the matching jacket or a crisp shirt on its own.",
    details: ["Flat front", "Side adjusters", "Tapered leg", "Unfinished hem for alteration", "Tailored fit"],
    fabricAndCare: ["Wool-blend suiting", ...TAILORING_CARE],
    priceVerified: false,
    sizes: WAIST_SIZES,
    colors: [{ name: "Navy", hex: "#1f2a44" }],
    images: images("navy-pleated-trousers", [
      "Man in navy tailored trousers on a garden path",
      "Navy trousers and shoes, detail",
    ]),
    isDemo: true,
  },
];
