import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Heading from "./Heading";

type OptionType = {
  name: string;
  abbrevation?: string;
  description: string;
  image?: string[];
};

const options: OptionType[] = [
  {
    name: "Board Members",
    abbrevation: "BOD",
    description:
      "Our Board Members provide strategic leadership, governance, and oversight, guiding the organization in its commitment to strengthening institutions, advancing knowledge, and nurturing effective leadership. Drawing on their diverse professional backgrounds and collective expertise, they help shape our long-term vision, establish strategic priorities, and uphold the values of accountability, integrity, and excellence. Through thoughtful deliberation and informed decision-making, they ensure our initiatives remain responsive to evolving developmental challenges and opportunities. Their guidance fosters meaningful collaborations, supports evidence-based solutions, and reinforces our commitment to creating sustainable institutional impact.",
    image: [],
  },
  {
    name: "Management Team",
    description:
      "Our Management Team plays a central role in translating the organization's vision and strategic priorities into meaningful action. Through effective planning, coordination, and implementation, the team oversees projects, manages resources, and facilitates collaboration across different areas of work. Combining professional expertise with a commitment to continuous learning, our management professionals work to ensure that every initiative is purposeful, accountable, and aligned with our institutional objectives. They encourage innovative approaches, strengthen operational processes, and foster an environment where knowledge can be transformed into practical solutions. Their collective efforts help deliver high-quality knowledge services, build institutional capacity, and achieve sustainable developmental outcomes.",
    image: [],
  },
  {
    name: "Advisors",
    description:
      "Our Advisors contribute specialized knowledge, professional experience, and diverse perspectives that enrich the organization's strategic thinking and developmental initiatives. Their insights help us examine complex challenges, identify emerging opportunities, and develop informed approaches to institutional strengthening and leadership development. By drawing on expertise across relevant disciplines, they support evidence-based decision-making, encourage innovation, and help maintain the relevance and quality of our knowledge services. Through constructive guidance, critical reflection, and collaborative engagement, our Advisors help bridge research, policy, and practice. Their contributions strengthen our ability to respond to evolving institutional needs and advance meaningful, inclusive, and sustainable developmental change.",
    image: [],
  },
];

export default function MeetOurTeam() {
  return (
    <section className="flex flex-col gap-5">
      <Heading title="Meet Our Team" />

      <Tabs
        defaultValue={options[0].name}
        orientation="horizontal"
        className="flex w-full border p-5 border-muted rounded-lg bg-white flex-col gap-0"
      >
        {/* Tabs directly below heading */}
        <TabsList
          variant="line"
          className="h-auto border-b border-muted w-fit justify-start gap-2"
        >
          {options.map((option) => (
            <TabsTrigger
              key={option.name}
              value={option.name}
              className="cursor-pointer px-4 py-3 text-sm"
            >
              {option.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content below tabs */}
        {options.map((option) => (
          <TabsContent
            key={option.name}
            value={option.name}
            className="mt-0 w-full"
          >
            <div className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-lg p-5 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:gap-10">
              {/* Left: Description */}
              <div className="flex min-w-0 flex-col items-start gap-4">
                {option.abbrevation && (
                  <span className="text-sm font-semibold tracking-widest text-muted-foreground">
                    {option.abbrevation}
                  </span>
                )}

                <h3 className="text-2xl font-semibold">{option.name}</h3>

                <p className="w-full break-words text-sm leading-6 text-muted-foreground">
                  {option.description}
                </p>
              </div>

              {/* Right: Carousel */}
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="min-w-0 w-full max-w-full"
              >
                <CarouselContent>
                  {[1, 2, 3].map((item) => (
                    <CarouselItem key={item} className="min-w-0 basis-full">
                      <div className="h-[250px] w-full rounded-xl border bg-muted md:h-[300px]" />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="mt-4 flex items-center justify-end gap-2">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Carousel>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
