"use client";

import Heading from "./Heading";
import { FaDiagramProject, FaChartLine } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { CustomCard, CustomCardIcon, CustomCardTitle } from "../CustomCard";

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

const HowAreWeOrganizedSection = () => {
  return (
    <section className="flex flex-col gap-5">
      <Heading title="How are we organized?" />
      <p className="text-muted-foreground w-[65%] text-sm pl-3">
        A Board of Directors governs the institution, setting strategic
        direction and framing policies. A Management Team carries out
        programmatic operations across four core service clusters:
      </p>

      <div className="flex flex-row gap-5 items-center">
        {cardContent.map((card, index) => (
          <CustomCard key={index} className="rounded-lg py-5 w-1/4">
            <CustomCardIcon className="flex justify-center text-3xl text-primary-foreground">
              {card.icon}
            </CustomCardIcon>
            <CustomCardTitle className="flex justify-center">
              {card.title}
            </CustomCardTitle>
          </CustomCard>
        ))}
      </div>
    </section>
  );
};

export default HowAreWeOrganizedSection;
