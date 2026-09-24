"use client";

import { cn } from "cn";
import Heading from "./Heading";
import { FaCircleCheck } from "react-icons/fa6";

type OverviewProps = {
  className?: string;
};

const list = [
  "Develops human resource competencies through result-oriented training, education, and capacity development.",
  "Engages in policy, applied, and action research to promote evidence-based decision-making.",
  "Provides practical management advisory services to enhance institutional capacity.",
  "Partners and networks with like-minded institutions to pursue common developmental agendas.",
];

const OverviewSection = ({ className }: OverviewProps) => {
  return (
    <section
      id="overview"
      className={cn(
        "scroll-mt-[135px] flex flex-col gap-5 lg:gap-0 lg:flex-row items-center",
        className
      )}
    >
      <div className="lg:w-[50%] flex flex-col items-start gap-5">
        <Heading title="SañJñāNā Overview" />
        <ul className="pl-2 flex flex-col gap-5">
          {list.map((item, index) => (
            <li key={index} className="flex flex-row items-center gap-5">
              <FaCircleCheck className="text-sm shrink-0 text-primary-foreground" />
              <p className="text-muted-foreground text-sm">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-muted p-5 h-[250px] w-full lg:w-[50%]">
        <div className="rounded-xl h-full w-full bg-muted"></div>
      </div>
    </section>
  );
};

export default OverviewSection;
