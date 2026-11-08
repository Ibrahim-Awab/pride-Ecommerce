import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Container size="narrow" className="py-32 text-center sm:py-44">
          <p className="eyebrow text-gold">Error 404</p>
          <h1 className="mt-6 font-serif text-5xl font-light sm:text-7xl">This page has been altered</h1>
          <p className="mx-auto mt-6 max-w-md text-[0.98rem] leading-relaxed text-taupe">
            The page you were looking for has moved or no longer exists. Let us help you find something
            that fits.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/">Return home</ButtonLink>
            <ButtonLink href="/collections" variant="outline">Browse collections</ButtonLink>
          </div>
        </Container>
      </main>
    </>
  );
}
