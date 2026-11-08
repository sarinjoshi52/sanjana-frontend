import HeroSection from "@/components/home/HeroSection";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";

export default function Page() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <WhoWeAreSection />
    </main>
  );
}
