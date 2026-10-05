import EditorSidebar from "@/components/editor/EditorSidebar";
import Header from "@/components/editor/Header";
import Preview from "@/components/editor/Preview";
import { isSitePageId } from "@/lib/site-pages";
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

  return (
    <SidebarProvider
      className="min-h-svh"
      style={{ "--sidebar-width": "20rem" } as CSSProperties}
    >
      <EditorSidebar page={page} />
      <SidebarInset className="min-h-svh">
        <Header />
        <div className=" m-5">
          <Preview page={page} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
