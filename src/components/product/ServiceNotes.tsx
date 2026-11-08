import { MapPin, Ruler, Scissors } from "lucide-react";
import { Container } from "@/components/ui/Container";

const notes = [
  {
    Icon: Scissors,
    title: "Alterations in store",
    body: "Sleeves, hems and waists adjusted by our tailors so every piece fits as intended.",
  },
  {
    Icon: Ruler,
    title: "Made to measure",
    body: "Any silhouette can be cut to your measurements, in the fabric of your choice.",
  },
  {
    Icon: MapPin,
    title: "Try on in store",
    body: "Reserve a piece on WhatsApp and we will have it ready in your size when you visit.",
  },
];

export function ServiceNotes() {
  return (
    <section aria-label="Services" className="mt-20 bg-sand/60 lg:mt-28">
      <Container>
        <ul className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {notes.map(({ Icon, title, body }) => (
            <li key={title} className="flex gap-5 py-8 sm:flex-col sm:gap-4 sm:px-8 sm:py-12 sm:first:pl-0 sm:last:pr-0">
              <Icon className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.3} />
              <div>
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-taupe">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
