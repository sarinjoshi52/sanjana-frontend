import SitePageRenderer from "@/components/pages/SitePageRenderer";
import SiteChrome from "@/components/layout/SiteChrome";
import InlineEditableContent from "@/components/editor/InlineEditableContent";
import { sitePages, type SitePageId } from "@/lib/site-pages";

export default function Preview({ page }: { page: SitePageId }) {
  const currentPage = sitePages.find((item) => item.id === page)!;

  return (
    <div data-editor-preview className="mx-auto w-full h-screen overflow-y-auto shadow-xl">
      <InlineEditableContent page={page}>
        <SiteChrome pathname={currentPage.path} readOnlyNavigation>
          <div className="mt-8 mb-8" data-inline-scope="page">
            <SitePageRenderer page={page} />
          </div>
        </SiteChrome>
      </InlineEditableContent>
    </div>
  );
}
