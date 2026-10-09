"use client";

import { useEffect, useRef, useState } from "react";
import SitePageRenderer from "@/components/pages/SitePageRenderer";
import SiteChrome from "@/components/layout/SiteChrome";
import InlineEditableContent from "@/components/editor/InlineEditableContent";
import { sitePages, type SitePageId } from "@/lib/site-pages";

export default function Preview({ page }: { page: SitePageId }) {
  const currentPage = sitePages.find((item) => item.id === page)!;
  const previewRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    const updateZoom = () => {
      setZoom(Math.min(1, preview.clientWidth / 1280));
    };

    updateZoom();
    const observer = new ResizeObserver(updateZoom);
    observer.observe(preview);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      data-editor-preview
      ref={previewRef}
      className="h-full min-h-0 w-full overflow-y-auto rounded-xl border border-[#dce3e6] bg-white shadow-sm"
    >
      <div style={{ width: 1280, zoom }}>
        <InlineEditableContent page={page}>
          <SiteChrome pathname={currentPage.path} readOnlyNavigation navigationMode="draft">
            <div className="mt-8 mb-8" data-inline-scope="page">
              <SitePageRenderer page={page} />
            </div>
          </SiteChrome>
        </InlineEditableContent>
      </div>
    </div>
  );
}
