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
    <section
      data-aos="fade-up"
      id="who-we-are-section"
      className="flex flex-col py-15 gap-10"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mid:grid-cols-4">
        {cardItem.map((card, index) => (
          <CustomCard
            className="h-full min-w-0 px-5 hover:border-primary transition-all duration-300"
            key={index}
          >
            <CustomCardTitle className="text-xl font-medium tracking-wide">
              {card.heading}
            </CustomCardTitle>
            <CustomCardDescription className="font-outfit text-sm">
              {card.description}
            </CustomCardDescription>
          </CustomCard>
        ))}
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-6 rounded-xl bg-primary p-6 text-white sm:p-8 md:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] lg:gap-8 lg:p-12">
        <h2 className="text-secondary! leading-12 items-start">
          Sanjana <br /> Overview
        </h2>
        <article className="flex min-w-0 flex-col gap-5 font-outfit text-base sm:text-lg lg:text-xl">
          <p>
            SañJñāNā is a team of knowledge professionals committed to
            strengthening institutions, advancing knowledge, and nurturing
            leadership through crystallized, evidence-based services. We believe
            transformative societal development begins by addressing
            institutional inefficiencies, leadership gaps, and knowledge
            limitations to unlock greater perspectives, power, and potential.
          </p>
        </article>
      </div>
    </section>
  );
}
