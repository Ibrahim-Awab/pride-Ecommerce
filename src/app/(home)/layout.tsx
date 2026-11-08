import { SiteHeader } from "@/components/layout/SiteHeader";

/** Home uses an overlay header that sits transparently above the hero campaign. */
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader overlay />
      <main id="main" className="flex-1">
        {children}
      </main>
    </>
  );
}
