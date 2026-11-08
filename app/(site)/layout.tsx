import AnnouncementBar from "@/components/layout/AnnouncementBar";
import AOSProvider from "@/components/layout/AOSProvider";
import Header from "@/components/layout/Header";
import { ReactNode } from "react";
import "aos/dist/aos.css";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-svh flex-col">
      {/* <AnnouncementBar /> */}
      <div
        id="sticky-navigation"
        className="sticky top-0 left-0 right-0 z-50 max-h-svh overflow-y-auto"
      >
        <Header />
      </div>
      <ScrollToTop />
      <AOSProvider>
        <div className="flex flex-1 flex-col px-5 py-6 sm:px-5 sm:py-8 lg:px-[5%] lg:py-10 xl:px-[10%]">
          {children}
        </div>
      </AOSProvider>
    </main>
  );
}
