import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Heading from "./Heading";
import TeamCarousel from "./TeamCarousel";

type OptionType = {
  name: string;
  title: string;
  description: string;
  image?: string[];
};

const options: OptionType[] = [
  {
    name: "Board Members",
    title: "Board of Directors",
    description:
      "Our Board Members provide strategic leadership, governance, and oversight, guiding the organization in its commitment to strengthening institutions, advancing knowledge, and nurturing effective leadership. Drawing on their diverse professional backgrounds and collective expertise, they help shape our long-term vision, establish strategic priorities, and uphold the values of accountability, integrity, and excellence. Through thoughtful deliberation and informed decision-making, they ensure our initiatives remain responsive to evolving developmental challenges and opportunities. Their guidance fosters meaningful collaborations, supports evidence-based solutions, and reinforces our commitment to creating sustainable institutional impact.",
    image: [],
  },
  {
    name: "Management Team",
    title: "Management Team",
    description:
      "Our Management Team plays a central role in translating the organization's vision and strategic priorities into meaningful action. Through effective planning, coordination, and implementation, the team oversees projects, manages resources, and facilitates collaboration across different areas of work. Combining professional expertise with a commitment to continuous learning, our management professionals work to ensure that every initiative is purposeful, accountable, and aligned with our institutional objectives. They encourage innovative approaches, strengthen operational processes, and foster an environment where knowledge can be transformed into practical solutions. Their collective efforts help deliver high-quality knowledge services, build institutional capacity, and achieve sustainable developmental outcomes.",
    image: [],
  },
  {
    name: "Advisors",
    title: "Advisors",
    description:
      "Our Advisors contribute specialized knowledge, professional experience, and diverse perspectives that enrich the organization's strategic thinking and developmental initiatives. Their insights help us examine complex challenges, identify emerging opportunities, and develop informed approaches to institutional strengthening and leadership development. By drawing on expertise across relevant disciplines, they support evidence-based decision-making, encourage innovation, and help maintain the relevance and quality of our knowledge services. Through constructive guidance, critical reflection, and collaborative engagement, our Advisors help bridge research, policy, and practice. Their contributions strengthen our ability to respond to evolving institutional needs and advance meaningful, inclusive, and sustainable developmental change.",
    image: [],
  },
];

export default function MeetOurTeam() {
  return (
    <section id="meet-our-team" className="flex flex-col gap-5">
      <Heading title="Meet Our Team" />

      <Tabs defaultValue={options[0].name} className="flex-col gap-4">
        <TabsList className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
          {options.map((option) => (
            <TabsTrigger
              key={option.name}
              value={option.name}
              className="h-auto flex-none cursor-pointer rounded-full bg-muted px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-muted-foreground data-active:bg-primary data-active:text-white data-active:hover:text-white"
            >
              {option.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {options.map((option) => (
          <TabsContent key={option.name} value={option.name} className="mt-0">
            <div className="grid grid-cols-1 items-center gap-6 rounded-xl border border-muted bg-white p-5 md:grid-cols-[minmax(0,6fr)_minmax(0,4fr)] md:gap-10 md:p-8">
              <div className="flex min-w-0 flex-col gap-3">
                <h3 className="text-lg font-bold text-slate-900">
                  {option.title}
                </h3>
                <p className="break-words text-xs leading-6 text-muted-foreground md:text-sm md:leading-7">
                  {option.description}
                </p>
              </div>

              <TeamCarousel images={option.image} label={option.title} />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
