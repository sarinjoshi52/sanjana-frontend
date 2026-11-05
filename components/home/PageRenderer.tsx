import type { HomePageSection } from "@/lib/home-page";
import HowAreWeOrganizedSection from "./HowAreWeOrganizedSection";
import OurResourceSection from "./OurResourceSection";
import OverviewSection from "./OverviewSection";
import WhoWeAreSection from "./WhoWeAreSection";
import MeetOurTeam from "./MeetOurTeam";

function renderSection(section: HomePageSection) {
  switch (section.type) {
    case "hero":
      return (
        <section className="bg-linear-to-r from-primary to-[#17405B] px-5 py-10 md:px-10 md:py-13 rounded-xl grid grid-cols-1 md:grid-cols-[70%_30%]">
          <div className="flex flex-col items-start gap-5">
            <span className="bg-primary-foreground rounded-full px-2 md:px-5 tracking-wider py-1 uppercase text-white font-bold text-[11px] md:text-xs">
              {section.eyebrow}
            </span>
            <h1 className="font-bold text-white text-3xl lg:text-[38px] leading-tight lg:leading-10">
              {section.title}
            </h1>
            <p className="text-white text-sm lg:text-base">
              {section.description}
            </p>
          </div>
        </section>
      );
    case "overview":
      return <OverviewSection className="w-full" />;
    case "who-we-are":
      return <WhoWeAreSection />;
    case "meet-our-team":
      return <MeetOurTeam />;
    case "organization":
      return <HowAreWeOrganizedSection />;
    case "resources":
      return <OurResourceSection />;
  }
}

export default function PageRenderer({
  sections,
}: {
  sections: HomePageSection[];
}) {
  return (
    <>
      {sections.map((section) => (
        <div key={section.id}>{renderSection(section)}</div>
      ))}
    </>
  );
}
