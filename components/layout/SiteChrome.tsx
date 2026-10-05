import type { ReactNode } from "react";
import Announcement from "@/components/layout/AnnouncementBar";
import BreadCrumb from "@/components/layout/BreadCrumb";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function SiteChrome({
  children,
  pathname,
  readOnlyNavigation = false,
}: {
  children: ReactNode;
  pathname?: string;
  readOnlyNavigation?: boolean;
}) {
  return (
    <>
      <Announcement />
      <div id="sticky-navigation" className="sticky top-0 left-0 right-0 z-50">
        <Header
          pathnameOverride={pathname}
          navigationDisabled={readOnlyNavigation}
        />
        <BreadCrumb pathnameOverride={pathname} />
      </div>
      {children}
      <Footer />
    </>
  );
}
