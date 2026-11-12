import {
  CustomCard,
  CustomCardIcon,
  CustomCardTitle,
} from "../common/CustomCard";

import { ChartLine, Database, Network, Settings } from "lucide-react";

const cardContent = [
  {
    id: 1,
    icon: <Network />,
    title: "Programming",
  },
  {
    id: 2,
    icon: <ChartLine />,
    title: "Business Development & Marketing",
  },
  {
    id: 3,
    icon: <Settings />,
    title: "Operations",
  },
  {
    id: 4,
    icon: <Database />,
    title: "Finance & Management Services",
  },
];

export default function HowAreWeOrganized() {
  return (
    <section
      id="how-are-we-organized"
      className="capitalize flex flex-col gap-5 pt-15 pb-15 md:pb-30"
    >
      <h2>how are we organzied</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {cardContent.map((item) => (
          <CustomCard
            key={item.id}
            className="px-5 flex flex-col justify-start hover:border hover:border-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <CustomCardIcon className="flex text-xl border border-muted p-2 rounded-lg bg-light-green text-white ring-3 ring-[#E3F4EC] w-fit">
              {item.icon}
            </CustomCardIcon>
            <CustomCardTitle className="font-outfit font-semibold text-xl">
              {item.title}
            </CustomCardTitle>
          </CustomCard>
        ))}
      </div>
    </section>
  );
}
