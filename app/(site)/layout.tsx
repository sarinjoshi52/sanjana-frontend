import Announcement from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import BreadCrumb from "@/components/layout/BreadCrumb";
import Footer from "@/components/layout/Footer";
import AOSProvider from "./AOSProvider";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Announcement />
      <div id="sticky-navigation" className="sticky top-0 left-0 right-0 z-50">
        <Header />
        <BreadCrumb />
      </div>
      <AOSProvider />
      <div className="mt-8 mb-8">{children}</div>

      <Footer />
    </>
  );
}
