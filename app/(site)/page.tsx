import CoreResources from "@/components/home/CoreResources";
import HeroSection from "@/components/home/HeroSection";
import HowAreWeOrganized from "@/components/home/HowAreWeOrganized";
import MeetOurTeam from "@/components/home/MeetOurTeam";
import ServicePrinciple from "@/components/home/ServicePrinciple";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";

export default function Page() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex flex-col px-5 sm:px-5 lg:px-[5%] xl:px-[10%]">
        <HeroSection />
        <WhoWeAreSection />
        <MeetOurTeam />
        <HowAreWeOrganized />
      </div>
      <ServicePrinciple />
      <CoreResources />
    </main>
  );
}
