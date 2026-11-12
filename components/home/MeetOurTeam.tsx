"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const teamData = [
  {
    id: "board-of-directors",
    team: "Board of Directors",
    description:
      "Our Board Members provide strategic leadership, governance, and oversight, guiding the organization in its commitment to strengthening institutions, advancing knowledge, and nurturing effective leadership. Drawing on their diverse professional backgrounds and collective expertise, they help shape our long-term vision, establish strategic priorities, and uphold the values of accountability, integrity, and excellence. Through thoughtful deliberation and informed decision-making, they ensure our initiatives remain responsive to evolving developmental challenges and opportunities. Their guidance fosters meaningful collaborations, supports evidence-based solutions, and reinforces our commitment to creating sustainable institutional impact.",
  },
  {
    id: "management-team",
    team: "Management Team",
    description:
      "Our Management Team plays a central role in translating the organization's vision and strategic priorities into meaningful action. Through effective planning, coordination, and implementation, the team oversees projects, manages resources, and facilitates collaboration across different areas of work. Combining professional expertise with a commitment to continuous learning, our management professionals work to ensure that every initiative is purposeful, accountable, and aligned with our institutional objectives. They encourage innovative approaches, strengthen operational processes, and foster an environment where knowledge can be transformed into practical solutions. Their collective efforts help deliver high-quality knowledge services, build institutional capacity, and achieve sustainable developmental outcomes",
  },
  {
    id: "advisors",
    team: "Advisors",
    description:
      "Our Advisors contribute specialized knowledge, professional experience, and diverse perspectives that enrich the organization's strategic thinking and developmental initiatives. Their insights help us examine complex challenges, identify emerging opportunities, and develop informed approaches to institutional strengthening and leadership development. By drawing on expertise across relevant disciplines, they support evidence-based decision-making, encourage innovation, and help maintain the relevance and quality of our knowledge services. Through constructive guidance, critical reflection, and collaborative engagement, our Advisors help bridge research, policy, and practice. Their contributions strengthen our ability to respond to evolving institutional needs and advance meaningful, inclusive, and sustainable developmental change.",
  },
];

export default function MeetOurTeam() {
  const [activeTeam, setActiveTeam] = useState(teamData[0].id);

  return (
    <section
      id="meet-our-team"
      data-aos="fade-up"
      className="flex flex-col gap-5 py-15 "
    >
      <h2 className="">Meet Our Team</h2>

      <Tabs
        value={activeTeam}
        onValueChange={(value) => {
          if (typeof value === "string") setActiveTeam(value);
        }}
        className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-10"
      >
        <TabsList className="h-auto w-full min-w-0 flex-wrap justify-start rounded-none bg-transparent p-0 md:col-start-1 md:row-start-1">
          {teamData.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className="font-outfit text-xs sm:text-sm md:text-base"
            >
              {item.team}
            </TabsTrigger>
          ))}
        </TabsList>
        {teamData.map((item) => (
          <TabsContent
            key={item.id}
            value={item.id}
            className="min-w-0 md:col-start-1 md:row-start-2"
          >
            <h3 className="mb-3 font-outfit text-2xl font-semibold text-primary">
              {item.team}
            </h3>
            <p className="font-outfit text-base leading-7 text-muted-foreground">
              {item.description}
            </p>
          </TabsContent>
        ))}
        <div
          key={activeTeam}
          aria-label={`${
            teamData.find((item) => item.id === activeTeam)?.team
          } image carousel`}
          className="min-h-64 rounded-3xl border border-dashed border-light-green/50 bg-light-green/5 md:col-start-2 md:row-start-1 md:row-span-2 md:min-h-[420px]"
        />
      </Tabs>
    </section>
  );
}
