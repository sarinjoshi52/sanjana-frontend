import Link from "next/link";
import { Clock3, Construction, House, Rocket, ShieldCheck } from "lucide-react";

const UnderConstruction = () => {
  return (
    <main
      data-aos="fade-in"
      data-aos-duration="700"
      aria-labelledby="construction-title"
      className="flex min-h-[55vh] my-auto flex-col items-center justify-center px-5 py-10 text-center"
    >
      <div
        aria-hidden="true"
        className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F0F6FF]"
      >
        <Construction className="h-8 w-8 text-primary" />
      </div>

      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        Coming Soon
      </p>

      <h1
        id="construction-title"
        className="max-w-2xl text-2xl font-bold tracking-tight text-[#17324D] sm:text-3xl"
      >
        This Page Is Under Construction
      </h1>

      <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
        We&apos;re working to bring you something valuable. This page will be
        available soon. Thank you for your patience.
      </p>

      <div className="mt-7 grid w-full max-w-xl grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-1.5">
          <Rocket aria-hidden="true" className="h-5 w-5 text-teal-600" />
          <h2 className="text-sm font-semibold">Better Experience</h2>
          <p className="text-xs text-muted-foreground">
            We&apos;re improving things for you.
          </p>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <Clock3 aria-hidden="true" className="h-5 w-5 text-blue-600" />
          <h2 className="text-sm font-semibold">Coming Soon</h2>
          <p className="text-xs text-muted-foreground">
            Stay tuned for updates.
          </p>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <ShieldCheck aria-hidden="true" className="h-5 w-5 text-violet-600" />
          <h2 className="text-sm font-semibold">Our Commitment</h2>
          <p className="text-xs text-muted-foreground">
            To deliver the best, always.
          </p>
        </div>
      </div>

      <Link
        href="/"
        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#17324D] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#244968] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <House aria-hidden="true" className="h-4 w-4" />
        Back to Home
      </Link>
    </main>
  );
};

export default UnderConstruction;
