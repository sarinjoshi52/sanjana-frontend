import EditorSidebar from "@/components/editor/EditorSidebar";
import Header from "@/components/editor/Header";
import Preview from "@/components/editor/Preview";
import { isSitePageId, sitePages } from "@/lib/site-pages";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { CSSProperties } from "react";

export default async function Editor({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const requestedPage = (await searchParams).page;
  const pageValue = Array.isArray(requestedPage)
    ? requestedPage[0]
    : requestedPage;
  const page = isSitePageId(pageValue) ? pageValue : "home";
  const pageLabel = sitePages.find((item) => item.id === page)?.label ?? "Home";

  return (
    <SidebarProvider
      className="min-h-svh"
      style={{ "--sidebar-width": "20rem" } as CSSProperties}
    >
      <EditorSidebar page={page} />
      <SidebarInset className="flex min-h-svh min-w-0 flex-1 flex-col bg-[#f7f8f5]">
        <Header />
        <div className="min-h-0 flex-1 p-4 md:p-6">
          <section className="mx-auto flex h-[calc(100svh-11rem)] min-h-[32rem] max-w-screen-2xl flex-col overflow-hidden rounded-2xl border border-[#0c263f]/10 bg-white shadow-[0_20px_60px_-32px_rgba(12,38,63,0.3)]">
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-[#0c263f]/10 bg-white px-4 sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <div className="min-w-0">
                  <h2 className="truncate text-base! font-semibold text-[#0c263f] sm:text-sm">
                    Preview
                  </h2>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#e4efeb] px-2.5 py-1 text-[10px] font-semibold text-[#176b63] sm:text-xs">
                <span className="size-1.5 rounded-full bg-[#2b9d8f]" />
                Live
              </span>
            </div>
            <div className="min-h-0 flex-1 bg-[#e4efeb]/35 p-2 sm:p-4">
              <Preview page={page} />
            </div>
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
