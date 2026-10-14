import { projects } from "@/data/project";
import { notFound } from "next/navigation";
import {
  Building2,
  CheckCircle2,
  CircleDot,
  Clock3,
  FolderKanban,
} from "lucide-react";
import PreviousUrl from "@/components/common/PreviousUrl";

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

const statusStyles = {
  COMPLETED: {
    label: "Completed",
    className: "border-emerald-200 bg-emerald-50 text-emerald-700",
    icon: CheckCircle2,
  },
  ONGOING: {
    label: "Ongoing",
    className: "border-blue-200 bg-blue-50 text-blue-700",
    icon: CircleDot,
  },
  UPCOMING: {
    label: "Upcoming",
    className: "border-amber-200 bg-amber-50 text-amber-700",
    icon: Clock3,
  },
} as const;

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find((project) => project.id === slug);

  if (!project) notFound();

  const status = statusStyles[project.status];
  const StatusIcon = status.icon;

  return (
    <main
      aria-labelledby="project-title"
      data-aos="fade-up"
      data-aos-duration="700"
      className="flex flex-col gap-7 p-5 md:px-10 lg:px-[60px] lg:py-5"
    >
      <PreviousUrl />
      {/* Project Header */}
      <header
        aria-label="Project information"
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white"
      >
        <div className="relative flex flex-col gap-5 p-6 md:p-9">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-muted-foreground"
          >
            <FolderKanban aria-hidden="true" className="h-4 w-4" />
            <span>Projects &amp; Engagements</span>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Project Details</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <span
              role="status"
              aria-label={`Project status: ${status.label}`}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${status.className}`}
            >
              <StatusIcon aria-hidden="true" className="h-3.5 w-3.5" />
              {status.label}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              <Building2 aria-hidden="true" className="h-3.5 w-3.5" />
              {project.organization}
            </span>
          </div>

          <h1
            id="project-title"
            className="max-w-4xl text-2xl font-bold leading-tight tracking-tight text-slate-900 lg:text-3xl"
          >
            {project.title}
          </h1>

          <div
            aria-hidden="true"
            className="h-1 w-12 rounded-full bg-[#2B9D8F]"
          />
        </div>
      </header>

      {/* Project Overview */}
      <section
        aria-labelledby="project-overview-heading"
        className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 md:p-8"
      >
        <div className="flex items-center gap-3">
          <div
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F0F6FF]"
          >
            <FolderKanban className="h-4 w-4 text-[#1C4966]" />
          </div>

          <h2
            id="project-overview-heading"
            className="text-base font-bold text-slate-900"
          >
            Project Overview
          </h2>
        </div>

        <p className="text-xs leading-7 text-slate-600 md:text-sm md:leading-8">
          {project.description.replace(/^ssessed/, "Assessed")}
        </p>
      </section>

      {/* Key Outcomes */}
      {project.workDone.length > 0 && (
        <section
          aria-labelledby="project-outcomes-heading"
          className="flex flex-col gap-5 rounded-xl border border-slate-200 bg-white p-6 md:p-8"
        >
          <div className="flex items-center gap-3">
            <div
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-700" />
            </div>

            <div>
              <h2
                id="project-outcomes-heading"
                className="text-base font-bold text-slate-900"
              >
                Key Outcomes
              </h2>

              <p className="mt-1 text-xs text-muted-foreground">
                Results and progress from this engagement
              </p>
            </div>
          </div>

          <ul className="flex flex-col gap-3">
            {project.workDone.map((work, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-lg bg-emerald-50/60 p-4"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700"
                />

                <p className="text-sm leading-6 text-slate-700">{work}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
