import AOSProvider from "@/components/layout/AOSProvider";
import Header from "@/components/layout/Header";
import { ReactNode } from "react";
import "aos/dist/aos.css";
import ScrollToTop from "@/components/common/ScrollToTop";
import Footer from "@/components/layout/Footer";

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
        <div className="flex flex-1 flex-col pt-6 sm:pt-8 lg:pt-10">
          {children}
        </div>
      </AOSProvider>
      <div className="mt-auto shrink-0">
        <Footer />
      </div>
    </main>
  );
}
