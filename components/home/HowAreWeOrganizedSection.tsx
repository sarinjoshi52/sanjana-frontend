"use client";

import Heading from "./Heading";
import { FaDiagramProject, FaChartLine } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import {
  CustomCard,
  CustomCardDescription,
  CustomCardIcon,
  CustomCardTitle,
} from "../CustomCard";

const cardContent = [
  {
    icon: <FaDiagramProject />,
    title: "Programming",
  },
  {
    icon: <FaChartLine />,
    title: "Business Development & Marketing",
  },
  {
    icon: <IoSettings />,
    title: "Operations",
  },
  {
    icon: <FaDatabase />,
    title: "Finance & Management Services",
  },
];

const serviceCardContent = [
  {
    title: "Result Focus",
    description:
      "Producing outcome and creating sustainable developmental impact.",
  },
  {
    title: "Excellence",
    description:
      "Pursuing and advocating high-quality standards in all outputs.",
  },
  {
    title: "Client Satisfaction",
    description: "Delivering responsive, desired, and deserving services.",
  },
  {
    title: "Change Orientation",
    description: "Preparing and innovating solutions for evolving challenges.",
  },
  {
    title: "Values Driven",
    description: "Promoting and practicing core developmental values.",
  },
  {
    title: "Sustainable Capability",
    description:
      "Developing individual and organizational capability sustainably.",
  },
];

const HowAreWeOrganizedSection = () => {
  return (
    <section
      id="how-are-we-organized"
      className="scroll-mt-[135px] flex flex-col gap-5"
    >
      <Heading title="How are we organized?" />
      <p className="text-muted-foreground lg:w-[65%] text-sm pl-3">
        A Board of Directors governs the institution, setting strategic
        direction and framing policies. A Management Team carries out
        programmatic operations across four core service clusters:
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-5 items-center">
        {cardContent.map((card, index) => (
          <CustomCard
            key={index}
            className="rounded-lg py-5 shadow-none h-[130px]"
          >
            <CustomCardIcon className="flex justify-center text-3xl text-primary-foreground">
              {card.icon}
            </CustomCardIcon>
            <CustomCardTitle className="flex text-center justify-center">
              {card.title}
            </CustomCardTitle>
          </CustomCard>
        ))}
      </div>

      <div
        id="principles-approaches"
        className="scroll-mt-[135px] bg-[#0E172A] px-5 lg:px-10 py-10 lg:py-15 mt-7 rounded-xl flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2 items-start">
          <h3 className="font-bold text-secondary text-xl">
            Service Priciple & Approaches
          </h3>
          <p className="text-[#94A3B8] text-xs">
            Guiding our commitment to high-quality knowledge services
          </p>
        </div>
        <div className="flex flex-col lg:flex-wrap gap-5">
          {serviceCardContent.map((item, index) => (
            <CustomCard
              key={index}
              className="bg-[#1E293B] lg:w-[31%] flex flex-col gap-2 border-none px-5 rounded-lg"
            >
              <CustomCardTitle className="text-primary-foreground text-xs lg:text-sm">
                {item.title}
              </CustomCardTitle>
              <CustomCardDescription className="text-muted text-[10px] lg:text-xs">
                {item.description}
              </CustomCardDescription>
            </CustomCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowAreWeOrganizedSection;
