import SiteChrome from "@/components/layout/SiteChrome";
import AOSProvider from "./AOSProvider";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <SiteChrome>
      <AOSProvider />
      <div className="mt-8 mb-8">{children}</div>
    </SiteChrome>
  );
}
