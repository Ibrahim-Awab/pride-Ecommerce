"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

/** UI-only sign-up (no backend in this concept). Shows a confirmation state on submit. */
export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="border-b border-ivory/30 pb-3 text-sm text-ivory/80" role="status">
        Thank you. You&apos;re on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex items-center border-b border-ivory/30 focus-within:border-ivory"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email address"
        autoComplete="email"
        className="min-h-12 flex-1 bg-transparent text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
      />
      <button type="submit" className="grid size-12 place-items-center" aria-label="Subscribe">
        <ArrowRight className="size-4" strokeWidth={1.5} />
      </button>
    </form>
  );
}
