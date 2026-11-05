import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import PreviousUrl from "@/components/common/PreviousUrl";
import { cardData, serviceDetails } from "@/data/knowledge";

type KnowledgeDetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function KnowledgeDetail({
  params,
}: KnowledgeDetailProps) {
  const { slug } = await params;
  const service = cardData.find((card) => card.slug === slug);
  const detail = serviceDetails[slug];

  if (!service || !detail) notFound();

  return (
    <main
      aria-labelledby="service-title"
      data-aos="fade-in"
      data-aos-duration="700"
      className="flex flex-col gap-6 px-5 pb-10 md:px-10 lg:px-[60px]"
    >
      <PreviousUrl label="Back to Knowledge Services" />
      <header className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold uppercase md:h-14 md:w-14"
          style={{ backgroundColor: service.bgcolor, color: service.color }}
        >
          {service.name}
        </span>
        <div className="flex flex-col gap-2">
          <h1
            id="service-title"
            className="text-2xl font-bold leading-tight tracking-tight text-slate-900 lg:text-3xl"
          >
            {service.title}
          </h1>
          <p className="max-w-4xl text-xs leading-7 text-slate-600 md:text-sm md:leading-8">
            {detail.summary}
          </p>
        </div>
      </header>

      <div className="grid items-start gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-6">
          <section
            aria-labelledby="service-overview-heading"
            className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
          >
            <h2
              id="service-overview-heading"
              className="mb-4 text-base font-bold text-slate-900"
            >
              Overview
            </h2>
            <p className="text-xs leading-7 text-slate-600 md:text-sm md:leading-8">
              {detail.overview}
            </p>
          </section>

          <section
            aria-labelledby="service-process-heading"
            className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
          >
            <h2
              id="service-process-heading"
              className="mb-5 text-base font-bold text-slate-900"
            >
              How we work
            </h2>
            <ul className="flex flex-col gap-4">
              {detail.howWeWork.map((step) => (
                <li key={step} className="flex items-start gap-4">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#2B9D8F]"
                  />
                  <p className="text-sm leading-6 text-slate-700">{step}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside
          aria-labelledby="service-offerings-heading"
          className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
        >
          <h2
            id="service-offerings-heading"
            className="mb-5 text-base font-bold text-slate-900"
          >
            Key Offerings
          </h2>
          <ul className="flex flex-col gap-3">
            {detail.offerings.map((offering) => (
              <li key={offering} className="flex items-start gap-3">
                <Check
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#2B9D8F]"
                />
                <p className="text-sm leading-6 text-slate-600">{offering}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-6 flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </aside>
      </div>
    </main>
  );
}
