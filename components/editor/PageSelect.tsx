"use client";

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sitePages, type SitePageId } from "@/lib/site-pages";

export default function PageSelect({ page }: { page: SitePageId }) {
  const router = useRouter();
  const pageOptions = sitePages.map((item) => ({
    label: item.label,
    value: item.id,
  }));

  function handlePageChange(value: string | null) {
    if (!value) return;

    router.replace(value === "home" ? "/editor" : `/editor?page=${value}`);
  }

  return (
    <Select items={pageOptions} value={page} onValueChange={handlePageChange}>
      <SelectTrigger
        aria-label="Select page to preview"
        className="h-10 rounded-lg border-[#dce3e6] bg-[#f7f8f5] text-sm font-medium text-[#0c263f] shadow-sm hover:border-[#2b9d8f]/50 focus-visible:border-[#2b9d8f] focus-visible:ring-[#2b9d8f]/20"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {sitePages.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
