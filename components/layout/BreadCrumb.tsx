"use client";

import { ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type BreadcrumbItem = {
  label: string;
  target?: string;
  href?: string;
};

const BreadCrumb = ({ pathnameOverride }: { pathnameOverride?: string }) => {
  const currentPathname = usePathname();
  const pathname = pathnameOverride ?? currentPathname;
  const breadcrumbItem: Record<string, BreadcrumbItem[]> = {
    "/": [
      { label: "SañJñāNā Overview", target: "overview" },
      { label: "Who Are We?", target: "who-are-we" },
      { label: "How Are We Organized?", target: "how-are-we-organized" },
      { label: "Principles & Approaches", target: "principles-approaches" },
      { label: "Core Resources", target: "core-resources" },
    ],
    "/knowledge": [
      {
        label: "Competency Development (COD)",
        href: "/knowledge/competency_development",
      },
      {
        label: "Professional Development (PRD)",
        href: "/knowledge/professional_development",
      },
      {
        label: "Organization Development (ORD)",
        href: "/knowledge/organization_development",
      },
      {
        label: "Advisory Services (ADS)",
        href: "/knowledge/advisory_services",
      },
      {
        label: "Analytical Services (ANS)",
        href: "/knowledge/analytical_services",
      },
      {
        label: "Information Services (INS)",
        href: "/knowledge/information_services",
      },
    ],
    "/project": [
      { label: "Completed Projects", target: "completed-projects" },
      { label: "Ongoing Projects", target: "ongoing-projects" },
      { label: "Upcoming Projects", target: "upcoming-projects" },
    ],
    "/publications": [
      { label: "Occasional Papers", target: "occasional-papers" },
      { label: "Thematic Papers", target: "thematic-papers" },
      { label: "Reports & Briefs", target: "reports-briefs" },
    ],
    "/knowledge-bank": [
      { label: "Industry Information", target: "industry-information" },
      { label: "Archives", target: "archives" },
      { label: "Network Publications", target: "network-publications" },
    ],
    "/contact": [
      { label: "Contact Address", target: "contact-address" },
      { label: "Subscribe", target: "subscribe" },
    ],
  };

  const getBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
    // Exact route match first
    if (breadcrumbItem[pathname]) {
      return breadcrumbItem[pathname];
    }

    // Fallback for dynamic detail pages
    if (pathname.startsWith("/knowledge/")) {
      return breadcrumbItem["/knowledge"] ?? [];
    }

    if (pathname.startsWith("/project/")) {
      return breadcrumbItem["/project"] ?? [];
    }

    return [];
  };

  const breadcrumbs = getBreadcrumbs(pathname);

  const router = useRouter();
  return (
    <div className="h-8.75  min-w-0 mx-auto overflow-x-auto border-muted border bg-[#F1F5F9] px-5 lg:px-20 py-2 flex flex-row flex-nowrap gap-5 items-center overflow-y-hidden shadow-md">
      {breadcrumbs.map((item, index) => (
        <div
          key={index}
          className="group cursor-pointer flex shrink-0 flex-row items-center gap-0"
        >
          <ChevronRight className="w-4 h-4 text-primary-foreground" />
          <button
            type="button"
            className="text-xs text-black group-hover:text-primary-foreground transition-colors duration-200"
            onClick={() => {
              if (item.href) {
                router.push(item.href);
                return;
              }

              if (!item.target) return;

              const target = document.getElementById(item.target);
              if (!target) return;

              const navHeight =
                document
                  .getElementById("sticky-navigation")
                  ?.getBoundingClientRect().height ?? 0;

              window.scrollTo({
                top:
                  target.getBoundingClientRect().top +
                  window.scrollY -
                  navHeight,
                behavior: "smooth",
              });
            }}
          >
            {item.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
