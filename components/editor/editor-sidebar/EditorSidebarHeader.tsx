import { GripVertical, PenLine } from "lucide-react";
import PageSelect from "@/components/editor/PageSelect";
import { SidebarHeader } from "@/components/ui/sidebar";
import type { SitePageId } from "@/lib/site-pages";
import { Separator } from "@/components/ui/separator";

export default function EditorSidebarHeader({ page }: { page: SitePageId }) {
  return (
    <SidebarHeader className="gap-4 border-b border-[#0c263f]/10 bg-white px-5 py-5">
      <div className="flex items-center gap-3">
        <div>
          <h2 className="text-lg! font-bold tracking-[0.18em] text-[#19766d] uppercase">
            Sañjñānā
          </h2>
          <p className="text-base leading-tight font-semibold tracking-tight text-[#0c263f]">
            Site editor
          </p>
        </div>
      </div>
      <Separator />
      <div className="space-y-1.5">
        <p className="px-0.5 text-[10px] font-bold tracking-[0.14em] text-[#64748b] uppercase">
          Editing page
        </p>
        <PageSelect page={page} />
      </div>
    </SidebarHeader>
  );
}
