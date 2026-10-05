import type { ReactNode } from "react";
import Announcement from "@/components/layout/AnnouncementBar";
import BreadCrumb from "@/components/layout/BreadCrumb";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function SiteChrome({
  children,
  pathname,
  readOnlyNavigation = false,
  navigationMode = "published",
}: {
  children: ReactNode;
  pathname?: string;
  readOnlyNavigation?: boolean;
  navigationMode?: "draft" | "published";
}) {
  return (
    <div className="grid min-h-svh grid-rows-[auto_auto_1fr_auto]">
      <Announcement />
      <div id="sticky-navigation" className="sticky top-0 left-0 right-0 z-50">
        <Header
          pathnameOverride={pathname}
          navigationDisabled={readOnlyNavigation}
          navigationMode={navigationMode}
        />
        <BreadCrumb pathnameOverride={pathname} />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
