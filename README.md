# PRIDE: Website Concept

A frontend-only concept website for **PRIDE**, a Pakistani menswear brand. It was prepared as a digital-presence proposal.

Built with Next.js 16 (App Router, Cache Components), TypeScript, Tailwind CSS v4, Motion (Framer Motion) and Lucide icons. There is no backend, database or checkout. Enquiries go to WhatsApp.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
```

## Where to change things

| What | File |
|---|---|
| Brand name, WhatsApp number, phone, email, social handles, store address and hours, nav | `src/config/site.ts` |
| Collections | `src/data/collections.ts` |
| Products (sizes, colours, images, new/featured flags, prices) | `src/data/products.ts` |
| Colours and fonts (design tokens) | `src/app/globals.css` (`@theme`) and `src/app/layout.tsx` |
| Logo (currently a typographic wordmark) | `src/components/ui/Logo.tsx` |
| Images | `public/images/**` (credits in `public/images/CREDITS.md`) |
| Production URL for sitemap and Open Graph | `NEXT_PUBLIC_SITE_URL` env var |
| Allow Google indexing (off by default for the demo) | `NEXT_PUBLIC_ALLOW_INDEXING=true` env var |

### Prices
A price only appears when a product has `priceVerified: true` and a `price` (PKR). Otherwise the site shows "Price on request" and leaves the price out of structured data.

## Demo content: replace before going live
Brand details could not be verified publicly, so the following are **placeholders**:

- WhatsApp number, phone, email and social handles (`src/config/site.ts`)
- Store name, address and hours (`isPlaceholder: true` shows a notice on the Stores page)
- All products, descriptions and size charts (`isDemo: true`)
- About-page story copy
- All photography (royalty-free stock from Pexels and Unsplash, standing in for PRIDE's own shoots)

A short concept notice appears in the footer (`siteConfig.conceptNotice`). Remove it once real content is in place.

## Structure

```
src/
  app/
    (home)/            home page with overlay header
    (site)/            all other pages with solid header
      collections/  collections/[slug]/  products/[slug]/
      about/  stores/  made-to-measure/  size-guide/
    sitemap.ts  robots.ts  opengraph-image.tsx  not-found.tsx
  components/  layout/ home/ product/ collection/ ui/
  config/site.ts   data/   lib/ (catalog, whatsapp, seo)   types/
```
