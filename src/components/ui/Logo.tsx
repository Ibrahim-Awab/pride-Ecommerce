/**
 * Concept wordmark. Replace with PRIDE's official logo artwork when supplied.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span className="font-serif text-[1.65rem] font-medium tracking-[0.42em] [margin-right:-0.42em] sm:text-[1.9rem]">
        PRIDE
      </span>
      <span className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.5em] [margin-right:-0.5em] opacity-70">
        Menswear
      </span>
    </span>
  );
}
