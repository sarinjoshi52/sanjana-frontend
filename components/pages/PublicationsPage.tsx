"use client";

import { HiMiniBookOpen } from "react-icons/hi2";
import { BiSolidReport } from "react-icons/bi";
import { FaNewspaper } from "react-icons/fa6";
import {
  CustomCard,
  CustomCardDescription,
  CustomCardIcon,
  CustomCardTitle,
} from "@/components/CustomCard";
import { useRouter } from "next/navigation";

const publications = [
  {
    slug: "Occasional_Thematic_Papers",
    icon: <HiMiniBookOpen />,
    title: "Occasional & Thematic Papers",
    description:
      "In-depth papers focusing on leadership, institutional design, and policy development in emerging market economies.",
  },
  {
    slug: "Reports_Policy",
    icon: <BiSolidReport />,
    title: "Reports & Policy Briefs",
    description:
      "Diagnostic summaries, analytical reviews, and evidence-backed policy inputs for practical adoption.",
  },
  {
    slug: "News_Notes_Updates",
    icon: <FaNewspaper />,
    title: "News Notes & Updates",
    description:
      "Periodic updates highlighting organizational insights, developmental trends, and upcoming learning sessions.",
  },
];

export default function Publication() {
  const router = useRouter();
  return (
    <main
      data-aos="fade-in"
      className="flex flex-col gap-5 px-5 lg:px-30 min-h-[450px]"
    >
      <h1 className="text-3xl font-bold tracking-tight">
        Publications & Knowledge Resources
      </h1>
      <div className="flex justify-center gap-5 items-center flex-col lg:flex-row lg:flex-wrap">
        {publications.map((item, index) => (
          <CustomCard
            onClick={() => router.push(`/publications/${item.slug}`)}
            key={index}
            className="lg:w-[32%] cursor-pointer max-h-40 shadow-none rounded-xl p-5 flex flex-col gap-3"
          >
            <CustomCardIcon className="text-[36px] text-primary-foreground">
              {item.icon}
            </CustomCardIcon>
            <CustomCardTitle className="text-xl font-bold">
              {item.title}
            </CustomCardTitle>
            <CustomCardDescription>{item.description}</CustomCardDescription>
          </CustomCard>
        ))}
      </div>
    </main>
  );
}
