import PageRenderer from "@/components/home/PageRenderer";
import { homePageSections } from "@/lib/home-page";
import type { SitePageId } from "@/lib/site-pages";
import ContactPage from "./ContactPage";
import KnowledgeBankPage from "./KnowledgeBankPage";
import KnowledgePage from "./KnowledgePage";
import ProjectsPage from "./ProjectsPage";
import PublicationsPage from "./PublicationsPage";

export default function SitePageRenderer({
  page,
}: {
  page: SitePageId;
}) {
  switch (page) {
    case "home":
      return (
        <main
          data-aos="fade-in"
          className="flex flex-col px-5 lg:px-30 gap-15"
        >
          <PageRenderer sections={homePageSections} />
        </main>
      );
    case "knowledge":
      return <KnowledgePage />;
    case "project":
      return <ProjectsPage />;
    case "publications":
      return <PublicationsPage />;
    case "knowledge-bank":
      return <KnowledgeBankPage />;
    case "contact":
      return <ContactPage />;
  }
}
