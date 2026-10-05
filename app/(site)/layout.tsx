import SiteChrome from "@/components/layout/SiteChrome";
import PublishedSiteContent from "@/components/layout/PublishedSiteContent";
import FloatButton from "@/components/layout/FloatButton";
import AOSProvider from "./AOSProvider";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <SiteChrome>
      <PublishedSiteContent>
        <AOSProvider />
        <div className="mt-8 mb-8">{children}</div>
        <FloatButton />
      </PublishedSiteContent>
    </SiteChrome>
  );
}
