import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      data-aos="fade-up"
      className="flex flex-1 flex-col items-start justify-center gap-8 py-8 sm:gap-10 sm:py-10"
    >
      <div className="flex w-1/2 max-w-5xl flex-col gap-5">
        <span className="font-outfit font-semibold text-primary-foreground text-base tracking-wide rounded-full px-5 py-2 bg-[#E3F4EC] w-fit">
          Institution Knowledge Leadership
        </span>
        <h1 className="text-4xl! font-bold! leading-tight! tracking-wider! text-primary sm:text-5xl! lg:text-[58px]!">
          Advancing Transformative Perspectives, Power & Potential
        </h1>
        <p className="font-outfit text-base font-light leading-relaxed tracking-wide text-muted-foreground sm:text-lg lg:text-xl">
          SañJñāNā Development Pvt. Ltd. aims to strengthen institutions,
          knowledge, and leadership through crystallized and evidence-based
          knowledge services for sustained developmental impact.
        </p>
        <div className="mt-3 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Link
            href={"/"}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#22B17A] px-4 py-3 font-outfit text-base font-semibold text-white transition-all duration-200 hover:bg-[#67caa4] hover:shadow-md sm:w-fit sm:text-lg"
          >
            Discover Who We Are
            <ArrowDown className="w-5 h-5" />
          </Link>

          <Link
            href={"/"}
            className="w-full rounded-full border-2 border-primary bg-white px-4 py-3 text-center font-outfit text-base font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-md sm:w-fit sm:text-lg"
          >
            Explore Our Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
