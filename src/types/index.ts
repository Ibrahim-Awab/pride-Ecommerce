export type ImageAsset = {
  src: string;
  alt: string;
};

export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  slug: string;
  name: string;
  /** Slug of the collection this product belongs to. */
  collection: string;
  /** Short garment type, e.g. "Two-Piece Suit". */
  category: string;
  /** One-line summary used on cards and in metadata. */
  tagline: string;
  description: string;
  details: string[];
  fabricAndCare: string[];
  /** Price in PKR. Only shown when `priceVerified` is true. */
  price?: number;
  priceVerified: boolean;
  sizes: string[];
  colors: ProductColor[];
  images: ImageAsset[];
  isNew?: boolean;
  isFeatured?: boolean;
  /** True when the product is illustrative concept content, not a real PRIDE item. */
  isDemo: boolean;
};

export type Collection = {
  slug: string;
  name: string;
  /** Short line for tiles and menus. */
  tagline: string;
  description: string;
  image: ImageAsset;
};

export type StoreLocation = {
  name: string;
  addressLines: string[];
  city: string;
  hours: { days: string; time: string }[];
  phone: string;
  mapsQuery: string;
  image: ImageAsset;
  isPlaceholder: boolean;
};

export type NavLink = {
  label: string;
  href: string;
};
