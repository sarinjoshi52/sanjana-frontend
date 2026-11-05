import PageRenderer from "@/components/home/PageRenderer";
import { homePageSections } from "@/lib/home-page";

export default function Page() {
  return (
    <main data-aos="fade-in" className="flex flex-col px-5 lg:px-30 gap-15">
      <PageRenderer sections={homePageSections} />
    </main>
  );
}
