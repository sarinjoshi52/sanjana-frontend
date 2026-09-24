import { cn } from "cn";
import {
  CustomCard,
  CustomCardDescription,
  CustomCardIcon,
} from "../CustomCard";
import { FaQuoteLeft } from "react-icons/fa";
type WhoWeAreProps = {
  className?: string;
};

const WhoWeAreSection = ({ className }: WhoWeAreProps) => {
  return (
    <section
      id="who-are-we"
      className={cn(
        "scroll-mt-[135px] rounded-xl border border-muted shadow-md p-8 flex flex-col lg:flex-row items-center gap-5 bg-white",
        className
      )}
    >
      <div className="flex flex-col gap-5 lg:w-[63%]">
        <h2 className="font-bold text-black capitalize text-2xl">
          who are we?
        </h2>
        <p className="text-muted-foreground text-sm leading-5">
          SañJñāNā is a team of knowledge professionals dedicated to developing
          institutions, knowledge, and leadership. Our mission is to strengthen
          these foundational pillars, advancing transformative perspectives,
          power, and potential within society through crystallized and
          evidence-based knowledge services.
        </p>
        <p className="text-muted-foreground text-sm leading-5">
          At the core of our operations is the belief that many societal
          problems stem from dysfunctions within our institutions, knowledge,
          and leadership. For the most part, institutions are underperforming,
          leadership under-delivering, and knowledge underwhelming. Addressing
          these issues is essential for achieving developmental transformation.
        </p>
      </div>
      <CustomCard className="px-10 pb-12 pt-15 rounded-xl shadow-none  lg:w-[37%] bg-[#F9FAFC]">
        <CustomCardIcon className="flex text-start">
          <FaQuoteLeft className="w-7 h-7 text-primary-foreground" />
        </CustomCardIcon>
        <CustomCardDescription className="italic text-xs">
          "Knowledge deficiencies lead to underperformance and missed growth
          opportunities. Our services bridge existing gaps through diagnostic
          assessments and targeted development interventions."
        </CustomCardDescription>
      </CustomCard>
    </section>
  );
};

export default WhoWeAreSection;
