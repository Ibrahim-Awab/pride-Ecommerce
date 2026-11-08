import type { Collection } from "@/types";

/** Demo collections. Adjust to PRIDE's actual range once confirmed. */
export const collections: Collection[] = [
  {
    slug: "the-suit-edit",
    name: "The Suit Edit",
    tagline: "Two- and three-piece tailoring",
    description:
      "Structured shoulders, clean lapels and trousers cut to break just right. Our suiting is made for the boardroom, the barat and every occasion in between.",
    image: { src: "/images/collections/the-suit-edit.jpg", alt: "Man in a grey tailored suit beside stone stairs" },
  },
  {
    slug: "wedding-sherwani",
    name: "Wedding & Sherwani",
    tagline: "For the days that matter most",
    description:
      "Sherwanis and prince coats in raw silk, jamawar and velvet, with embroidery finished by hand for the groom and the wedding party.",
    image: { src: "/images/collections/wedding-sherwani.jpg", alt: "Bearded groom in an ivory embroidered sherwani" },
  },
  {
    slug: "waistcoats",
    name: "Waistcoats",
    tagline: "The finishing layer",
    description:
      "Worn over a kurta or under a jacket, a well-cut waistcoat sharpens the silhouette. Jacquards, wools and tweeds in considered colours.",
    image: { src: "/images/collections/waistcoats.jpg", alt: "Man in a brown waistcoat over a white kameez, seated on an ornate chair" },
  },
  {
    slug: "shalwar-kameez",
    name: "Shalwar Kameez",
    tagline: "Everyday eastern, refined",
    description:
      "Breathable cottons and wash-and-wear blends in quiet colours, cut for comfort through long days, Fridays and festivities.",
    image: { src: "/images/collections/shalwar-kameez.jpg", alt: "Two men walking in cream and brown shalwar kameez" },
  },
  {
    slug: "formal-shirts",
    name: "Formal Shirts",
    tagline: "The foundation of the wardrobe",
    description:
      "Poplins, oxfords and sateens with clean collars and a sharp cuff, the quiet base for every suit and waistcoat.",
    image: { src: "/images/collections/formal-shirts.jpg", alt: "Man buttoning a white dress shirt in a dim doorway" },
  },
  {
    slug: "trousers",
    name: "Trousers",
    tagline: "Tailored from the waist down",
    description:
      "Dress trousers and chinos with a clean drape and a precise break, made to pair with the rest of the wardrobe.",
    image: { src: "/images/collections/trousers.jpg", alt: "Brown pleated trousers worn with black loafers" },
  },
];
