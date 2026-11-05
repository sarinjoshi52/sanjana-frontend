"use client";

import { ChevronRight } from "lucide-react";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
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
    <section
      id="core-resources"
      className="scroll-mt-[135px] flex flex-col gap-5"
    >
      <Heading title="Our Core Resources" />

      <div className="flex flex-col lg:flex-row gap-5 lg:h-100">
        <div className="border border-muted bg-white rounded-xl h-full p-5 flex flex-col gap-5">
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
        <div className="w-full min-h-48 lg:min-h-0 lg:h-full rounded-xl border border-muted bg-white p-3">
          <ImagePlaceholder label="Core resources image" />
        </div>
      </div>
    </section>
  );
};

export default OurResourceSection;
