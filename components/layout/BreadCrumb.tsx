"use client";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const pathname = usePathname();
  const breadcrumbItem: Record<string, string[]> = {
    "/": [
      "SañJñāNā Overview",
      "Who Are We?",
      "How Are We Organized?",
      "Principles & Approaches",
      "Core Resources",
    ],
    "/knowledge": [
      "Competency Development (COD)",
      "Professional Development (PRD)",
      "Organization Development (ORD)",
      "Advisory Services (ADS)",
      "Analytical Services (ANS)",
      "Information Services (INS)",
    ],
    "/project": ["Completed Projects", "Ongoing Projects", "Upcoming Projects"],
    "/publications": [
      "Occasional Papers",
      "Thematic Papers",
      "Reports & Briefs",
    ],
    "/knowledge-bank": [
      "Industry Information",
      "Archives",
      "Network Publications",
    ],
    "/contact": ["Contact Address", "Subscribe"],
  };

  const breadcrumbs = breadcrumbItem[pathname] ?? [];
  return (
    <div className="h-[35px] border-muted border bg-[#F1F5F9] px-20 py-2 flex flex-row gap-5 items-center shadow-md">
      {breadcrumbs.map((item, index) => (
        <div key={index} className="group flex flex-row items-center gap-0">
          <ChevronRight className="w-4 h-4 text-primary-foreground" />
          <span className="text-xs text-black group-hover:text-primary-foreground cursor-pointer transition-colors duration-200">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
