import { buildMetadata } from "@/lib/seo";
import { madeToMeasureInquiryUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ExternalButton } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export const metadata = buildMetadata({
  title: "Size Guide",
  description: "PRIDE size charts for suits, shirts, eastern wear and trousers, with guidance on how to measure.",
  path: "/size-guide",
});

/** Indicative measurements in inches (concept data, confirm against PRIDE patterns). */
const tables = [
  {
    title: "Suits, Sherwanis & Prince Coats",
    note: "Jacket size corresponds to chest measurement.",
    head: ["Size", "Chest", "Waist", "Shoulder", "Sleeve"],
    rows: [
      ["36", "36", "30", "17", "24"],
      ["38", "38", "32", "17.5", "24.5"],
      ["40", "40", "34", "18", "25"],
      ["42", "42", "36", "18.5", "25.5"],
      ["44", "44", "38", "19", "26"],
      ["46", "46", "40", "19.5", "26"],
    ],
  },
  {
    title: "Shalwar Kameez, Kurtas & Waistcoats",
    note: "Measured on the body; garments include ease for comfort.",
    head: ["Size", "Chest", "Shoulder", "Kameez length", "Sleeve"],
    rows: [
      ["S", "36–38", "17", "40", "23.5"],
      ["M", "38–40", "17.5", "41", "24"],
      ["L", "40–42", "18.5", "42", "24.5"],
      ["XL", "42–44", "19", "43", "25"],
      ["XXL", "44–46", "19.5", "44", "25.5"],
    ],
  },
  {
    title: "Formal Shirts",
    note: "Shirt size corresponds to collar measurement.",
    head: ["Size", "Collar", "Chest", "Sleeve"],
    rows: [
      ["15", "15", "38", "33"],
      ["15.5", "15.5", "40", "33.5"],
      ["16", "16", "42", "34"],
      ["16.5", "16.5", "44", "34.5"],
      ["17", "17", "46", "35"],
    ],
  },
  {
    title: "Trousers",
    note: "Hems are left unfinished on dress trousers for in-store alteration.",
    head: ["Size", "Waist", "Hip", "Inseam"],
    rows: [
      ["30", "30", "38", "32"],
      ["32", "32", "40", "32"],
      ["34", "34", "42", "33"],
      ["36", "36", "44", "33"],
      ["38", "38", "46", "33"],
    ],
  },
];

const howTo = [
  { title: "Chest", body: "Measure around the fullest part of the chest, under the arms, keeping the tape level." },
  { title: "Waist", body: "Measure around your natural waistline, where you normally wear your trousers." },
  { title: "Shoulder", body: "Measure across the back from one shoulder point to the other." },
  { title: "Sleeve", body: "From the shoulder point down to the wrist bone, with the arm relaxed." },
];

export default function SizeGuidePage() {
  return (
    <Container className="pt-10 pb-24 sm:pt-14 lg:pb-32">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Size Guide" }]} />
      <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-end">
        <h1 className="font-serif text-5xl leading-[1.02] font-light sm:text-6xl lg:col-span-7 xl:text-7xl">Size Guide</h1>
        <p className="max-w-md text-[0.98rem] leading-relaxed text-taupe lg:col-span-5 lg:justify-self-end">
          All measurements are in inches and are a guide. Our tailors are happy to advise, and every piece can
          be adjusted in store.
        </p>
      </div>

      <div className="mt-16 grid gap-16 lg:grid-cols-12">
        <div className="space-y-16 lg:col-span-8">
          {tables.map((t) => (
            <section key={t.title} aria-labelledby={t.title}>
              <h2 id={t.title} className="font-serif text-3xl font-light">{t.title}</h2>
              <p className="mt-2 text-sm text-taupe">{t.note}</p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-ink">
                      {t.head.map((h) => (
                        <th key={h} scope="col" className="py-3 pr-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.map((r) => (
                      <tr key={r[0]} className="border-b border-line">
                        {r.map((cell, i) =>
                          i === 0 ? (
                            <th key={i} scope="row" className="py-3.5 pr-4 font-semibold">{cell}</th>
                          ) : (
                            <td key={i} className="py-3.5 pr-4 text-taupe">{cell}</td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>

        <aside className="lg:col-span-4">
          <div className="bg-sand/60 p-8 lg:sticky lg:top-28">
            <h2 className="font-serif text-3xl font-light">How to measure</h2>
            <dl className="mt-8 space-y-6">
              {howTo.map((h, i) => (
                <div key={h.title} className="flex gap-4">
                  <dt className="font-serif text-gold">{String(i + 1).padStart(2, "0")}</dt>
                  <dd>
                    <p className="font-semibold">{h.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-taupe">{h.body}</p>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 border-t border-line pt-8">
              <p className="text-sm text-taupe">Between sizes, or want something cut exactly to you?</p>
              <ExternalButton href={madeToMeasureInquiryUrl()} className="mt-5 w-full">
                <WhatsAppIcon className="size-4" /> Ask a tailor
              </ExternalButton>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
