import Link from "next/link";
import { ButtonLink } from "@/components/shared/button-link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-28 pb-20 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-brand-pink uppercase">404</p>
      <h1 className="mt-3 font-display text-5xl md:text-7xl">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you are looking for may have moved or never existed. Let us get you back on course.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/" variant="gradient">
          Back home
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact us
        </ButtonLink>
      </div>
      <p className="mt-10 text-sm text-muted-foreground">
        Or browse{" "}
        <Link href="/services" className="text-brand-pink hover:underline">
          services
        </Link>
        .
      </p>
    </div>
  );
}
