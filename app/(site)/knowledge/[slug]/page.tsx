import { cardData } from "@/data/knowledge";
import { notFound } from "next/navigation";

type KnowledgeDetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function KnowledgeDetail({
  params,
}: KnowledgeDetailProps) {
  const { slug } = await params;
  const service = cardData.find((card) => card.slug === slug);

  if (!service) notFound();

  return (
    <main
      data-aos="fade-in"
      data-aos-duration="700"
      className="flex flex-col p-5 md:px-10 lg:px-[60px]"
    >
      {/* Service Header */}
      <section
        className="relative overflow-hidden rounded-xl px-5 py-7 md:px-8 md:py-9"
        style={{ backgroundColor: service.bgcolor }}
      >
        <div className="relative z-10 flex max-w-4xl flex-col items-start gap-3">
          {/* Service Label */}
          <span
            className="rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em]"
            style={{
              color: service.color,
              borderColor: `${service.color}40`,
              backgroundColor: "#FFFFFF80",
            }}
          >
            Knowledge Services
          </span>

          {/* Title and Acronym */}
          <div className="flex flex-wrap items-center gap-3">
            <h1
              className="text-2xl font-bold tracking-tight md:text-4xl"
              style={{ color: service.color }}
            >
              {service.title}
            </h1>

            <span
              className="rounded-md px-2.5 py-1 text-sm font-bold uppercase"
              style={{
                color: service.color,
                backgroundColor: "#FFFFFFB3",
              }}
            >
              {service.name}
            </span>
          </div>

          {/* Accent Line */}
          <div
            className="h-1 w-12 rounded-full"
            style={{ backgroundColor: service.color }}
          />
        </div>

        {/* Decorative Background Element */}
        <div
          aria-hidden="true"
          className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-25 blur-3xl"
          style={{ backgroundColor: service.color }}
        />
      </section>

      {/* Service Description */}
      <section className="w-full max-w-3xl px-2 py-7 md:px-4 md:py-9">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Overview
        </h2>

        <p className="text-xs leading-7 text-slate-600 md:text-base md:leading-7">
          {service.description}
        </p>
      </section>
    </main>
  );
}
