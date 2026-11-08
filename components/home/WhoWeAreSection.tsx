import {
  CustomCard,
  CustomCardDescription,
  CustomCardTitle,
} from "../common/CustomCard";

const cardItem = [
  {
    icon: "",
    heading: "Human Resource Development",
    description:
      "Develops human resource competencies through result-oriented training, education, and capacity development.",
  },
  {
    icon: "",
    heading: "Research & Evidence Generation",
    description:
      "Engages in policy, applied, and action research to promote evidence-based decision-making.",
  },
  {
    icon: "",
    heading: "Management Advisory Services",
    description:
      "Provides practical management advisory services to enhance institutional capacity.",
  },
  {
    icon: "",
    heading: "Strategic Partnerships & Networking",
    description:
      "Partners and networks with like-minded institutions to pursue common developmental agendas. for each  point give me headings",
  },
];

export default function WhoWeAreSection() {
  return (
    <div className="flex flex-col gap-2 py-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mid:grid-cols-4">
        {cardItem.map((card, index) => (
          <CustomCard
            className="h-full min-w-0 px-5 hover:border-primary transition-all duration-300"
            key={index}
          >
            <CustomCardTitle className="text-xl">
              {card.heading}
            </CustomCardTitle>
            <CustomCardDescription>{card.description}</CustomCardDescription>
          </CustomCard>
        ))}
      </div>
    </div>
  );
}
