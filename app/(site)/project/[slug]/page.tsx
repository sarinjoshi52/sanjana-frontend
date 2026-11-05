import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import PreviousUrl from "@/components/common/PreviousUrl";
import { projects } from "@/data/project";

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

const statusStyles = {
  COMPLETED: {
    label: "Completed",
    className: "bg-emerald-50 border-primary-foreground border text-[#2B9D8F]",
  },
  ONGOING: { label: "Ongoing", className: "bg-blue-50 text-blue-700" },
  UPCOMING: { label: "Upcoming", className: "bg-amber-50 text-amber-700" },
} as const;

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find((project) => project.id === slug);

  if (!project) notFound();

  const status = statusStyles[project.status];
  const period = project.title.match(/\(([^)]+)\)\s*$/)?.[1];

  const details = [
    { label: "Status", value: status.label },
    { label: "Client", value: project.organization },
    ...(period ? [{ label: "Period", value: period }] : []),
  ];

  return (
    <main
      aria-labelledby="project-title"
      data-aos="fade-up"
      data-aos-duration="700"
      className="flex flex-col gap-6 px-5 pb-10 md:px-10 lg:px-[60px]"
    >
      <PreviousUrl label="Back to Project" />

      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full  px-3 py-1.5 text-xs font-medium ${status.className}`}
          >
            {status.label}
          </span>
          <span className="rounded-md border border-slate-200 bg-blue-50/60 px-3 py-1.5 text-xs font-medium text-primary">
            {project.organization}
          </span>
        </div>

        <h1
          id="project-title"
          className="text-2xl font-bold leading-tight tracking-tight text-slate-900 lg:text-3xl"
        >
          {project.title}
        </h1>

        <p className="max-w-4xl text-xs leading-7 text-slate-600 md:text-sm md:leading-8">
          {project.description.replace(/^ssessed/, "Assessed")}
        </p>
      </header>

      <div className="grid items-start gap-6 lg:grid-cols-[2fr_1fr]">
        <section
          aria-labelledby="project-outcomes-heading"
          className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
        >
          <h2
            id="project-outcomes-heading"
            className="mb-5 text-base font-bold text-slate-900"
          >
            Outcomes
          </h2>
          <ul className="flex flex-col gap-4">
            {project.workDone.map((work, index) => (
              <li key={index} className="flex items-start gap-4">
                <Check
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#2B9D8F]"
                />
                <p className="text-sm leading-6 text-slate-700">{work}</p>
              </li>
            ))}
          </ul>
        </section>

        <aside
          aria-labelledby="project-details-heading"
          className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
        >
          <h2
            id="project-details-heading"
            className="mb-5 text-base font-bold text-slate-900"
          >
            Project Details
          </h2>
          <dl className="flex flex-col gap-4">
            {details.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-sm font-bold text-slate-900">{label}</dt>
                <dd className="text-xs text-slate-600 md:text-sm">{value}</dd>
              </div>
            ))}
          </dl>
          <Link
            href="/contact"
            className="mt-6 flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Discuss a similar project
          </Link>
        </aside>
      </div>
    </main>
  );
}
