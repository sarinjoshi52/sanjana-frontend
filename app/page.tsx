import HowAreWeOrganizedSection from "@/components/home/HowAreWeOrganizedSection";
import OurResourceSection from "@/components/home/OurResourceSection";
import OverviewSection from "@/components/home/OverviewSection";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";

export default function Home() {
  return (
    <main data-aos="fade-in" className="flex flex-col px-30 gap-15">
      {/* hero banner */}
      <div className="bg-linear-to-r from-primary to-[#17405B] px-10 py-13 rounded-xl grid grid-cols-[70%_30%]">
        <div className="flex flex-col items-start gap-5">
          <span className="bg-primary-foreground rounded-full px-5 tracking-wider py-1 uppercase text-white font-bold text-xs">
            Institution Knowledge Leadership
          </span>
          <h1 className="font-bold text-white text-[38px] leading-10">
            Advancing Transformative Perspectives, Power & Potential
          </h1>
          <p className="text-white">
            SañJñāNā Development Pvt. Ltd. aims to strengthen institutions,
            knowledge, and leadership through crystallized and evidence-based
            knowledge services for sustained developmental impact.
          </p>
        </div>
      </div>
      <OverviewSection className="w-full" />
      <WhoWeAreSection />
      <HowAreWeOrganizedSection />
      <OurResourceSection />
    </main>
  );
}
