import type { HomePageSection } from "@/lib/home-page";
import HowAreWeOrganizedSection from "./HowAreWeOrganizedSection";
import OurResourceSection from "./OurResourceSection";
import OverviewSection from "./OverviewSection";
import WhoWeAreSection from "./WhoWeAreSection";

function renderSection(section: HomePageSection) {
  switch (section.type) {
    case "hero":
      return (
        <section className="bg-linear-to-r from-primary to-[#17405B] px-10 py-13 rounded-xl grid grid-cols-[70%_30%]">
          <div className="flex flex-col items-start gap-5">
            <span className="bg-primary-foreground rounded-full px-2 md:px-5 tracking-wider py-1 uppercase text-white font-bold text-[11px] md:text-xs whitespace-nowrap">
              {section.eyebrow}
            </span>
            <h1 className="font-bold text-white text-[34px] lg:text-[38px] leading-10">
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
        <div
          key={section.id}
          data-editor-section={section.id}
          data-editor-label={
            section.type === "hero"
              ? "Hero"
              : section.type === "overview"
                ? "Overview"
                : section.type === "who-we-are"
                  ? "Who We Are"
                  : section.type === "organization"
                    ? "Organization"
                    : "Resources"
          }
        >
          {renderSection(section)}
        </div>
      ))}
    </>
  );
}
