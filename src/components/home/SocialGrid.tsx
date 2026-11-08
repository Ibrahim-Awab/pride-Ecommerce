import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/ui/BrandIcons";

const posts = [
  { src: "/images/social/1.jpg", alt: "Fastening a cufflink on a white French cuff" },
  { src: "/images/social/2.jpg", alt: "Brown leather brogues beneath dark trousers" },
  { src: "/images/social/3.jpg", alt: "Man knotting his tie, waistcoat and cufflink visible" },
  { src: "/images/social/4.jpg", alt: "Bearded man in a brown kameez with embroidered collar" },
  { src: "/images/social/5.jpg", alt: "Hands holding a suiting swatch book" },
  { src: "/images/social/6.jpg", alt: "Cream blazers on a boutique rail" },
];

export function SocialGrid() {
  const ig = siteConfig.social.instagram;
  return (
    <section className="border-t border-line pt-20 pb-24 lg:pt-28 lg:pb-32">
      <Container>
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <p className="eyebrow text-gold">Follow the House</p>
          <h2 className="font-serif text-4xl font-light sm:text-5xl">
            <a href={ig.url} target="_blank" rel="noopener noreferrer" className="link-underline">
              {ig.handle}
            </a>
          </h2>
        </div>
        <ul className="grid grid-cols-3 gap-1.5 sm:gap-3 lg:grid-cols-6">
          {posts.map((p) => (
            <li key={p.src}>
              <a
                href={ig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden bg-sand"
                aria-label={`${p.alt} (opens Instagram)`}
              >
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 16vw, 33vw" className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-[1.05]" />
                <span className="absolute inset-0 grid place-items-center bg-ink/0 text-ivory opacity-0 transition-all duration-500 group-hover:bg-ink/30 group-hover:opacity-100">
                  <InstagramIcon className="size-6" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
