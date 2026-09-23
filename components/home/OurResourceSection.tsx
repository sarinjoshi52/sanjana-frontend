"use client";

import { ChevronRight } from "lucide-react";
import Heading from "./Heading";

const list = [
  {
    content:
      "Strong governance and leadership from accomplished practitioners.",
  },
  {
    content: "Skilled core team with practical and academic excellence.",
  },
  {
    content: "Robust technological infrastructure & knowledge support systems.",
  },
  {
    content: "Vast network of associate subject specialists and experts",
  },
];

const OurResourceSection = () => {
  return (
    <section id="core-resources" className="scroll-mt-[135px] flex flex-col gap-5">
      <Heading title="Our Core Resources" />

      <div className="flex flex-row gap-5 h-100">
        <div className="border border-muted bg-white rounded-lg h-full p-5 flex flex-col gap-5">
          <p className="text-muted-foreground text-sm">
            What distinguishes SañJñāNā is the wealth of knowledge resources it
            embodies, stemming from the expertise and experience of its core
            professionals and associates across diverse operational sectors.
          </p>
          <ul className="space-y-2">
            {list.map((content, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-primary-foreground" />
                <span className="text-xs text-muted-foreground">
                  {content.content}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-muted rounded-lg bg-muted w-full h-full p-5 flex flex-col gap-5"></div>
      </div>
    </section>
  );
};

export default OurResourceSection;
