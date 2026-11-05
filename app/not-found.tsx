import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main
      aria-labelledby="not-found-title"
      className="flex items-center justify-center overflow-hidden bg-background px-5 py-10"
    >
      <section className=" flex w-full max-w-lg flex-col items-center gap-3 rounded-2xl border border-muted bg-white px-6 py-10 text-center md:px-10">
        <Link
          href="/"
          aria-label="SañJñāNā home"
          className="flex size-12 items-center justify-center rounded-md bg-primary text-xl font-bold text-secondary"
        >
          S
        </Link>

        <div className="mt-4 flex items-center justify-center">
          <span
            aria-hidden="true"
            className="select-none text-7xl font-bold leading-none tracking-tight text-[#F0F6FF] sm:text-8xl"
          >
            404
          </span>
        </div>

        <h1
          id="not-found-title"
          className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Page not found
        </h1>
        <p className="max-w-sm text-xs leading-6 text-muted-foreground sm:text-sm">
          The page you are looking for may have been moved or no longer exists.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Back to home
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
