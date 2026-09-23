"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const pathname = usePathname();
  const breadcrumbItem: Record<string, { label: string; target: string }[]> = {
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
        target: "knowledge",
      },
      {
        label: "Professional Development (PRD)",
        target: "knowledge",
      },
      {
        label: "Organization Development (ORD)",
        target: "knowledge",
      },
      { label: "Advisory Services (ADS)", target: "knowledge" },
      { label: "Analytical Services (ANS)", target: "knowledge" },
      { label: "Information Services (INS)", target: "knowledge" },
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

  const breadcrumbs = breadcrumbItem[pathname] ?? [];
  return (
    <div className="h-[35px] border-muted border bg-[#F1F5F9] px-20 py-2 flex flex-row gap-5 items-center shadow-md">
      {breadcrumbs.map((item, index) => (
        <div key={index} className="group flex flex-row items-center gap-0">
          <ChevronRight className="w-4 h-4 text-primary-foreground" />
          <button
            type="button"
            className="text-xs cursor-pointer text-black group-hover:text-primary-foreground transition-colors duration-200"
            onClick={() => {
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
