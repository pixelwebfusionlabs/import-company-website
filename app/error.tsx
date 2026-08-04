"use client";

import { useEffect } from "react";
import { ButtonLink } from "@/components/shared/button-link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-28 pb-20 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">Error</p>
      <h1 className="mt-3 font-display text-4xl md:text-6xl">Something went wrong</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        An unexpected error occurred. You can try again or return home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-brand px-6 text-sm font-semibold text-white"
        >
          Try again
        </button>
        <ButtonLink href="/" variant="outline">
          Home
        </ButtonLink>
      </div>
    </div>
  );
}
