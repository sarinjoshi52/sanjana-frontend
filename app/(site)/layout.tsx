import SiteChrome from "@/components/layout/SiteChrome";
import AOSProvider from "./AOSProvider";
import ScrollToTop from "@/components/layout/ScrollToTop";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <SiteChrome>
      <AOSProvider />
      <ScrollToTop />
      <div className="mt-8 mb-8">{children}</div>
    </SiteChrome>
  );
}
